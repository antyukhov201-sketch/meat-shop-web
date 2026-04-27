import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Startseite | Brennecke Wurstwaren GmbH",
  description: "Traditionelle Raucherei mit handwerklich hergestellten geräucherten Fleischspezialitäten seit 1992.",
};

const reviews = [
  { name: "Michael SCH.", rating: 5, text: "Die beste Thüringer Bratwurst die ich je probiert habe! Absolut perfekt geräuchert und gewürzt.", date: "Dezember 2025" },
  { name: "Sarah K.", rating: 5, text: "Hervorragende Qualität. Der Räucherling ist ein Genuss. Sehr zu empfehlen!", date: "November 2025" },
  { name: "Thomas W.", rating: 5, text: "Traditionelles Handwerk vom Feinsten. Da schmeckt man die Qualität.", date: "Oktober 2025" },
  { name: "Andrea B.", rating: 5, text: "Die beste Wurst in der Region. Immer frisch und lecker!", date: "September 2025" },
];

export default function Home() {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < rating ? 'text-gold' : 'text-cream-muted/30'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.691l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

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
          filter: "brightness(0.4) grayscale(0.3)"
        }}
      />
      
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        <div className="relative text-center px-6 py-32">
          <p className="text-gold font-serif italic text-lg mb-4 tracking-[0.3em] uppercase text-xs">Gegründet 1992</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-shadow-gold">
            Brennecke<br />
            <span style={{ color: "#c9a227" }}>Wurstwaren</span>
          </h1>
          <p className="text-cream-muted text-xl md:text-2xl max-w-xl mx-auto mb-10 font-light">
            Handwerkliche Rauchkunst. Buchenholz. Zeitgeprüfte Rezepte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="inline-block font-serif font-semibold px-10 py-4 transition-all" style={{ background: "#c9a227", color: "#121212" }}>
              Unser Sortiment
            </Link>
            <Link href="/contacts" className="inline-block font-serif font-semibold px-10 py-4 transition-all border border-white/30 text-white hover:bg-white hover:text-black">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-16 h-0.5 mx-auto mb-12" style={{ background: "#c9a227" }} />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Meister<span style={{ color: "#c9a227" }}>räucherei</span>
          </h2>
          <p className="text-cream-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Seit über 30 Jahren-räuchern wir Fleischwaren nach alter Thüringer Tradition. 
            Buchenholz gibt unseren Spezialitäten das unverwechselbare Raucharoma.
          </p>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: "#121212" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]" style={{ borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/about.jpg" alt="Brennecke Raucherei" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-white mb-6">
                Tradition<span style={{ color: "#c9a227" }}> leben</span>
              </h2>
              <p className="text-cream-muted font-light leading-relaxed mb-6">
                In unserer familiengeführten Räucherei entstehen Thüringer Spezialitäten, 
                die generationenübergreifend schmecken. Wir verwenden nur beste Zutaten aus der Region.
              </p>
              <Link href="/about" className="inline-block font-serif font-semibold px-6 py-3 transition-all" style={{ background: "#c9a227", color: "#121212" }}>
                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-white mb-12 text-center">
            Kunden<span style={{ color: "#c9a227" }}>stimmen</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="p-6 glass-card-deep" style={{ borderRadius: "4px" }}>
                <StarRating rating={review.rating} />
                <p className="text-white font-light my-4">„{review.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-serif">{review.name}</span>
                  <span className="text-cream-muted text-sm">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: "#121212" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: "#c9a227" }} />
          <h2 className="text-4xl font-serif text-white mb-6">
            Probieren<span style={{ color: "#c9a227" }}> Sie</span>
          </h2>
          <p className="text-cream-muted text-lg mb-8">
            Besuchen Sie uns oder bestellen Sie bequem online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="inline-block font-serif font-semibold px-10 py-4 transition-all" style={{ background: "#c9a227", color: "#121212" }}>
              Online bestellen
            </Link>
            <Link href="/contacts" className="inline-block font-serif font-semibold px-10 py-4 transition-all border border-white/30 text-white hover:bg-white hover:text-black">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}