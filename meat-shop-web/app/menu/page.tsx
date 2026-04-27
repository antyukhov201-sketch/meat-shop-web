import { Metadata } from "next";
import Image from "next/image";
import AddToCartButton from "../components/AddToCartButton";
import { FadeIn, ScaleIn } from "../components/Animations";

export const metadata: Metadata = {
  title: "Sortiment | Brennecke Wurstwaren GmbH",
  description: "Unser Sortiment an handwerklich hergestellten geräucherten und frischen Fleischspezialitäten nach Thüringer Art.",
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string | null;
  details: string[];
  weight?: string;
}

const menuItems: MenuItem[] = [
  { name: "Thüringer Bratwurst 6,80 € / 440g", description: "Originale Thüringer Bratwurst nach traditionellem Rezept", price: "6,80 €", image: "/thueringer-bratwurst.jpg", details: ["Geräuchert auf Buchenholz", "100% Thüringer Rezept", "Handwerklich"], weight: "440g" },
  { name: "Thüringer Bärlauch Bratwurst 6,80 € / 440g", description: "Mit frischem Bärlauch verfeinert", price: "6,80 €", image: "/baerlauch-bratwurst.jpg", details: ["Mit frischem Bärlauch", "Saisonale Spezialität", "Handwerklich"], weight: "440g" },
  { name: "Thüringer Käse Bratwurst 6,80 € / 440g", description: "Mit cremigem Käse versehen", price: "6,80 €", image: "/kaese-bratwurst.jpg", details: ["Mit Bergkäse", "100% Natur", "Handwerklich"], weight: "440g" },
  { name: "Käse Knacker 8,50 € / 360g", description: "Knuspriger Käse-Knacker, 4er Packung", price: "8,50 €", image: "/kaese-knacker.jpg", details: ["Geräuchert auf Buchenholz", "Mit Emmentaler", "Knusprig"], weight: "360g" },
  { name: "Hausmacher Rotwurst 4,90 € / 230g", description: "Traditionelle Hausmacher Rotwurst im Glas", price: "4,90 €", image: "/rotwurst.jpg", details: ["Glasiert", "Hausrezept", "Naturbelassen"], weight: "230g" },
  { name: "Hausmacher Leberwurst 4,90 € / 230g", description: "Hausgemachte Leberwurst im Glas", price: "4,90 €", image: "/leberwurst.jpg", details: ["Hausrezept", "Ohne Zusatzstoffe", "Naturbelassen"], weight: "230g" },
  { name: "Hausmacher Sülze 4,90 € / 230g", description: "Hausgemachte Sülze im Glas", price: "4,90 €", image: "/sulze.jpg", details: ["Hausrezept", "Sülze vom Ring", "Naturbelassen"], weight: "230g" },
  { name: "NDH Knackwurst mit Knoblauch 7,20 € / ca. 470g", description: "Norddeutsche Hackwurst mit Knoblauch", price: "7,20 €", image: "/knackwurst.jpg", details: ["Geräuchert auf Eichenholz", "Norddeutsche Art", "Pikant"], weight: "ca. 470g" },
  { name: "Jagdwurst 5,20 € / ca. 350g", description: "Würzige Jagdwurst", price: "5,20 €", image: "/jagdwurst.jpg", details: ["Würzig geräuchert", "Jagdgewürz", "Traditionell"], weight: "ca. 350g" },
  { name: "Räucherlinge Filet 7,50 € / ca. 300g", description: "Zartes Räucherfilet aus Buchenholz", price: "7,50 €", image: "/raeucherlinge-filet.jpg", details: ["Geräuchert auf Buchenholz", "Premium Qualität", "100% Bio"], weight: "ca. 300g" },
  { name: "Lachsschinken 6,00 € / ca. 200g", description: "Mild geräuchert, zart und saftig", price: "6,00 €", image: "/lachsschinken.jpg", details: ["Kaltgeräuchert", "Mild gewürzt", "Zart"], weight: "ca. 200g" },
  { name: "Schinkenspeck 6,50 € / ca. 300g", description: "Geräucherter Schweinespeck", price: "6,50 €", image: "/schinkenspeck.jpg", details: ["Geräuchert auf Buchenholz", "Premium Speck", "Naturbelassen"], weight: "ca. 300g" },
  { name: "Schinkenwurst geräuchert 5,80 € / ca. 300g", description: "Würzige geräucherte Schinkenwurst", price: "5,80 €", image: "/schinkenwurst-geraeuchert.jpg", details: ["Geräuchert auf Buchenholz", "Vom Schinken", "Würzig"], weight: "ca. 300g" },
  { name: "Bauern-Sülze 5,20 € / ca. 350g", description: "Traditionelle Bauern-Sülze", price: "5,20 €", image: "/bauern-suelze.jpg", details: ["Bauernrezept", "Sülze vom Ring", "Traditionell"], weight: "ca. 350g" },
  { name: "Schinken-Topfsülze 2,50 € / ca. 100g", description: "Feine Schinken-Topfsülze", price: "2,50 €", image: "/schinken-topfsuelze.jpg", details: ["Topfgekocht", "Vom Schinken", "Fein gewürzt"], weight: "ca. 100g" },
  { name: "Hausmacher Stracke 5,50 € / ca. 260g", description: "Nach Eichsfelder Art", price: "5,50 €", image: "/stracke.jpg", details: ["Eichsfelder Art", "Spezialität", "Handwerklich"], weight: "ca. 260g" },
  { name: "Kümmelsülze 6,50 € / ca. 500g", description: "Klassische Kümmelsülze", price: "6,50 €", image: "/sulze.jpg", details: ["Mit Kümmel", "Traditionell", "Hausgemacht"], weight: "ca. 500g" },
  { name: "Soljanka im Schlauch 5,90 € / ca. 500g", description: "Fertige Soljanka zum Aufwärmen", price: "5,90 €", image: "/Soljanka_im_Schlauch_ml.jpg", details: ["Fertiggericht", "Würzig", "Zum Aufwärmen"], weight: "ca. 500g" },
];

