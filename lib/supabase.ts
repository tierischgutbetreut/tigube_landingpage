import { createClient } from "@supabase/supabase-js"

// Environment variables (now configured)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://puvzrdnziuowznetwwey.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dnpyZG56aXVvd3puZXR3d2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4MzU5ODIsImV4cCI6MjA2NDQxMTk4Mn0.VGkpwOJhZnhzQVJhqGqJXOLqE7zKqGzqQVJhqGqJXOL"
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dnpyZG56aXVvd3puZXR3d2V5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODgzNTk4MiwiZXhwIjoyMDY0NDExOTgyfQ.2xR99bvBLlOi8P1aCP5WxtO_r3njhLHfYPPWTw3YpF0"

// Check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey)
}

// Client-side Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client für Server Actions
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

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

// Database-specific types
export interface Database {
  public: {
    Tables: {
      email_signups: {
        Row: EmailSignup
        Insert: Omit<EmailSignup, "id" | "created_at" | "updated_at">
        Update: Partial<Omit<EmailSignup, "id" | "created_at">>
      }
    }
  }
}

// In-memory storage for demo mode (fallback)
const demoEmailSignups: EmailSignup[] = []

// Demo functions for when Supabase is not working
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
