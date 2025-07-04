import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6b8e46] hover:text-[#5a7a3a] transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tigube_logo-J3hyYHZi3jUA1UTFYUClXzts56ILfD.png"
              alt="tigube Logo"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-[#6b8e46] mb-12">IMPRESSUM</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Company Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">tierisch gut betreut UG</h2>
                <p className="text-gray-600 text-sm mb-4">(haftungsbeschränkt)</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Geschäftsführung</h3>
                <p className="text-gray-600">Tamara Pfaff & Gabriel Haaga</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Anschrift</h3>
                <p className="text-gray-600">
                  Iznangerstr. 32
                  <br />
                  78345 Moos
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Kontakt</h3>
                <div className="text-gray-600 space-y-1">
                  <p>+49 (0) 7732 - 988 50 91</p>
                  <p>+49 (0) 176 - 724 045 61 (T. Pfaff)</p>
                  <p>+49 (0) 175 - 468 59 77 (G. Haaga)</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">E-Mail</h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@tierischgutbetreut.de"
                    className="text-[#6b8e46] hover:text-[#5a7a3a] transition-colors"
                  >
                    info@tierischgutbetreut.de
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Umsatzsteuer-ID</h3>
                <p className="text-gray-600">DE355611953</p>
              </div>
            </div>

            {/* Right Column - Regulatory Authorities */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">AUFSICHTSBEHÖRDEN</h2>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Veterinäramt Konstanz</h3>
                <p className="text-gray-600">
                  Otto-Blesch-Str. 51
                  <br />
                  78315 Radolfzell am Bodensee
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Städtisches Finanzamt</h3>
                <p className="text-gray-600">
                  Alpenstraße 9<br />
                  78224 Singen a.Htwl.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Legal Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4">Haftungsausschluss</h3>
            <div className="text-gray-600 text-sm space-y-4">
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#6b8e46] text-white px-6 py-3 rounded-lg hover:bg-[#5a7a3a] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
