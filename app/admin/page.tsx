import { getEmailSignups, getEmailSignupStats } from "@/app/actions"
import { isSupabaseConfigured } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Database, HardDrive } from "lucide-react"

export default async function AdminPage() {
  const [signups, stats] = await Promise.all([getEmailSignups(), getEmailSignupStats()])
  const isConfigured = isSupabaseConfigured()

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">tigube Admin Dashboard</h1>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full text-sm">
          {isConfigured ? (
            <>
              <Database className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-medium">Supabase</span>
            </>
          ) : (
            <>
              <HardDrive className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 font-medium">Demo-Modus</span>
            </>
          )}
        </div>
      </div>

      {/* Konfigurationswarnung */}
      {!isConfigured && (
        <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-orange-800">Demo-Modus aktiv</h3>
            <p className="text-orange-700 text-sm mb-2">
              Die App läuft im Demo-Modus. E-Mail-Anmeldungen werden temporär im Speicher gespeichert.
            </p>
            <p className="text-orange-700 text-sm">
              <strong>Für Produktionsumgebung:</strong> Fügen Sie die Supabase-Umgebungsvariablen hinzu:
            </p>
            <code className="block mt-2 p-2 bg-orange-100 rounded text-xs">
              NEXT_PUBLIC_SUPABASE_URL=your_url
              <br />
              NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
              <br />
              SUPABASE_SERVICE_ROLE_KEY=your_service_key
            </code>
          </div>
        </div>
      )}

      {/* Statistiken */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Gesamt Anmeldungen</CardTitle>
            <CardDescription>
              Alle aktiven E-Mail-Anmeldungen
              {!isConfigured && " (temporär gespeichert)"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#6b8e46]">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Heute</CardTitle>
            <CardDescription>
              Neue Anmeldungen heute
              {!isConfigured && " (temporär gespeichert)"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#6b8e46]">{stats.today}</div>
          </CardContent>
        </Card>
      </div>

      {/* E-Mail-Liste */}
      <Card>
        <CardHeader>
          <CardTitle>E-Mail-Anmeldungen</CardTitle>
          <CardDescription>
            Alle registrierten E-Mail-Adressen
            {!isConfigured && " (Demo-Daten + neue Anmeldungen)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {signups.length === 0 ? (
              <p className="text-gray-500">Noch keine Anmeldungen vorhanden.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">E-Mail</th>
                      <th className="text-left py-2">Quelle</th>
                      <th className="text-left py-2">Anmeldedatum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {signups.map((signup) => (
                      <tr key={signup.id} className="border-b">
                        <td className="py-2">{signup.email}</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                            {signup.source === "hero_section"
                              ? "Hero"
                              : signup.source === "cta_section"
                                ? "CTA"
                                : signup.source}
                          </span>
                        </td>
                        <td className="py-2">
                          {new Date(signup.created_at).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
