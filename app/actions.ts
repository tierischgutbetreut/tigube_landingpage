"use server"

import { supabaseAdmin, isSupabaseConfigured, demoStorage } from "@/lib/supabase"
import type { EmailSignup } from "@/lib/supabase"

interface EmailSubmissionResult {
  success: boolean
  message: string
  error?: string
}

export async function submitEmail(prevState: any, formData: FormData): Promise<EmailSubmissionResult> {
  const email = formData.get("email") as string
  const source = (formData.get("source") as string) || "landing_page"
  const userType = (formData.get("user_type") as string) || "unknown"

  // Validierung
  if (!email) {
    return {
      success: false,
      message: "Bitte geben Sie eine E-Mail-Adresse ein.",
      error: "EMAIL_REQUIRED",
    }
  }

  if (!userType || userType === "") {
    return {
      success: false,
      message: "Bitte wählen Sie aus, ob Sie Tierbesitzer oder Tierbetreuer sind.",
      error: "USER_TYPE_REQUIRED",
    }
  }

  // E-Mail-Format validieren
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      error: "INVALID_EMAIL",
    }
  }

  // Demo-Modus wenn Supabase nicht konfiguriert ist
  if (!isSupabaseConfigured() || !supabaseAdmin) {
    console.log(`E-Mail-Anmeldung (Demo-Modus): ${email} als ${userType} von ${source}`)

    // Check if email already exists in demo storage
    const existingEmail = demoStorage.findEmail(email)
    if (existingEmail) {
      return {
        success: true,
        message: "Diese E-Mail-Adresse ist bereits registriert. Sie werden benachrichtigt! (Demo-Modus)",
      }
    }

    // Add to demo storage with user type
    demoStorage.addEmail(email, `${source}_${userType}`)

    const userTypeText =
      userType === "tierbesitzer"
        ? "Tierbesitzer"
        : userType === "tierbetreuer"
          ? "Tierbetreuer"
          : "Tierbesitzer und Tierbetreuer"

    return {
      success: true,
      message: `Vielen Dank! Als ${userTypeText} werden Sie benachrichtigt, sobald tigube startet. (Demo-Modus)`,
    }
  }

  try {
    // Prüfen ob E-Mail bereits existiert
    const { data: existingEmail, error: checkError } = await supabaseAdmin
      .from("email_signups")
      .select("email, unsubscribed_at, source")
      .eq("email", email)
      .single()

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 = No rows found, das ist OK
      console.error("Fehler beim Prüfen der E-Mail:", checkError)
      return {
        success: false,
        message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        error: "DATABASE_ERROR",
      }
    }

    if (existingEmail) {
      if (existingEmail.unsubscribed_at) {
        // E-Mail war abgemeldet, reaktivieren
        const { error: updateError } = await supabaseAdmin
          .from("email_signups")
          .update({
            unsubscribed_at: null,
            updated_at: new Date().toISOString(),
            source: `${source}_${userType}`,
          })
          .eq("email", email)

        if (updateError) {
          console.error("Fehler beim Reaktivieren der E-Mail:", updateError)
          return {
            success: false,
            message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
            error: "UPDATE_ERROR",
          }
        }

        return {
          success: true,
          message: "Willkommen zurück! Sie werden wieder über tigube informiert.",
        }
      } else {
        // E-Mail bereits registriert und aktiv
        return {
          success: true,
          message: "Diese E-Mail-Adresse ist bereits registriert. Sie werden benachrichtigt!",
        }
      }
    }

    // Neue E-Mail-Adresse hinzufügen
    const { data, error: insertError } = await supabaseAdmin
      .from("email_signups")
      .insert([
        {
          email: email,
          source: `${source}_${userType}`,
          is_verified: false,
        },
      ])
      .select()
      .single()

    if (insertError) {
      console.error("Fehler beim Speichern der E-Mail:", insertError)

      // Spezielle Behandlung für Unique Constraint Violations
      if (insertError.code === "23505") {
        return {
          success: true,
          message: "Diese E-Mail-Adresse ist bereits registriert. Sie werden benachrichtigt!",
        }
      }

      return {
        success: false,
        message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        error: "INSERT_ERROR",
      }
    }

    console.log(`Neue E-Mail-Anmeldung gespeichert:`, data)

    const userTypeText =
      userType === "tierbesitzer"
        ? "Tierbesitzer"
        : userType === "tierbetreuer"
          ? "Tierbetreuer"
          : "Tierbesitzer und Tierbetreuer"

    return {
      success: true,
      message: `Vielen Dank! Als ${userTypeText} werden Sie benachrichtigt, sobald tigube startet.`,
    }
  } catch (error) {
    console.error("Unerwarteter Fehler:", error)
    return {
      success: false,
      message: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      error: "UNEXPECTED_ERROR",
    }
  }
}

// Bestehende Funktionen bleiben unverändert...
export async function getEmailSignups(): Promise<EmailSignup[]> {
  if (!isSupabaseConfigured() || !supabaseAdmin) {
    // Demo-Daten aus dem In-Memory-Storage zurückgeben
    return demoStorage.getAllEmails()
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("email_signups")
      .select("*")
      .is("unsubscribed_at", null)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Fehler beim Abrufen der E-Mail-Anmeldungen:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Unerwarteter Fehler beim Abrufen der E-Mails:", error)
    return []
  }
}

// Admin-Funktion zum Abrufen von Statistiken
export async function getEmailSignupStats() {
  if (!isSupabaseConfigured() || !supabaseAdmin) {
    // Demo-Statistiken zurückgeben
    return demoStorage.getStats()
  }

  try {
    const { data: totalSignups, error: totalError } = await supabaseAdmin
      .from("email_signups")
      .select("id", { count: "exact" })
      .is("unsubscribed_at", null)

    const { data: todaySignups, error: todayError } = await supabaseAdmin
      .from("email_signups")
      .select("id", { count: "exact" })
      .is("unsubscribed_at", null)
      .gte("created_at", new Date().toISOString().split("T")[0])

    if (totalError || todayError) {
      console.error("Fehler beim Abrufen der Statistiken:", totalError || todayError)
      return { total: 0, today: 0 }
    }

    return {
      total: totalSignups?.length || 0,
      today: todaySignups?.length || 0,
    }
  } catch (error) {
    console.error("Unerwarteter Fehler beim Abrufen der Statistiken:", error)
    return { total: 0, today: 0 }
  }
}
