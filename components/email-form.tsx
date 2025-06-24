"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitEmail } from "@/app/actions"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useState } from "react"

interface EmailFormProps {
  variant?: "hero" | "cta"
}

export function EmailForm({ variant = "hero" }: EmailFormProps) {
  const [state, formAction, isPending] = useActionState(submitEmail, null)
  const [userType, setUserType] = useState<string>("")

  const isHero = variant === "hero"

  return (
    <div className={isHero ? "max-w-lg mx-auto" : "max-w-lg mx-auto"}>
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="source" value={isHero ? "hero_section" : "cta_section"} />
        <input type="hidden" name="user_type" value={userType} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Ihre E-Mail-Adresse"
              className={isHero ? "bg-white border-gray-200" : "bg-white text-gray-800"}
              disabled={isPending}
              required
            />
          </div>
          <div>
            <Select onValueChange={setUserType} disabled={isPending}>
              <SelectTrigger className={isHero ? "bg-white border-gray-200" : "bg-white text-gray-800"}>
                <SelectValue placeholder="Ich bin..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tierbesitzer">Tierbesitzer</SelectItem>
                <SelectItem value="tierbetreuer">Tierbetreuer</SelectItem>
                <SelectItem value="beide">Beides</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isPending || !userType}
          className={
            isHero
              ? "w-full bg-[#6b8e46] hover:bg-[#5a7a3a] text-white disabled:opacity-50"
              : "w-full bg-white text-[#6b8e46] hover:bg-gray-100 disabled:opacity-50"
          }
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            "Benachrichtigung erhalten"
          )}
        </Button>
      </form>

      {/* Status-Nachrichten */}
      {state && (
        <div className={`mt-4 flex items-center gap-2 text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>
          {state.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span>{state.message}</span>
        </div>
      )}

      {!state && isHero && (
        <p className="text-xs text-gray-500 mt-3 text-center">Kein Spam. Sie können sich jederzeit abmelden.</p>
      )}
    </div>
  )
}
