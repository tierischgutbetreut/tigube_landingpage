import { EmailForm } from "@/components/email-form"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#eaede3] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mx-auto mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tigube_logo-J3hyYHZi3jUA1UTFYUClXzts56ILfD.png"
              alt="tigube Logo"
              className="h-12 w-auto mx-auto"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">startet bald!</h1>

          <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg">
            Die vertrauensvolle Plattform, die <strong>Tierbesitzer</strong> und <strong>Tierbetreuer</strong>{" "}
            zusammenbringt.
            <br />
            Seien Sie unter den Ersten, die davon erfahren!
          </p>

          <EmailForm variant="hero" />
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Für wen ist tigube?</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tierbesitzer */}
            <div className="text-center">
              <div className="bg-[#eaede3] rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14S9.5 16 12 16S16 14 16 14M9 9H9.01M15 9H15.01"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#6b8e46]">Für Tierbesitzer</h3>
              <p className="text-gray-600 mb-6">
                Sie suchen eine vertrauensvolle Betreuung für Ihren Liebling? Finden Sie geprüfte Tierbetreuer in Ihrer
                Nähe.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Verifizierte und erfahrene Betreuer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Flexible Betreuungszeiten
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Transparente Bewertungen
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Einfache Kontaktaufnahme
                </li>
              </ul>
            </div>

            {/* Tierbetreuer */}
            <div className="text-center">
              <div className="bg-[#eaede3] rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M12.5 7C12.5 9.20914 10.7091 11 8.5 11C6.29086 11 4.5 9.20914 4.5 7C4.5 4.79086 6.29086 3 8.5 3C10.7091 3 12.5 4.79086 12.5 7ZM20 8V14M23 11H17"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#6b8e46]">Für Tierbetreuer</h3>
              <p className="text-gray-600 mb-6">
                Sie lieben Tiere und möchten Ihr Hobby zum Beruf machen? Werden Sie Teil unserer Betreuer-Community.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Flexibles Einkommen durch Tierbetreuung
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Selbstbestimmte Arbeitszeiten
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Direkter Kundenkontakt
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Lokale Aufträge finden
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Was Sie erwartet</h2>
          <p className="text-center text-gray-600 mb-12">
            tigube verbindet liebevolle Tierbesitzer mit vertrauenswürdigen Betreuern
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Verifizierte Profile</h3>
              <p className="text-gray-600 text-sm">Alle Betreuer werden sorgfältig geprüft und verifiziert</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Liebevolle Betreuung</h3>
              <p className="text-gray-600 text-sm">Ihr Haustier erhält die Aufmerksamkeit und Liebe, die es verdient</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Lokale Community</h3>
              <p className="text-gray-600 text-sm">Finden Sie Betreuer und Tierbesitzer in Ihrer Nachbarschaft</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Flexible Zeiten</h3>
              <p className="text-gray-600 text-sm">Betreuung und Aufträge genau dann, wenn Sie sie brauchen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Unsere Services</h2>
          <p className="text-center text-gray-600 mb-12">Umfassende Lösungen für Tierbesitzer und Betreuer</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services für Tierbesitzer */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#6b8e46] text-center">Für Tierbesitzer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Hundebetreuung</h4>
                  <p className="text-gray-600 text-sm">Ganztägige liebevolle Betreuung für Ihren Hund</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Katzenbetreuung</h4>
                  <p className="text-gray-600 text-sm">Spezialisierte Pflege für Ihre Katze</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Gassi-Service</h4>
                  <p className="text-gray-600 text-sm">Regelmäßige Spaziergänge für Ihren Vierbeiner</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Hausbesuche</h4>
                  <p className="text-gray-600 text-sm">Betreuung im gewohnten Umfeld Ihres Tieres</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Haussitting</h4>
                  <p className="text-gray-600 text-sm">Rundum-Betreuung in Ihrem Zuhause</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Notfallbetreuung</h4>
                  <p className="text-gray-600 text-sm">Kurzfristige Betreuung in Notfällen</p>
                </div>
              </div>
            </div>

            {/* Services für Tierbetreuer */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#6b8e46] text-center">Für Tierbetreuer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Profil erstellen</h4>
                  <p className="text-gray-600 text-sm">Kostenloses Profil mit Ihren Services und Preisen</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Aufträge finden</h4>
                  <p className="text-gray-600 text-sm">Passende Betreuungsaufträge in Ihrer Nähe</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Bewertungssystem</h4>
                  <p className="text-gray-600 text-sm">Sammeln Sie positive Bewertungen und bauen Sie Vertrauen auf</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Kalender-Integration</h4>
                  <p className="text-gray-600 text-sm">Verwalten Sie Ihre Verfügbarkeit und Termine</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Messaging-System</h4>
                  <p className="text-gray-600 text-sm">Direkte Kommunikation mit Tierbesitzern</p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2">Community</h4>
                  <p className="text-gray-600 text-sm">Austausch mit anderen Tierbetreuern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">So funktioniert's</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Für Tierbesitzer */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[#6b8e46] text-center">Als Tierbesitzer</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#6b8e46] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Registrieren & Profil erstellen</h4>
                    <p className="text-gray-600 text-sm">
                      Erstellen Sie Ihr Profil und erzählen Sie uns von Ihrem Tier
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#6b8e46] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Betreuer finden</h4>
                    <p className="text-gray-600 text-sm">
                      Durchsuchen Sie Profile und finden Sie den perfekten Betreuer
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#6b8e46] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Buchen & entspannen</h4>
                    <p className="text-gray-600 text-sm">Buchen Sie die Betreuung und lassen Sie Ihr Tier verwöhnen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Für Tierbetreuer */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[#6b8e46] text-center">Als Tierbetreuer</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#6b8e46] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Anmelden & verifizieren</h4>
                    <p className="text-gray-600 text-sm">
                      Registrieren Sie sich und durchlaufen Sie unseren Verifizierungsprozess
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#6b8e46] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Services anbieten</h4>
                    <p className="text-gray-600 text-sm">Erstellen Sie Ihr Profil und definieren Sie Ihre Services</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#6b8e46] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Aufträge annehmen</h4>
                    <p className="text-gray-600 text-sm">Erhalten Sie Buchungsanfragen und verdienen Sie Geld</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#6b8e46] py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für den Start?</h2>
          <p className="mb-8 text-lg">
            Werden Sie Teil der tigube-Community – egal ob als Tierbesitzer oder Tierbetreuer.
            <br />
            Erleben Sie, wie einfach und sicher Tierbetreuung sein kann.
          </p>

          <EmailForm variant="cta" />

          <p className="mt-6 text-sm opacity-90">
            Kostenlose Registrierung • Keine versteckten Gebühren • Jederzeit kündbar
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tigube_logo-J3hyYHZi3jUA1UTFYUClXzts56ILfD.png"
                  alt="tigube Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm">Die vertrauensvolle Plattform für Tierbetreuung in Deutschland.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/impressum" className="text-gray-300 hover:text-white transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-gray-300 hover:text-white transition-colors">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>info@tierischgutbetreut.de</p>
                <p>+49 (0) 7732 - 988 50 91</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 tierisch gut betreut UG. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
