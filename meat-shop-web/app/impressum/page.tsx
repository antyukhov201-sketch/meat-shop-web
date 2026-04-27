import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Brennecke Wurstwaren GmbH",
  description: "Impressum der Brennecke Wurstwaren GmbH.",
};

export default function ImpressumPage() {
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
              Impressum
            </h1>
            
            <div className="text-cream-muted font-light leading-relaxed text-sm space-y-6">
              <p className="mb-6">
                Die Inhalte dieser Website wurden sorgfältig erstellt. Die darin enthaltenen Angaben können jedoch nicht als Zusicherung von Eigenschaften der Produkte, Lösungen, Service, etc. gelten. Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
              
              <div className="border-t border-white/10 pt-6 mt-6">
                <h2 className="text-white font-semibold mb-4" style={{ color: "#c9a227" }}>Kontakt</h2>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-medium mb-1">Brennecke Fleischwaren GmbH</p>
                    <p>Nordhäuser Str. 17</p>
                    <p>99768 Harztor</p>
                    <p>Deutschland</p>
                  </div>
                  
                  <div>
                    <p className="text-white font-medium">Telefon:</p>
                    <p>03633142448</p>
                  </div>
                  
                  <div>
                    <p className="text-white font-medium">Ansprechpartner:</p>
                    <p>Yuriy Semochko</p>
                  </div>
                  
                  <div>
                    <p className="text-white font-medium">E-Mail:</p>
                    <p style={{ color: "#c9a227" }}>brenneckewurst@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-6 mt-6">
                <h2 className="text-white font-semibold mb-4" style={{ color: "#c9a227" }}>Steueridentifikation</h2>
                <p>USt-IdNr.: 157 106/02171</p>
              </div>
              
              <div className="border-t border-white/10 pt-6 mt-6">
                <h2 className="text-white font-semibold mb-4" style={{ color: "#c9a227" }}>Bankverbindung</h2>
                <div className="space-y-2">
                  <p>Name der Bank: <span className="text-white">Kreissparkasse Nordhausen</span></p>
                  <p>IBAN: <span className="text-white">DE92820540520037190535</span></p>
                  <p>BIC: <span className="text-white">HELADEF1NOR</span></p>
                  <p>Kontoinhaber: <span className="text-white">Brennecke Fleischwaren GmbH</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}