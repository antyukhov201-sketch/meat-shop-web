import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Über Uns | Brennecke Wurstwaren GmbH",
  description: "Traditionelle Raucherei seit 1992. Erfahren Sie mehr über unser Handwerk und unsere Räuchertradition.",
};

export default function AboutPage() {
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
      
      <section className="py-20 px-6" style={{ background: "transparent" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Unsere <span style={{ color: "#c9a227" }}>Tradition</span>
          </h1>
          <p className="text-cream-muted font-light">Mehr als 30 Jahre Räucherkunst</p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "transparent" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Image 
                src="/about.jpg" 
                alt="Unsere Werkstatt" 
                width={600} 
                height={500} 
                className="w-full h-auto"
                style={{ borderRadius: "4px" }}
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">Das <span style={{ color: "#c9a227" }}>Handwerk</span></h3>
                <p className="text-cream-muted font-light leading-relaxed">
                  Seit 1992 widmen wir uns der traditionellen Kunst des Räucherns. 
                  Unser Handwerk basiert auf jahrzehntelanger Erfahrung und der Leidenschaft 
                  für perfekt zubereitete Fleischspezialitäten. Jede Wurst wird von Hand 
                  gewürzt, gedreht und schonend geräuchert.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">Das <span style={{ color: "#c9a227" }}>Holz</span></h3>
                <p className="text-cream-muted font-light leading-relaxed">
                  Wir verwenden ausschließlich Buchenholz aus nachhaltiger Forstwirtschaft. 
                  Das sanfte Räuchern bei niedrigen Temperaturen verleiht unseren Produkten 
                  das charakteristische Aroma und sorgt für die typische rötlich-braune Farbe, 
                  die unsere Wurstwaren so unverwechselbar macht.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">Die <span style={{ color: "#c9a227" }}>Qualität</span></h3>
                <p className="text-cream-muted font-light leading-relaxed">
                  Wir verwenden nur Fleisch von regionalen Lieferanten, die wir persönlich 
                  kennen und denen wir vertrauen. Ohne künstliche Zusatzstoffe, ohne Konservierungsmittel – 
                  nur reines Handwerk und natürliche Zutaten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "transparent" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-serif font-bold" style={{ color: "#c9a227" }}>30+</p>
              <p className="text-cream-muted mt-2">Jahre Erfahrung</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-serif font-bold" style={{ color: "#c9a227" }}>100%</p>
              <p className="text-cream-muted mt-2">Naturprodukt</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-serif font-bold" style={{ color: "#c9a227" }}>Buchenholz</p>
              <p className="text-cream-muted mt-2">Regional</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "transparent" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
            Unser <span style={{ color: "#c9a227" }}>Versprechen</span>
          </h2>
          <div className="p-8" style={{ background: "#1a1a1a", borderRadius: "4px" }}>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✓</span>
                <span className="text-cream-muted">100% natürliche Zutaten</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✓</span>
                <span className="text-cream-muted">Traditionelle Rezepturen</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✓</span>
                <span className="text-cream-muted">Räucherung mit Buchenholz</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✓</span>
                <span className="text-cream-muted">Handwerkliche Herstellung</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-xl">✓</span>
                <span className="text-cream-muted">Regionaler Einkauf</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "transparent" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 text-center" style={{ background: "#242424", borderRadius: "4px", borderLeft: "3px solid #c9a227" }}>
            <p className="text-cream-muted font-serif italic text-lg mb-4">
              „Qualität ist kein Zufall. Sie ist das Ergebnis von Leidenschaft, 
              Tradition und dem Mut, nur das Beste zu verwenden.”
            </p>
            <p className="text-cream-muted/60 text-sm">— Brennecke, Meisterräuber</p>
          </div>
        </div>
      </section>
    </main>
  );
}