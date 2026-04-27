import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Brennecke Wurstwaren GmbH",
  description: "Datenschutzerklärung der Brennecke Wurstwaren GmbH.",
};

export default function DatenschutzPage() {
  return (
    <main>
      <div 
        className="fixed inset-0 -z-10" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,0.95) 35%, rgba(18,18,18,1) 50%, rgba(0,0,0,0.95) 65%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%), url(/Gemini_Generated_Image_df8y1mdf8y1mdf8y.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "brightness(0.4) grayscale(0.3) blur(8px)"
        }}
      />
      
      <section className="py-20 px-6 min-h-screen" style={{ background: "transparent" }}>
        <div className="max-w-3xl mx-auto">
          <div 
            className="p-10"
            style={{ 
              background: "rgba(0, 0, 0, 0.8)",
              borderRadius: "4px",
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8" style={{ color: "#c9a227" }}>
              Hinweise zum Datenschutz
            </h1>
            
            <div className="text-cream-muted font-light leading-relaxed text-sm space-y-6">
              <p className="mb-6">
                Ihr Vertrauen ist uns wichtig. Deshalb respektieren wir den Datenschutz und informieren Sie über die erhobenen und gespeicherten Daten und Ihre Rechte auf Auskunft, Berichtigung, Sperrung und Löschung.
              </p>

              <section>
                <h2 className="text-white font-semibold mb-3">1. Datenerhebung und -speicherung</h2>
                <p>
                  Wenn eine Webseite besucht wird, sendet der Browser grundsätzlich Informationen über Browsertyp und Browserversion, das verwandte Betriebssystem, die Referrer-URL, die IP-Adresse, den Dateinamen, den Zugriffsstatus, die übertragene Datenmenge, das Datum und die Uhrzeit der Serveranfrage. Diese Daten sind weder einer Person noch anderen Datenquellen zuzuordnen und werden zunächst gespeichert und nach einer statistischen Auswertung gelöscht.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-3">2. Cookies</h2>
                <p>
                  Ihr Browser speichert zudem so genannte Cookies. Dabei handelt es sich um Dateien, die ein Surfen im Internet benutzerfreundlicher gestalten sollen. Das Speichern von Cookies kann in den Einstellungen Ihres Browsers ausgeschaltet werden.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-3">3. Auskunft, Berichtigung, Sperrung und Löschung</h2>
                <p className="mb-3">
                  Personenbezogene Daten werden nur mit Ihrer Einwilligung zur Beantwortung von Anfragen, Abwicklung von Verträgen und der technischen Administration erhoben und für Dritte unzugänglich gespeichert. Eine Weitergabe der Daten an Dritte erfolgt nur zum Zweck der Vertragsabwicklung bzw. bei Ihrer Einwilligung, welche jederzeit widerrufen werden kann. Eine Weitergabe oder ein Verkauf der personenbezogenen Daten findet nicht statt.
                </p>
                <p>
                  Jederzeit kann von Ihnen Auskunft über die gespeicherten Daten, den Zweck der Speicherung und deren Herkunft verlangt werden. Zusätzlich besteht nach Maßgabe der gesetzlichen Bestimmungen ein Recht auf Berichtigung, Sperrung und Löschung der personenbezogenen Daten. Eine entsprechende Anfrage bzw. ein Begehren nach Berichtigung, Sperrung oder Löschung der personenbezogenen Daten ist über die auf der Webseite genannten Kontaktdaten möglich.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}