import { createClient } from "@supabase/supabase-js"

// Environment variables (optional)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey)
}

// Client-side Supabase client (only if configured)
export const supabase = isSupabaseConfigured() ? createClient(supabaseUrl!, supabaseAnonKey!) : null

// Server-side client für Server Actions (only if fully configured)
export const supabaseAdmin =
  isSupabaseConfigured() && supabaseServiceKey
    ? createClient(supabaseUrl!, supabaseServiceKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null

// Typen für die Datenbank
export interface EmailSignup {
  id: string
  email: string
  created_at: string
  updated_at: string
  source: string
  is_verified: boolean
  verification_token?: string
  unsubscribed_at?: string
}

// In-memory storage for demo mode
const demoEmailSignups: EmailSignup[] = [
  {
    id: "demo-1",
    email: "demo@example.com",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    source: "hero_section",
    is_verified: false,
  },
  {
    id: "demo-2",
    email: "test@example.com",
    created_at: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    updated_at: new Date(Date.now() - 86400000).toISOString(),
    source: "cta_section",
    is_verified: false,
  },
]

// Demo functions for when Supabase is not configured
export const demoStorage = {
  addEmail: (email: string, source: string): EmailSignup => {
    const newSignup: EmailSignup = {
      id: `demo-${Date.now()}`,
      email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      source,
      is_verified: false,
    }
    demoEmailSignups.unshift(newSignup)
    return newSignup
  },

  findEmail: (email: string): EmailSignup | undefined => {
    return demoEmailSignups.find((signup) => signup.email === email)
  },

  getAllEmails: (): EmailSignup[] => {
    return [...demoEmailSignups]
  },

  getStats: () => {
    const today = new Date().toISOString().split("T")[0]
    const todaySignups = demoEmailSignups.filter((signup) => signup.created_at.startsWith(today))
    return {
      total: demoEmailSignups.length,
      today: todaySignups.length,
    }
  },
}
