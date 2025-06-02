import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#eaede3] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tigube_logo-J3hyYHZi3jUA1UTFYUClXzts56ILfD.png"
              alt="tigube Logo"
              className="h-12 w-auto mx-auto"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">startet bald!</h1>

          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Die vertrauensvolle Plattform für professionelle Tierbetreuung in Deutschland.
            <br />
            Seien Sie unter den Ersten, die davon erfahren!
          </p>

          <div className="max-w-md mx-auto">
            <div className="mb-2">
              <Input type="email" placeholder="Ihre E-Mail-Adresse" className="bg-white border-gray-200" />
            </div>
            <Button className="w-full bg-[#6b8e46] hover:bg-[#5a7a3a] text-white">Benachrichtigung erhalten</Button>
            <p className="text-xs text-gray-500 mt-2">Kein Spam. Sie können sich jederzeit abmelden.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Was Sie erwartet</h2>
          <p className="text-center text-gray-600 mb-12">
            tigube verbindet liebevolle Tierbesitzer mit vertrauenswürdigen Betreuern
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#eaede3] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              <h3 className="font-bold mb-2">Verifizierte Betreuer</h3>
              <p className="text-gray-600 text-sm">Alle Betreuer werden sorgfältig geprüft und verifiziert</p>
            </div>

            <div className="text-center">
              <div className="bg-[#eaede3] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 12.5722C19.5 16.0889 16.0899 19.5 12.5 19.5C8.91015 19.5 5.5 16.0899 5.5 12.5C5.5 8.91015 8.91015 5.5 12.5 5.5C16.0899 5.5 19.5 8.91015 19.5 12.5722Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 5.5V3M19.5 12.5H22M12.5 19.5V22M5.5 12.5H3M17.5 7.5L19 6M17.5 17.5L19 19M7.5 17.5L6 19M7.5 7.5L6 6"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Liebevolle Pflege</h3>
              <p className="text-gray-600 text-sm">Ihr Haustier erhält die Aufmerksamkeit und Liebe, die es verdient</p>
            </div>

            <div className="text-center">
              <div className="bg-[#eaede3] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              <h3 className="font-bold mb-2">Lokale Gemeinschaft</h3>
              <p className="text-gray-600 text-sm">Finden Sie Betreuer in Ihrer direkten Nachbarschaft</p>
            </div>

            <div className="text-center">
              <div className="bg-[#eaede3] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              <p className="text-gray-600 text-sm">Betreuung genau dann, wenn Sie sie brauchen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Unsere Services</h2>
          <p className="text-center text-gray-600 mb-12">Umfassende Betreuung für alle Bedürfnisse</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Hundebetreuung</h3>
              <p className="text-gray-600">Ganztägige liebevolle Betreuung für Ihren Hund</p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Katzenbetreuung</h3>
              <p className="text-gray-600">Spezialisierte Pflege für Ihre Katze</p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Gassi-Service</h3>
              <p className="text-gray-600">Regelmäßige Spaziergänge für Ihren Vierbeiner</p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Hausbesuche</h3>
              <p className="text-gray-600">Betreuung im gewohnten Umfeld Ihres Tieres</p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Haussitting</h3>
              <p className="text-gray-600">Rundum-Betreuung in Ihrem Zuhause</p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Tagesbetreuung</h3>
              <p className="text-gray-600">Flexible Tagesbetreuung nach Ihren Bedürfnissen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#6b8e46] py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für den Start?</h2>
          <p className="mb-8">
            Werden Sie Teil der tigube-Community und erleben Sie, wie einfach Tierbetreuung sein kann.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="E-Mail-Adresse" className="bg-white text-gray-800 flex-grow" />
            <Button className="bg-white text-[#6b8e46] hover:bg-gray-100">Anmelden</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
