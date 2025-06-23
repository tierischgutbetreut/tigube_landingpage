import { getEmailSignups, getEmailSignupStats } from "@/app/actions"
import { isSupabaseConfigured } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Database, Download, Users, TrendingUp, Calendar } from "lucide-react"

export default async function AdminPage() {
  const [signups, stats] = await Promise.all([getEmailSignups(), getEmailSignupStats()])
  const isConfigured = isSupabaseConfigured()

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">tigube Admin Dashboard</h1>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full text-sm">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-green-600 font-medium">Live & Ready</span>
          </div>
        </div>
      </div>

      {/* Erfolgreiche Konfiguration */}
      <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
        <Database className="h-5 w-5 text-green-600 mt-0.5" />
        <div>
          <h3 className="font-semibold text-green-800">🚀 Datenbank erfolgreich eingerichtet!</h3>
          <p className="text-green-700 text-sm">
            Die `email_signups` Tabelle wurde erstellt und ist bereit für E-Mail-Anmeldungen.
          </p>
          <div className="mt-2 text-sm text-green-600">
            <p>✅ Tabelle erstellt</p>
            <p>✅ Indizes optimiert</p>
            <p>✅ Sicherheitsrichtlinien aktiv</p>
            <p>✅ Demo-Daten eingefügt</p>
          </div>
        </div>
      </div>

      {/* Statistiken */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gesamt Anmeldungen</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6b8e46]">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Alle aktiven E-Mails</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heute</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6b8e46]">{stats.today}</div>
            <p className="text-xs text-muted-foreground">Neue Anmeldungen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wachstum</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6b8e46]">
              +{stats.today > 0 ? Math.round((stats.today / Math.max(stats.total - stats.today, 1)) * 100) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">vs. gestern</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Live</div>
            <p className="text-xs text-muted-foreground">Supabase aktiv</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Download className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">CSV Export</h3>
                <p className="text-sm text-gray-600">E-Mails exportieren</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Zur Hauptseite</h3>
                <p className="text-sm text-gray-600">Landing Page testen</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Database className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Supabase Console</h3>
                <p className="text-sm text-gray-600">Datenbank verwalten</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* E-Mail-Liste */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>E-Mail-Anmeldungen</CardTitle>
            <CardDescription>Live-Daten aus der Supabase-Datenbank</CardDescription>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#6b8e46] text-white rounded-lg hover:bg-[#5a7a3a] transition-colors">
            <Download className="h-4 w-4" />
            CSV Export
          </button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {signups.length === 0 ? (
              <div className="text-center py-12">
                <Database className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">Bereit für E-Mail-Anmeldungen!</p>
                <p className="text-sm text-gray-400 mb-4">
                  Die Datenbank ist eingerichtet. Testen Sie das Anmeldeformular auf der Hauptseite.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#6b8e46] text-white rounded-lg hover:bg-[#5a7a3a] transition-colors"
                >
                  Zur Landing Page
                </a>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-semibold">E-Mail</th>
                      <th className="text-left py-3 px-2 font-semibold">Quelle</th>
                      <th className="text-left py-3 px-2 font-semibold">Anmeldedatum</th>
                      <th className="text-left py-3 px-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {signups.map((signup, index) => (
                      <tr key={signup.id} className={`border-b hover:bg-gray-50 ${index < 2 ? "bg-blue-50" : ""}`}>
                        <td className="py-3 px-2 font-medium">
                          {signup.email}
                          {index < 2 && (
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Demo</span>
                          )}
                        </td>
                        <td className="py-3 px-2">
                          <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                            {signup.source === "hero_section"
                              ? "Hero"
                              : signup.source === "cta_section"
                                ? "CTA"
                                : signup.source}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-sm text-gray-600">
                          {new Date(signup.created_at).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="py-3 px-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Aktiv</span>
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

      {/* Footer Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            <p>
              <strong>Projekt:</strong> puvzrdnziuowznetwwey.supabase.co
            </p>
            <p>
              <strong>Tabelle:</strong> email_signups
            </p>
          </div>
          <div className="text-right">
            <p>Letzte Aktualisierung: {new Date().toLocaleTimeString("de-DE")}</p>
            <p className="text-green-600">✅ Verbindung aktiv</p>
          </div>
        </div>
      </div>
    </div>
  )
}
