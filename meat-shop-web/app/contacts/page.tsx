import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Brennecke Wurstwaren GmbH",
  description: "Kontaktieren Sie uns für Fragen zu unseren geräucherten Spezialitäten.",
};

const hours = [
  { days: "Montag - Freitag", time: "08:00 - 18:00 Uhr" },
  { days: "Samstag", time: "08:00 - 12:00 Uhr" },
  { days: "Sonntag", time: "Geschlossen", note: true },
];

const faqs = [
  { 
    question: "Wie lange sind Ihre Produkte haltbar?", 
    answer: "Unsere frischen Wurstwaren sind ungekühlt ca. 3-5 Tage haltbar. Gekühlt (unter 4°C) ca. 2 Wochen. Geräucherte Produkte halten je nach Sorte 2-4 Wochen."
  },
  { 
    question: "Liefern Sie auch nach Hause?", 
    answer: "Ja, wir liefern innerhalb eines Umkreises von 50km aus. Die Lieferung erfolgt werktags innerhalb von 24-48 Stunden nach Bestellung."
  },
  { 
    question: "Wie sollten die Produkte gelagert werden?", 
    answer: "Unsere Wurstwaren sollten kühl (unter 4°C) und trocken gelagert werden. Geräucherte Produkte können auch bei Raumtemperatur aufbewahrt werden, solange sie luftig liegen."
  },
  { 
    question: "Kann ich auch vor Ort einkaufen?", 
    answer: "Ja, wir freuen uns auf Ihren Besuch in unserem Geschäft. Hier können Sie alle Produkte frisch probieren und gleich mitnehmen."
  },
];

export default function ContactsPage() {
  return (
    <main>
      <section className="py-20 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            <span style={{ color: '#c9a227' }}>Kontakt</span>
          </h1>
          <p className="text-cream-muted font-light">
            Wir freuen uns auf Ihren Besuch
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#121212' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="p-8" style={{ background: '#1a1a1a', borderRadius: '4px', borderLeft: '3px solid #c9a227' }}>
                <h2 className="text-xl font-serif text-white mb-6">Anfahrt</h2>
                <address className="not-italic font-light text-cream-muted space-y-3">
                  <p className="text-lg font-semibold text-white">Brennecke Wurstwaren GmbH</p>
                  <p className="text-cream-muted">Nordhäuser Str 17 A</p>
                  <p className="text-cream-muted">99768 Harztor</p>
                </address>
                <div className="mt-8">
                  <h3 className="text-lg font-serif mb-4" style={{ color: '#c9a227' }}>Öffnungszeiten</h3>
                  <div className="space-y-2 text-cream-muted mt-4">
                    {hours.map((h) => (
                      <p key={h.days} className={h.note ? "text-white font-semibold" : ""}>
                        <span className="text-white">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-8" style={{ background: '#1a1a1a', borderRadius: '4px', borderLeft: '3px solid #c9a227' }}>
                <h2 className="text-xl font-serif text-white mb-6">Kontakt</h2>
                <div className="space-y-6 font-light">
                  <div>
                    <p className="text-cream-muted text-sm mb-1">Telefon</p>
                    <p className="text-lg text-white">+49 36331 42448</p>
                  </div>
                  <div>
                    <p className="text-cream-muted text-sm mb-1">E-Mail</p>
                    <p className="text-lg text-white">info@brenneckewurst.de</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-5xl mx-auto">
          <div className="p-8" style={{ background: '#242424', borderRadius: '4px' }}>
            <h2 className="text-2xl font-serif text-white mb-2 text-center">
              <span style={{ color: '#c9a227' }}>FAQ</span> - Häufige Fragen
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: '#c9a227' }} />
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6" style={{ background: '#1a1a1a', borderRadius: '4px' }}>
                  <h3 className="text-lg font-serif text-white mb-3">{faq.question}</h3>
                  <p className="text-cream-muted font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-0" style={{ background: '#0d0d0d' }}>
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[500px]" style={{ background: '#1a1a1a' }}>
            <div className="absolute inset-0 opacity-30" style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h50v50H0zM50 50h50v50H50z\' fill=\'%23222\' fill-opacity=\'0.4\'/%3E%3C/svg%3E")',
              backgroundSize: '50px 50px'
            }} />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #242424 50%, #1a1a1a 100%)'
            }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: '#c9a227' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">Brennecke Wurstwaren GmbH</h3>
                <p className="text-cream-muted mb-2">Nordhäuser Str 17 A</p>
                <p className="text-cream-muted mb-4">99768 Harztor, Deutschland</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold px-6 py-2 transition-all"
                  style={{ background: '#c9a227', color: '#121212' }}
                >
                  Route planen →
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24" style={{ 
              background: 'linear-gradient(to top, #121212, transparent)',
              maskImage: 'linear-gradient(to top, black, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
            }} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-2xl mx-auto">
          <div className="p-8 text-center" style={{ background: '#242424', borderRadius: '4px', borderLeft: '3px solid #c9a227' }}>
            <p className="text-cream-muted font-serif italic text-lg mb-4">
              „Wir verkaufen schnell aus – kommen Sie früh für die beste Auswahl!.”
            </p>
            <p className="text-cream-muted/60 text-sm">— Brennecke, Meisterräuber</p>
          </div>
        </div>
      </section>
    </main>
  );
}