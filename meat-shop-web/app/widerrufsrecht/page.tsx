import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widerrufsrecht | Brennecke Wurstwaren GmbH",
  description: "Widerrufsrecht der Brennecke Wurstwaren GmbH.",
};

export default function WiderrufsrechtPage() {
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
              Widerrufsrecht
            </h1>
            
            <div className="text-cream-muted font-light leading-relaxed text-sm space-y-4">
              <p className="mb-6">
                Sie können Ihre Vertragserklärung innerhalb von 14 Tagen ohne Angabe von Gründen in Textform (z. B. Brief, Fax, E-Mail) oder – wenn Ihnen die Sache vor Fristablauf überlassen wird – durch Rücksendung der Sache widerrufen. Die Frist beginnt nach Erhalt dieser Belehrung in Textform, jedoch nicht vor Eingang der Ware beim Empfänger (bei der wiederkehrenden Lieferung gleichartiger Waren nicht vor dem Eingang der ersten Teillieferung) und auch nicht vor Erfüllung unserer Informationspflichten gemäß Artikel 246 § 2 in Verbindung mit § 1 Abs. 1 und 2 EGBGB sowie unserer Pflichten gemäß § 312g Abs. 1 Satz 1 BGB in Verbindung mit Artikel 246 § 3 EGBGB.
              </p>
              
              <p className="mb-6">
                Zur Wahrung der Widerrufsfrist genügt die rechtzeitige Absendung des Widerrufs oder der Sache. Der Widerruf ist zu richten an:
              </p>
              
              <div className="pl-4 border-l-2 border-gold/30 py-2">
                <p className="text-white font-medium mb-1">Brennecke Fleischwaren GmbH</p>
                <p className="mb-1">Nordhäuser Str. 17</p>
                <p className="mb-1">99768 Harztor</p>
                <p className="text-gold">brenneckewurst@gmail.com</p>
              </div>
              
              <p className="mt-8">
                <strong className="text-white font-medium">Das Widerrufsrecht besteht nicht</strong> bei Fernabsatzverträgen zur Lieferung von Waren, die nach Kundenspezifikation angefertigt werden oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind oder die aufgrund ihrer Beschaffenheit nicht für eine Rücksendung geeignet sind oder schnell verderben können oder deren Verfallsdatum überschritten würde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}