export default function MenuPage() {
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
      
      <section className="py-24 px-6" style={{ background: "transparent" }}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
              Unser <span style={{ color: "#c9a227" }}>Sortiment</span>
            </h1>
            <p className="text-cream-muted text-lg font-light leading-relaxed">
              Frische & geräucherte Spezialitäten nach Thüringer Art
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "transparent" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <ScaleIn key={item.name} delay={index * 0.05}>
                <div className="group transition-all duration-500 glass-card-deep hover:border-gold/50 hover:-translate-y-1" style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                  {item.image && (
                    <div className="relative h-52 w-full overflow-hidden" style={{ borderRadius: "4px 4px 0 0" }}>
                      <Image 
                        src={item.image} 
                        alt={item.name.replace(/ \d+,\d+ € \/ .+$/, '')}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-125 group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 30px rgba(201, 162, 39, 0.15)" }} />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-3">
                      {(() => {
                        const match = item.name.match(/^(.+?) (\d+,\d+ €) \/ (.+)$/);
                        if (match) {
                          return (
                            <h3 className="text-lg font-sans font-semibold text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                              {match[1]} <span className="font-semibold" style={{ color: "#c9a227" }}>{match[2]}</span> <span className="text-gray-500 font-normal text-sm ml-1">/ {match[3]}</span>
                            </h3>
                          );
                        }
                        return (
                          <h3 className="text-lg font-sans font-semibold text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                            {item.name}
                          </h3>
                        );
                      })()}
                    </div>
                    <p className="text-cream-muted text-sm font-light leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.details.map((detail) => (
                        <span key={detail} className="px-3 py-1.5 text-xs font-light" style={{ background: "rgba(201, 162, 39, 0.12)", color: "#c9a227", borderRadius: "2px" }}>
                          {detail}
                        </span>
                      ))}
                    </div>
                    <AddToCartButton name={item.name} description={item.description} price={item.price} weight={item.weight} />
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "transparent" }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="p-10 glass-card-deep" style={{ borderRadius: "4px", borderLeft: "3px solid #c9a227" }}>
              <p className="text-cream-muted font-serif italic text-lg leading-relaxed mb-4">
                „Wir verkaufen schnell aus – kommen Sie früh für die beste Auswahl!.”
              </p>
              <p className="text-cream-muted/60 text-sm">— Brennecke, Meisterräuber</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}