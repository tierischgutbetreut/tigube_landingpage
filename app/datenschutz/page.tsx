import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DatenschutzPage() {
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
          <h1 className="text-4xl font-bold text-[#6b8e46] mb-8">DATENSCHUTZERKLÄRUNG</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            {/* Einleitung */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-lg font-semibold text-gray-800">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>

                <h3 className="text-lg font-semibold text-gray-800">Datenerfassung auf dieser Website</h3>
                <p>
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                  <br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung
                  entnehmen.
                </p>

                <p>
                  <strong>Wie erfassen wir Ihre Daten?</strong>
                  <br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
                  um Daten handeln, die Sie in unser E-Mail-Anmeldeformular eingeben.
                </p>
              </div>
            </section>

            {/* Verantwortliche Stelle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Hinweis zur verantwortlichen Stelle</h2>
              <div className="space-y-4 text-gray-600">
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">tierisch gut betreut UG (haftungsbeschränkt)</p>
                  <p>Tamara Pfaff & Gabriel Haaga</p>
                  <p>Iznangerstr. 32</p>
                  <p>78345 Moos</p>
                  <p>Telefon: +49 (0) 7732 - 988 50 91</p>
                  <p>E-Mail: info@tierischgutbetreut.de</p>
                </div>
                <p>
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                  anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen,
                  E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>
            </section>

            {/* Speicherdauer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Speicherdauer</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                  Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                  berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                  werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                  Ihrer personenbezogenen Daten haben.
                </p>
              </div>
            </section>

            {/* Rechtsgrundlagen */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-lg font-semibold text-gray-800">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>

                <h3 className="text-lg font-semibold text-gray-800">Hinweis zur Datenweitergabe in die USA</h3>
                <p>
                  Auf unserer Website sind unter anderem Tools von Unternehmen mit Sitz in den USA oder anderen
                  datenschutzrechtlich nicht sicheren Drittländern eingebunden. Wenn diese Tools aktiv sind, können Ihre
                  personenbezogenen Daten in diese Drittländer übertragen und dort verarbeitet werden.
                </p>
              </div>
            </section>

            {/* Datenerfassung */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Datenerfassung auf dieser Website</h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-lg font-semibold text-gray-800">Server-Log-Dateien</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
                  dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="text-lg font-semibold text-gray-800">E-Mail-Newsletter Anmeldung</h3>
                <p>
                  Wenn Sie sich für unseren Newsletter anmelden möchten, benötigen wir von Ihnen eine E-Mail-Adresse
                  sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen
                  E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
                </p>
                <p>
                  <strong>Zweck der Datenverarbeitung:</strong> Versendung von Informationen über den Start der
                  tigube-Plattform
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                </p>
                <p>
                  <strong>Speicherdauer:</strong> Bis zum Widerruf Ihrer Einwilligung oder bis zum Start der Plattform
                </p>
                <p>
                  Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie uns eine E-Mail an
                  info@tierischgutbetreut.de senden.
                </p>
              </div>
            </section>

            {/* Externe Dienste */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Externe Dienste</h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-lg font-semibold text-gray-800">Supabase</h3>
                <p>
                  Wir nutzen Supabase für die Speicherung und Verwaltung der E-Mail-Anmeldungen. Supabase ist ein Dienst
                  der Supabase Inc., USA.
                </p>
                <p>
                  <strong>Verarbeitete Daten:</strong> E-Mail-Adresse, Anmeldezeitpunkt, Benutzertyp
                  (Tierbesitzer/Tierbetreuer)
                </p>
                <p>
                  <strong>Zweck:</strong> Speicherung der Newsletter-Anmeldungen
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                </p>
                <p>
                  Weitere Informationen finden Sie in der Datenschutzerklärung von Supabase:
                  <a
                    href="https://supabase.com/privacy"
                    className="text-[#6b8e46] hover:text-[#5a7a3a] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://supabase.com/privacy
                  </a>
                </p>

                <h3 className="text-lg font-semibold text-gray-800">Vercel (Hosting)</h3>
                <p>
                  Diese Website wird auf Servern von Vercel Inc., USA gehostet. Vercel erfasst automatisch bestimmte
                  Informationen, wenn Sie unsere Website besuchen.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                  technischen Bereitstellung der Website)
                </p>
                <p>
                  Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    className="text-[#6b8e46] hover:text-[#5a7a3a] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>
            </section>

            {/* Ihre Rechte */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Ihre Rechte</h2>
              <div className="space-y-4 text-gray-600">
                <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)
                  </li>
                  <li>
                    <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)
                  </li>
                  <li>
                    <strong>Recht auf Löschung</strong> (Art. 17 DSGVO)
                  </li>
                  <li>
                    <strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
                  </li>
                  <li>
                    <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)
                  </li>
                  <li>
                    <strong>Recht auf Widerspruch</strong> (Art. 21 DSGVO)
                  </li>
                  <li>
                    <strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)
                  </li>
                </ul>
                <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@tierischgutbetreut.de</p>
                <p>
                  Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                  personenbezogenen Daten durch uns zu beschweren.
                </p>
              </div>
            </section>

            {/* SSL-Verschlüsselung */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. SSL- bzw. TLS-Verschlüsselung</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                  des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
                  nicht von Dritten mitgelesen werden.
                </p>
              </div>
            </section>

            {/* Änderungen */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
                  Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
                  Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Stand:</strong> Januar 2025
                </p>
              </div>
            </section>
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
