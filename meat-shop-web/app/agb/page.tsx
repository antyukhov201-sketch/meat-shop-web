import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Brennecke Wurstwaren GmbH",
  description: "Allgemeine Geschäftsbedingungen der Brennecke Wurstwaren GmbH.",
};

export default function AgbPage() {
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
              Verkaufs- und Lieferbedingungen
            </h1>
            
            <div className="text-cream-muted font-light leading-relaxed text-sm space-y-6">
              <section>
                <h2 className="text-white font-semibold mb-2">§ 1 Allgemeines</h2>
                <p className="mb-3">
                  Für alle Lieferungen, auch künftige sofern nicht schriftlich Entgegenstehendes vereinbart wird, gelten die nachstehenden Verkaufs- und Lieferbedingungen; sie gelten nur gegenüber Unternehmern im Sinne von § 310 Abs. 1 i.V.m. § 14 Bürgerliches Gesetzbuch. Sie sind auf sonstige Leistungen entsprechend anwendbar.
                </p>
                <p className="mb-3">
                  Abweichende Bedingungen des Käufers, die der Verkäufer nicht ausdrücklich anerkennt, sind unverbindlich, auch wenn der Verkäufer ihnen nicht ausdrücklich widerspricht.
                </p>
                <p className="mb-3">
                  Der Kaufvertrag ist unter der Voraussetzung der unverminderten Zahlungsfähigkeit des Käufers abgeschlossen. Nicht befriedigende Auskünfte, eine Verschlechterung der Vermögensverhältnisse und sonstige nach Vertragsschluss bekannt werdende Umstände, die eine Kreditgewährung nach Ansicht des Verkäufers nicht mehr angebracht erscheinen lassen würden, berechtigen diesen vom Vertrag ohne Fristsetzung zurückzutreten oder nach seiner Wahl Vorauszahlung oder Sicherheitsleistung zu verlangen. Der Käufer ist verpflichtet, dem Verkäufer unverzüglich Mitteilung über eine die Kaufpreisforderung gefährdende Verschlechterung seiner Kreditwürdigkeit zu machen. An Neukunden liefert der Verkäufer grundsätzlich nur gegen Vorauszahlung oder per Nachnahme.
                </p>
                <p className="mb-3">
                  Einbeziehung und Auslegung dieser Verkaufs- und Lieferbedingungen regeln sich ebenso wie Abschluss und Auslegung der Rechtsgeschäfte mit dem Käufer selbst ausschließlich nach dem Recht der Bundesrepublik Deutschland. Die Anwendung des einheitlichen Gesetzes über den Abschluss von internationalen Kaufverträgen über bewegliche Sachen, des einheitlichen Gesetzes über den internationalen Kauf beweglicher Sachen des UN-Kaufrechts sind ausgeschlossen.
                </p>
                <p className="mb-3">
                  Übertragungen von Rechten und Pflichten des Käufers aus dem mit Verkäufer geschlossenen Vertrag bedürfen zu ihrer Wirksamkeit dessen schriftlicher Zustimmung.
                </p>
                <p className="mb-3">
                  Die Unwirksamkeit einzelner Bestimmungen dieses Vertrags oder seiner Bestandteile lässt die Wirksamkeit der übrigen Regelungen unberührt. Die Vertragspartner sind im Rahmen des Zumutbaren nach Treu und Glauben verpflichtet, eine unwirksame Bestimmung durch eine ihrem wirtschaftlichen Erfolg gleichkommende wirksame Regelung zu ersetzen, sofern dadurch keine wesentliche Änderung des Vertragsinhaltesherbeigeführt wird; das Gleiche gilt, falls ein regelungsbedürftiger Sachverhalt nicht ausdrücklich geregelt ist.
                </p>
                <p className="mb-3">
                  Erfüllungsort für alle sich mittelbar oder unmittelbar aus diesem Vertragsverhältnis ergebenden Verpflichtungen, einschließlich der Zahlungspflicht, ist Brennecke Fleischwaren GmbH.
                </p>
                <p>
                  Gerichtsstand ist der für den Firmensitz des Verkäufers zuständige Gerichtsort, soweit der Käufer Kaufmann ist. Der Verkäufer ist auch berechtigt, vor einem Gericht zu klagen, welches für den Sitz oder eine Niederlassung des Käufers zuständig ist.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-2">§ 2 Angebote, Leistungsumfang und Vertragsabschluss</h2>
                <p className="mb-3">
                  Vertragsangebote des Verkäufers sind freibleibend. Mit der Präsentation unserer Waren und der Einräumung der Möglichkeit zur Bestellung ist noch kein verbindliches Angebot unsererseits verbunden. Erst die Bestellung stellt ein Angebot an zum Abschluss eines Vertrages dar. Ein Vertrag kommt erst dann zustande, wenn das bestellte Produkt versandt oder der Auftrag bestätigt wird.
                </p>
                <p className="mb-3">
                  Für den Umfang der vertraglich geschuldeten Leistung ist ausschließlich die Auftragsbestätigung des Verkäufers maßgebend.
                </p>
                <p className="mb-3">
                  Änderungen der Zusammensetzung, der Herstellungsweise oder der Sorte behält sich der Verkäufer auch nach Absendung einer Auftragsbestätigung vor, sofern diese Änderungen weder der Auftragsbestätigung noch der Spezifikation des Käufers widersprechen. Der Käufer wird sich darüber hinaus mit darüber hinausgehenden Änderungsvorschlägen des Verkäufers einverstanden erklären, soweit diese für den Käufer zumutbar sind.
                </p>
                <p className="mb-3">
                  Teillieferungen sind zulässig.
                </p>
                <p className="mb-3">
                  Die dem Angebot oder der Auftragsbestätigung zugrunde liegenden Unterlagen wie Abbildungen, Zeichnungen, Maß-, Gewichts- und Verhältnisangaben sind in der Regel nur als Annäherungswerte zu verstehen, sofern sie nicht ausdrücklich als verbindlich bezeichnet werden. Auf den Produktbildern dargestelltes Zubehör ist nicht Teil des Angebotes und dient lediglich zur Illustration unserer Produkte.
                </p>
                <p>
                  An Abbildungen, Zeichnungen, Kalkulationen und sonstigen Unterlagen behalten wir uns Eigentums- und Urheberrechte vor. Dies gilt auch für solche schriftlichen Unterlagen, die als „vertraulich" bezeichnet sind. Vor ihrer Weitergabe an Dritte bedarf der Auftraggeber unserer ausdrücklichen schriftlichen Zustimmung.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-2">§ 3 Preise, Zahlungsbedingungen, Verzugsfolgen</h2>
                <p className="mb-3">
                  Die Preise gelten ab unserer Betriebsstätte in Brennecke Fleischwaren GmbH ausschließlich Verpackung und sonstiger Versand- und Transportspesen zuzüglich der jeweiligen gesetzlichen Umsatzsteuer. Soweit keine Preise vereinbart sind gelten die Marktpreise zuzüglich Umsatzsteuer. Für Bestellungen unter einer Mindestbestellmenge von 20,00 kg berechnet der Verkäufer eine Mindermengenpauschale.
                </p>
                <p className="mb-3">
                  Die Verpackung wird zu Selbstkosten berechnet und nur zurückgenommen, wenn der Verkäufer kraft zwingender gesetzlicher Regelung hierzu verpflichtet ist. Die Wahl der Versandart erfolgt nach bestem Ermessen.
                </p>
                <p className="mb-3">
                  Liegen zwischen Vertragsschluss und Auslieferung mehr als vier Monate, ohne dass eine Lieferverzögerung des Verkäufers von diesem zu vertreten ist, kann der Verkäufer den Preis unter Berücksichtigung eingetretener Material-, Lohn- und sonstiger Nebenkosten oder der marktmäßigen Einstandspreise, die vom Verkäufer zu tragen sind, angemessen erhöhen. Erhöht sich der Kaufpreis um mehr als 40 %, ist der Käufer berechtigt, vom Vertrag zurückzutreten.
                </p>
                <p className="mb-3">
                  Berücksichtigt der Verkäufer Änderungswünsche des Käufers, so werden die hierdurch entstehenden Mehrkosten dem Käufer in Rechnung gestellt.
                </p>
                <p className="mb-3">
                  Falls nicht anders vereinbart, hat die Zahlung ohne jeden Abzug unverzüglich bei Anlieferung nach Rechnungserhalt oder gegen Quittung zu erfolgen. Bei Vereinbarung einer Lieferung auf Ziel wird das Zahlungsziel ab dem Datum der Lieferung berechnet.
                </p>
                <p className="mb-3">
                  Scheck- und Wechselhergaben gelten erst nach Einlösung als Zahlung. Die Wechselentgegennahme bedarf immer einer vorhergehenden schriftlichen Vereinbarung mit dem Verkäufer. Andernfalls liegt hierin keine Stundungszusage des Verkäufers. Bei Hereinnahme von Wechseln werden die bankmäßigen Diskont- und Einziehungsspesen berechnet. Sie sind sofort in bar zu zahlen.
                </p>
                <p>
                  Bei Lieferung auf Ziel, sonstigen Stundungsvereinbarungen oder bei vereinbarten Wechselzahlungen wird der Kaufpreis sofort fällig, wenn berechtigte Zweifel an der Zahlungsfähigkeit des Käufers bekannt werden, insbesondere der Käufer die Zahlungen einstellt oder über dessen Vermögen das Insolvenzverfahren beantragt wird. Gleiches gilt, wenn der Käufer bei vereinbarten Ratenzahlungen mit mehr als einer Rate oder der Bezahlung einer sonstigen fälligen Forderung oder einer Forderung aus einem anderen selbständigen Vertrag zwischen den Parteien in Verzug kommt. Der Verkäufer kann in diesen Fällen auch weitere Lieferungen aus anderen selbständigen Verträgen verweigern und Schadenersatz verlangen, bis der Käufer alle ihm gegenüber aus irgendwelchen Verträgen obliegende Verpflichtungen erfüllt hat. Er kann auch weitere Lieferungen von vorheriger Zahlung des Kaufpreises oder der Leistung von Sicherheit abhängig machen, ohne das dem Käufer hieraus ein Recht erwächst vom Vertrag zurückzutreten.
                </p>
                <p className="mt-3">
                  Bei schuldhafter Überschreitung einer Zahlungsfrist werden unter Vorbehalt der Geltendmachung weitergehender Ansprüche Zinsen in Höhe von 8 % über dem jeweils geltenden Basiszinssatz verlangt.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-2">§ 4 Aufrechnung und Zurückhaltung</h2>
                <p>
                  Aufrechnung und Zurückhaltung sind ausgeschlossen, es sei denn, dass die Aufrechnungsforderung unbestritten oder rechtskräftig festgestellt ist.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-2">§ 5 Lieferfrist</h2>
                <p className="mb-3">
                  Die Angabe eines Lieferzeitpunktes erfolgt nach bestem Ermessen und verlängert sich angemessen, wenn der Käufer seinerseits erforderliche oder vereinbarte Mitwirkungshandlungen verzögert oder unterlässt. Ist Lieferung auf Abruf vereinbart, so hat der Käufer eine angemessene Frist zur Lieferung einzuräumen.
                </p>
                <p className="mb-3">
                  Das Gleiche gilt bei Maßnahmen im Rahmen von Arbeitskämpfen, insbesondere Streik und Aussperrung sowie beim Eintritt unvorhergesehener Hindernisse, die außerhalb des Willens des Verkäufers liegen, z.B. Lieferverzögerung eines Vorlieferanten, Verkehrs- und Betriebsstörungen, Werkstoff- oder Energiemangel, Witterungsumstände etc. Vorliegende Umstände sind auch dann nicht vom Verkäufer zu vertreten, wenn sie während des bereits vorliegenden Verzuges entstehen. Auch vom Käufer veranlasste Änderungen der gelieferten Waren führen zu einer angemessenen Verlängerung der Lieferfrist.
                </p>
                <p>
                  Die Lieferfrist beginnt nicht vor einem Eingang einer vereinbarten Anzahlung. Die Lieferfrist ist eingehalten, wenn bis zu ihrem Ablauf die Versandbereitschaft mitgeteilt ist oder die Ware das Lager verlassen hat.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-2">§ 6 Abnahme und Gefahrenübergang</h2>
                <p className="mb-3">
                  Der Käufer ist verpflichtet, die Ware anzunehmen. Mangels abweichender Vereinbarung (Lieferung durch den Verkäufer) erfolgt die Übergabe in den Geschäftsräumen des Verkäufers in Brennecke Fleischwaren GmbH.
                </p>
                <p className="mb-3">
                  Gerät der Käufer mit dem Abruf bzw. der Annahme in Verzug, so kann der Verkäufer ungeachtet der sonstigen gesetzlichen Rechte nach vorheriger ausdrücklicher Ankündigung die Ware bei sich oder Dritten auf Kosten und Gefahr des Käufers einlagern oder nach Setzung einer angemessenen Nachfrist, die in keinem Fall mehr als zwei Wochen beträgt, in geeigneter Weise auf Rechnung des Käufers verwerten oder vom Vertrag zurückzutreten und Schadensersatz verlangen. Der Setzung einer Nachfrist bedarf es nicht, wenn der Käufer die Annahme ernsthaft oder endgültig verweigert oder offenkundig auch innerhalb dieser Zeit zur Zahlung des Kaufpreises nicht im Stande ist.
                </p>
                <p className="mb-3">
                  Die Gefahr geht auf den Käufer über, sobald der Verkäufer die Ware dem Käufer zur Verfügung gestellt hat und dies dem Käufer anzeigt. Erklärt der Käufer, er werde die Ware nicht annehmen, so geht die Gefahr eines zufälligen Untergangs oder einer zufälligen Verschlechterung des Liefergegenstandes im Zeitpunkt der Verweigerung auf den Käufer über.
                </p>
                <p>
                  Versand erfolgt auch bei frachtfreier Lieferung auf Gefahr des Verkäufers. Transportversicherungen schließt der Verkäufer auf Wunsch des Käufers im von diesem gewünschten Umfang auf dessen Kosten ab.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-2">§ 7 Eigentumsvorbehalt</h2>
                <p className="mb-3">
                  Der Verkäufer behält sich das Eigentum an den gelieferten Waren bis zur vollständigen Bezahlung vor. Der Eigentumsvorbehalt gilt auch, bis sämtliche, auch künftige und bedingte Forderungen aus der Geschäftsverbindung, zwischen Käufer und Verkäufer erfüllt sind.
                </p>
                <p className="mb-3">
                  Bei vertragswidrigem Verhalten des Käufers, insbesondere bei Zahlungsverzug, ist der Verkäufer zur Rücknahme nach Mahnung berechtigt und der Verkäufer zur Herausgabe verpflichtet.
                </p>
                <p className="mb-3">
                  Der Verkäufer ist berechtigt, die Eigentumsvorbehaltsrechte geltend zu machen, ohne vom Vertrag zurückzutreten. Die Geltendmachung des Eigentumsvorbehaltes sowie die Pfändung der Liefergegenstände durch den Verkäufer gelten nicht als Rücktritt vom Vertrag, sofern dies nicht ausdrücklich durch den Verkäufer schriftlich erklärt wird.
                </p>
                <p className="mb-3">
                  Der Käufer ist zur Sicherungsübereignung oder Verpfändung der Ware nicht befugt. Er ist jedoch berechtigt, die Ware im ordentlichen Geschäftsgang weiterzuverkaufen. Er tritt dem Verkäufer jedoch bereits jetzt alle Forderungen ab, die dem Käufer aus der Weiterveräußerung erwachsen, einschließlich Nebenrechte sowie etwaige Ansprüche gegen eine Kreditversicherung, und zwar unabhängig davon, ob die Ware ohne oder nach Bearbeitung weiterverkauft werden.
                </p>
                <p className="mb-3">
                  Zur Einziehung dieser Forderungen ist der Käufer nach deren Abtretung ermächtigt. Für den Fall, dass die Ware nur im Miteigentum des Verkäufers steht oder vom Käufer mit anderen, nicht dem Verkäufer gehörenden Waren zu einem Gesamtpreis verkauft wird, erfolgt die bereits erfolgte Abtretung der Forderung nur in Höhe des Betrages, den der Verkäufer dem Käufer für die betreffenden Waren oder Teile hiervon berechnet hat.
                </p>
                <p className="mb-3">
                  Die Befugnis des Verkäufers die Forderungen selbst einzuziehen, bleibt davon unberührt. Jedoch verpflichtet sich der Verkäufer die Forderungen nicht einzuziehen, solange der Käufer seinen Zahlungsverpflichtungen - auch aus anderen selbständigen Verträgen mit dem Verkäufer - ordnungsgemäß nachkommt und nicht im Zahlungsverzug ist, nicht die Zahlung eingestellt hat, nicht kreditunwürdig im Sinne von § 1 Abs. 3 ist oder das Insolvenzverfahren beantragt ist.
                </p>
                <p className="mb-3">
                  Die Verarbeitung oder Umbildung der Waren durch den Käufer wird stets für den Verkäufer vorgenommen, ohne dass diesem daraus Verbindlichkeiten entstehen. Werden die Waren mit anderen, dem Verkäufer nicht gehörenden Gegenständen verarbeitet, so erwirbt dieser das Miteigentum an der neuen Sache im Verhältnis des Wertes der Waren zu den anderen verarbeiteten Gegenständen zur Zeit der Verarbeitung.
                </p>
                <p className="mb-3">
                  Werden die Waren mit anderen, dem Verkäufer nicht gehörenden Gegenständen untrennbar vermischt, so erwirbt der Verkäufer das Miteigentum an der neuen Sache im Verhältnis des Wertes der Ware zu den anderen vermischten Gegenständen. Der Käufer verwahrt das Miteigentum für den Verkäufer.
                </p>
                <p className="mb-3">
                  Solange das Eigentum des Verkäufers an der Ware besteht, ist diese vom Käufer gegen die üblichen Gefahren ausreichend zu versichern. Die aus einem Schadenfall entstehenden Forderungen, insbesondere gegen die Versicherung, tritt der Käufer hiermit an den Verkäufer zur Sicherung dessen Ansprüche bis in Höhe dessen Forderungen ab.
                </p>
                <p className="mb-3">
                  Bei Pfändungen sowie Beschlagnahme oder sonstigen Verfügungen durch Dritte, hat der Käufer den Verkäufer unverzüglich davon zu benachrichtigen und den Verkäufer alle Auskünfte und Unterlagen zur Verfügung zu stellen, die zur Wahrung der Rechte des Käufers erforderlich sind. Vollstreckungsbeamte bzw. Dritte sind auf das Eigentum des Verkäufers hinzuweisen.
                </p>
                <p className="mb-3">
                  Der Eigentumsvorbehalt bleibt auch bestehen, wenn einzelne Forderungen des Verkäufers in seine laufende Rechnung aufgenommen werden und der Saldo gezogen und anerkannt ist. Bei Geltendmachung des Eigentumsvorbehalts ist der Käufer verpflichtet, die Ware unverzüglich auf seine Kosten zurückzusenden und Ersatz für die vom Verkäufer anlässlich des Vertrages gemachten Aufwendungen für Fracht und Spesen zu leisten.
                </p>
                <p>
                  Übersteigt der Wert sämtlicher für den Verkäufer bestehenden Sicherheiten die bestehenden Forderungen nachhaltig um mehr als 20 %, so wird der Verkäufer auf Verlangen des Käufers Sicherheiten nach Wahl des Verkäufers freigeben.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-2">§ 8 Mängel- und Rückgriffsansprüche</h2>
                <p className="mb-3">
                  Der Käufer hat die Ware unverzüglich nach Erhalt, soweit dies nach ordnungsgemäßem Geschäftsgang tunlich ist, zu untersuchen, und, wenn sich ein Mangel zeigt, dem Verkäufer unverzüglich – längstens jedoch innerhalb von fünf Tagen – Anzeige zu machen. Unterlässt der Käufer diese Anzeige, so gilt die Ware als genehmigt, es sei denn, dass es sich um einen Mangel handelt, der bei der Untersuchung nicht erkennbar war. Vorstehendes gilt entsprechend, wenn sich der Mangel später zeigt oder ein Wiederkäufer dem Käufer den Mangel anzeigt. Im Übrigen gelten die §§ 377 ff. HGB.
                </p>
                <p className="mb-3">
                  Die Mängelansprüche sind auf Nacherfüllung beschränkt. Bei Fehlschlagen der Nacherfüllung hat der Käufer das Recht, nach seiner Wahl Herabsetzung der Vergütung oder Rückgängigmachung des Vertrages zu verlangen.
                </p>
                <p className="mb-3">
                  Der Verkäufer hält die Ware für den inländischen und den warenüblichen Gebrauch bestimmt. Der Käufer wird der Verkäufer bei Auftragserteilung davon in Kenntnis setzen, wenn er einen anderen Gebrauch oder einen Weiterverkauf zu einem anderen Gebrauch beabsichtigt.
                </p>
                <p className="mb-3">
                  Ansprüche wegen Mängeln stehen nur dem unmittelbaren Käufer zu und sind nicht abtretbar.
                </p>
                <p>
                  Die Mängelansprüche verjähren in einem Jahr seit Lieferung der Kaufsache.
                </p>
              </section>

              <section>
                <h2 className="text-white font-semibold mb-2">§ 9 Haftung</h2>
                <p className="mb-3">
                  Bei leichter Fahrlässigkeit haftet der Verkäufer nur bei der Verletzung vertragswesentlicher Pflichten und beschränkt auf den vorhersehbaren Schaden. Diese Beschränkung gilt nicht bei der Verletzung von Leben, Körper und Gesundheit. Für sonstige leicht fahrlässig durch einen Mangel des Kaufgegenstandes verursachte Schäden haftet der Verkäufer nicht.
                </p>
                <p className="mb-3">
                  Unabhängig von einem Verschulden des Verkäufers bleibt eine Haftung bei arglistigem Verschweigen des Mangels oder aus der Übernahme einer Garantie unberührt.
                </p>
                <p className="mb-3">
                  Der Verkäufer ist auch für die während ihres Verzugs durch Zufall eintretende Unmöglichkeit der Lieferung verantwortlich, es sei denn dass der Schaden auch bei rechtzeitiger Lieferung eingetreten wäre.
                </p>
                <p>
                  Ausgeschlossen ist die persönliche Haftung der gesetzlichen Vertreter, Erfüllungsgehilfen und Betriebsangehörigen des Verkäufers für von ihnen durch leichte Fahrlässigkeit verursachte Schäden.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}