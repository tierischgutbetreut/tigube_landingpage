"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { submitEmail } from "@/app/actions"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface EmailFormProps {
  variant?: "hero" | "cta"
}

export function EmailForm({ variant = "hero" }: EmailFormProps) {
  const [state, formAction, isPending] = useActionState(submitEmail, null)

  const isHero = variant === "hero"

  return (
    <div className={isHero ? "max-w-md mx-auto" : "flex flex-col sm:flex-row gap-4 max-w-md mx-auto"}>
      <form action={formAction} className={isHero ? "space-y-2" : "contents"}>
        <input type="hidden" name="source" value={isHero ? "hero_section" : "cta_section"} />
        <div className={isHero ? "mb-2" : "flex-grow"}>
          <Input
            type="email"
            name="email"
            placeholder={isHero ? "Ihre E-Mail-Adresse" : "E-Mail-Adresse"}
            className={isHero ? "bg-white border-gray-200" : "bg-white text-gray-800"}
            disabled={isPending}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className={
            isHero
              ? "w-full bg-[#6b8e46] hover:bg-[#5a7a3a] text-white disabled:opacity-50"
              : "bg-white text-[#6b8e46] hover:bg-gray-100 disabled:opacity-50"
          }
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : isHero ? (
            "Benachrichtigung erhalten"
          ) : (
            "Anmelden"
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

      {!state && isHero && <p className="text-xs text-gray-500 mt-2">Kein Spam. Sie können sich jederzeit abmelden.</p>}
    </div>
  )
}
