# Projektdokumentation - [Book Track]

## Inhaltsverzeichnis
1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
    1. [Understand & Define](#31-understand--define)
    2. [Sketch](#32-sketch)
    3. [Decide](#33-decide)
    4. [Prototype](#34-prototype)
    5. [Validate](#35-validate)
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)

## 1. Ausgangslage

- **Problem:** 
    Obwohl Lesen für viele ein leidenschaftliches Hobby ist, geht im stressigen Alltag oft der Überblick über spannende Buchempfehlungen und den eigenen Lesefortschritt verloren. Viele wissen zwar genau, was sie interessiert, doch welche Titel bereits gelesen wurden oder noch auf der Wunschliste stehen, gerät schnell in Vergessenheit. Oft fällt es dann sogar schwer, die Motivation für ein bereits angefangenes Buch aufrechtzuerhalten.

    Ein zentrales Problem besteht darin, dass bestehende Lösungen wie einfache Notizen oder Textlisten diesen Bedarf nur unzureichend abdecken. Sie sind häufig unübersichtlich, wenig intuitiv und bieten kaum Möglichkeiten zur Strukturierung, Filterung oder gezielten Suche.

    Gleichzeitig sind viele bestehende Plattformen öffentlich oder stark auf soziale Interaktion ausgelegt. Dadurch fehlt oft ein persönlicher, privater Raum, in dem Leserinnen und Leser ihre Gedanken, Fortschritte und Interessen unabhängig von anderen festhalten können.

    Das Problem liegt somit nicht im Lesen selbst, sondern in der fehlenden Unterstützung bei der Organisation, Motivation und Privatsphäre. Bestehende analoge oder einfache digitale Lösungen sind statisch, während viele moderne Plattformen zu öffentlich und sozial ausgerichtet sind. Es fehlt eine Lösung, die Übersichtlichkeit, visuelle Darstellung, persönliche Nutzung und motivierende Funktionen in einem privaten Rahmen kombiniert.

- **Ziele:** 

    - Entwicklung einer modernen und benutzerfreundlichen Web-Applikation als „digitales Bücherregal“ zur einfachen Verwaltung der persönlichen Bibliothek.

    - Schaffung einer übersichtlichen und visuell ansprechenden Darstellung durch Buchcover zur besseren Wiedererkennung von Büchern.

    - Ermöglichung einer intuitiven und flexiblen Kategorisierung/Filterung (nach Titel, Autor, Genre und Rating)

    - Unterstützung der Nutzer beim Behalten des Überblicks über gelesene und geplante Bücher.

    - Förderung der Lesemotivation durch Funktionen wie Fortschrittsverfolgung.

    - Bereitstellung einer privaten Nutzungserfahrung ohne sozialen Druck oder öffentliche Bewertungssysteme.

- **Primäre Zielgruppe:**  

    - Hobby-Leser & Buchliebhaber:
    
        Diese Zielgruppe liest regelmäßig aus Interesse und möchte Bücher bewerten, kommentieren und übersichtlich organisieren. Sie hat oft viele Buchempfehlungen, verliert jedoch schnell den Überblick, da bestehende Listen unstrukturiert und schwer durchsuchbar sind.

    - Zielorientierte Leser (z.B. Studierende):
    
        Diese Nutzer lesen mit klaren Zielen und benötigen eine strukturierte Übersicht über ihren Lesefortschritt. Aufgrund eines stressigen Alltags lesen sie unregelmäßig und verlieren häufig den Überblick, weshalb sie von Fortschrittsanzeigen profitieren.

    - Eltern & dessen Kinder:
    
        Diese Zielgruppe möchte das Lesen gemeinsam gestalten, Fortschritte verfolgen und die Motivation der Kinder fördern. Im hektischen Familienalltag fällt es jedoch schwer, eine feste Leseroutine zu etablieren, weshalb visuelle Anreize und spielerische Elemente besonders wichtig sind.

- **Weitere Stakeholder [Optional]:** 
    - Schulen & Bildungseinrichtungen: 
    
        Lehrkräfte oder Schulen haben Interesse daran, Lesemotivation zu fördern und Fortschritte nachvollziehbar zu machen, insbesondere bei Kindern und Jugendlichen.

    - Werbepartner & Kooperationspartner:
    
        Falls die Lösung monetarisiert wird, könnten Partner (z. B. Buchplattformen oder Bildungsanbieter) Interesse haben, ihre Inhalte gezielt zu platzieren.

    - Technologie- und Plattformanbieter:
    
        Unternehmen, die Infrastruktur oder Schnittstellen bereitstellen (z. B. für Buchdaten, APIs), sind wichtige Stakeholder, da die Lösung in Zukunft technisch von ihnen abhängig sein könnte.


## 2. Lösungsidee
BookTrack füllt die Lücke zwischen "Zettelwirtschaft" und "öffentlicher Community-Plattform". Es ist ein persönliches Lese-Journal mit visuellem Fokus, die motiviert und sofort für Ordnung sorgt – ohne sozialen Druck an die Nutzer, aber mit maximaler Übersicht für die eigene Bibliothek.

- **Kernfunktionalität:**
    - Eine Web-Applikation, in der Nutzer Bücher hinzufügen, editieren, löschen und in Kategorien einteilen können (Current Read, Bookmarked & My Reads). 

    - Jeder Nutzer hat seinen eigenen Account und kann somit seine persönliche "Library" pflegen.

    - Bücher werden primär als Bilder-Raster (Cover) mit Titel, Autor und Genre dargestellt. 

    - Nutzer können die Liste über eine Suchleiste sowie über Genre-Tags(Romance, Thriller, Fantasy etc.) und Ratings durchsuchen.

    - Es gibt eine Seite in der man Reading-Goals erfassen und nachverfolgen kann.

    - Bücher können bewerted und kommentiert werden.

    User-Journey (ein exemplarischer Workflow):
    1. Nutzer öffnet die Web-App und loggt sich in sein Profil ein

    2. Nutzer fügt ein neues Buch hinzu via "+Add Book" Button.

        (Required: Titel, Genre & Status. Optional: Cover, Autor, Rating, Release-Datum, Notizen und Abschluss-Datum)

    4. Nutzer sieht das Buch direkt in der entsprechend Katogerisierten Seite des Status (Bookmarked, Current Read oder My Reads).

    5. Nutzer aktualisiert seinen Fortschritt, editiert die Buchinformationen oder verschiebt das Buch zu einem anderen Status.

- **Annahmen [Optional]:** 
    - Nutzer bevorzugen eine visuelle Navigation (Bilder) gegenüber reinen Textlisten. 
    
    - Eine aufgeräumte, minimalistische Oberfläche lenkt weniger ab und rückt die Bücher in den Fokus.

    - Gamification-Elemente (wie das Füllen von Kreisen bei erreichten Zielen) steigern die Rückkehrrate (Retention) der Nutzer.

- **Abgrenzung [Optional]:**

    Nicht zum Umfang dieses Projekts gehören:

    - Social-Media-Funktionen (wie Freunde hinzufügen oder Listen teilen).

    - Eine integrierte Lese-Funktion (es können keine E-Books in der App gelesen werden).

    - Direkte Kauf-Links zu Buchhandlungen.


## 3. Vorgehen & Artefakte
### 3.1 Understand & Define
- **Zielgruppenverständnis:** 

    Analyse bestehender Lösungen:

    | Aspekt | Erkenntnisse |
    |--------|--------------|
    | **Benutzer** | Leser aller Altersklassen, die gerne lesen, aber im Alltag den Überblick verlieren; Fokus auf Privatsphäre statt auf Social Media. |
    | **Aufgaben** | Gelesene Bücher und Wunschliste verwalten; Lesefortschritt und persönliche Leseziele tracken; Bücher kategorisieren (Titel, Autor, Genre, Rating). |
    | **System (Ist)** | Goodreads, einfache Notizen/Textlisten, komplexe Notion-Templates, physische Bullet Journals. |
    | **Umfeld** | Zuhause beim Lesen, unterwegs (z. B. beim Pendeln oder in der Buchhandlung); Nutzung über Smartphone oder Desktop; schnelle, unkomplizierte Eingabe gewünscht. |
    | **Positives (Keep)** | Visuelle Übersicht (Buchcover helfen massiv bei der Wiedererkennung); Individualisierbarkeit von Bullet Journals (aber idealerweise automatisiert und digital). |
    | **Frustpunkte** | Bestehende Apps sind oft überladen und erzeugen sozialen Druck; Notion/Bullet Journals sind in der Pflege viel zu zeitaufwendig; einfache Listen sind unübersichtlich; fehlendes Tracking von eigenen Zielen direkt in der App. |

    Protopersonas:

    | Persona | Persönliche Attribute | Umfeld | Ziele | Aufgaben | Frustpunkte |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | **Lydia, die gestresste Alltagsleserin** | 32 Jahre, Projektmanagerin, liest gerne zur Entspannung, hat aber einen stetig wachsenden Stapel ungelesener Bücher | Kurze Pausen beim Pendeln im Zug, abends auf der Couch; primär Smartphone-Nutzung | Den Überblick über Empfehlungen behalten; eine strukturierte Wunschliste führen; sich wieder mehr zum Lesen motivieren | Neue Buchempfehlungen schnell erfassen; Bücher als "gelesen" markieren; eigene Kommentare erfassen | Goodreads erzeugt durch die Community "Lese-Druck"; einfache Handy-Notizen sind unübersichtlich und nicht filterbar |
    | **Mirko, der strukturierte Ästhet** | 42 Jahre, Grafikdesigner, liebt schöne Buchcover und Ordnung, hat früher ein physisches Reading-Journal geführt | Zuhause am Desktop-PC oder auf dem Tablet, meist am Wochenende beim Ordnen seiner Bibliothek | Ein visuell ansprechendes, digitales Bücherregal besitzen; Bücher nach Genre und privatem Rating sortieren; den Lese-Rückblick geniessen | Buchcover betrachten; private Bewertungen und Tags vergeben; in der eigenen Lesehistorie stöbern | Bullet Journals rauben zu viel Zeit; Notion-Vorlagen sind auf dem Handy zu umständlich und starr in der Bedienung |
    | **Sara, die zielorientierte Gelegenheitsleserin** | 20 Jahre, Vollzeitstudentin, möchte ihre Bildschirmzeit reduzieren und wieder mehr Bücher tatsächlich beenden | Abends im Bett oder im Urlaub; nutzt das Smartphone für schnelle, unkomplizierte Einträge | Motivation aufrechterhalten, um angefangene Bücher zu beenden; eigene Leseziele stressfrei erreichen | Persönliche Leseziele tracken; Bücher unkompliziert suchen und hinzufügen | Verliert oft die Motivation bei der Hälfte eines Buches; mag es absolut nicht, wenn andere ihre Lese-Geschwindigkeit oder Buchauswahl öffentlich sehen können |

- **Wesentliche Erkenntnisse:** 
    - Visuelle Elemente (Buchcover) sind für das Gehirn schneller erfassbar als Text.

    - Das Hinzufügen von Büchern muss schnell und unkompliziert sein (z. B. durch einen "Add Book"-Button).

    - Filtern nach Genre und Titel sind wichtige Kernfunktionen.

    - Es soll ein privater Raum sein, auf den niemand anderes Zugriff hat.

    - Die App muss mobil für das schnelle Erfassen unterwegs optimiert sein, aber auch eine Desktop-/Tablet-Ansicht für die ästhetische Organisation bieten.

    - Im Gegensatz zu Notion oder Bullet Journals darf die App keinen initialen Einrichtungsaufwand erfordern.

    - Das Tracking von Lesezielen und dem Lesefortschritt muss positiv und belohnend wirken, ohne Leistungsdruck zu erzeugen.


### 3.2 Sketch
- **Variantenüberblick:** 

  Die Skizzenphase wurde im Rahmen der Kleinklasse unter Anwendung der Crazy-8s-Methode durchgeführt. Die Vorgabe bestand darin, unter Zeitdruck innerhalb von acht Minuten acht Skizzen anzufertigen. Ziel dieser Methode ist es, den inneren Kritiker auszuschalten und der Kreativität freien Lauf zu lassen. Im Anschluss wurden die entstandenen Entwürfe in Partnerarbeit besprochen, um gegenseitiges Feedback einzuholen. Nach einer kurzen Reflexionsphase wurde schliesslich eine detaillierte, ausgearbeitete Skizze erstellt.

- **Skizzen:** 

  Die entstandenen Skizzen brachten vielfältige Lösungsansätze hervor. Während sich die meisten Entwürfe auf eine listenbasierte Darstellung der Inhalte konzentrierten, experimentierten andere Skizzen mit einem kartenbasierten Layout. Ein wesentlicher Unterschied zwischen den Varianten bestand darin, ob und wie die Buchcover in das Interface integriert wurden und ob Filterfunktionen zur Verfügung standen. Basierend auf dem Feedback wurde entschieden, die stärksten Aspekte aus mehreren Entwürfen zu kombinieren. Diese Synthese bildete die Grundlage für die finale Ausarbeitung.
    
  Die vollständige visuelle Dokumentation aller Varianten inklusive der finalen Skizze ist hier hinterlegt:
    
  -> [Skizzen öffnen](./.docs/SkizzePrototyping.md)

### 3.3 Decide
- **Gewählte Variante & Begründung:** 

     Besonders orientiert wurde sich an den Skizzen-Screens 4. und 7. bei welchem der Content (die Buchcover) im absoluten Zentrum steht, jedoch zur gleichen Zeit alle wichtigsten Informationen genannt werden (Titel, Genre, Autor).

     Für das Design wurde sich für ein helles, minimalistisches Layout-Konzept basierend auf dem Bootstrap-Framework entschieden. Eine persistente obere Navigationsleiste (Navbar) ermöglicht zudem jederzeit den schnellen Kontextwechsel zwischen den verschiedenen Bibliotheksbereichen. Ausserdem wird bewusst auf ablenkende Hintergrundfarben verzichtet, um die Farben der Buchcover wirken zu lassen und in den Fokus zu transportieren. Die genauere Ausarbeitung der Designentscheide sind im Dokument im untenstehenden Absatz "End-to-Emd-Ablauf" aufzufinden.

- **End-to-End-Ablauf:** 

    Die verschiedenen Workflow-Diagramme (inkl. Designentscheide) sind hier hinterlegt:

    -> [Workflows und Designentscheide öffnen](./.docs/PrototypMitFigma.md)

    Die Applikation ist so aufgebaut, dass alle Kernfunktionen über eine permanente, horizontale Text-Navigation am oberen Bildschirmrand erreichbar sind. Die Workflows teilen sich in sechs zentrale Nutzerpfade auf:

    1. Workflow: Neues Buch hinzufügen (Add Book)

        *Ziel: Ein neu entdecktes Buch oder eine Empfehlung schnell in der App hinterlegen.*

        - **Ausgangspunkt:** Homescreen
        - **Ablauf:**
            1. Nutzer:in klickt auf dem Homescreen auf den Button **"+Add Book"**.
            2. Das System öffnet die Ansicht **"Neues Buch erfassen"**.
            3. Nutzer:in gibt die Buchdetails ein.
        - **Verzweigungen / Pfad-Enden:**
            - **Option A (Speichern):** Klick auf **"save book"** -> Das Buch wird mit dem Status **"Bookmarked"** (Merkliste) hinterlegt und der Prozess ist abgeschlossen.
            - **Option B (Abbrechen):** Klick auf **"cancel"** -> Die Eingaben werden verworfen und das System kehrt zurück zum **Homescreen**.

    2. Workflow: Aktuelles Buch aktualisieren (Edit Currently Reading)

        *Ziel: Den Fortschritt des Buchs anpassen, das man momentan liest, oder es erfolgreich beenden.*

        - **Ausgangspunkt:** Homescreen
        - **Ablauf:**
            1. Nutzer:in wählt auf dem Homescreen das aktuelle Buch über die Aktion **"current read"** aus.
            2. Das System öffnet die Ansicht **"Buch ansehen"** (im Split-Screen-Layout: links Fakten, rechts das Cover).
            3. Nutzer:in klickt auf **"edit"**.
            4. Das System öffnet die Maske **"Buch editieren"**.
        - **Verzweigungen / Pfad-Enden:**
            - **Option A (Speichern):** Klick auf **"save changes"** -> Änderungen werden übernommen, System kehrt zur Ansicht **"Buch ansehen"** zurück.
            - **Option B (Abbrechen):** Klick auf **"cancel"** -> Änderungen werden verworfen, System kehrt zur Ansicht **"Buch ansehen"** zurück.
            - **Option C (Beenden):** Klick auf **"finished"** (in der "Buch ansehen"-Ansicht) -> Das Buch wird als gelesen markiert und in das **"Book Archive"** verschoben.

    3. Workflow: Merkliste verwalten (Bookmarks)

        *Ziel: Durch die ungelesenen Empfehlungen stöbern und ein Buch auswählen.*

        - **Ausgangspunkt:** Homescreen / Navigation
        - **Ablauf:**
            1. Nutzer:in navigiert über die Option **"Bookmarks ansehen"** (bzw. "bookmarked klicken").
            2. Das System öffnet die Übersicht der gemerkten Bücher.
            3. Nutzer:in kann die Funktion **"Buch suchen/filtern"** nutzen, um die Auswahl einzugrenzen.
            4. Nutzer:in führt die Aktion **"Buch auswählen / ansehen"** aus.
            5. Das System öffnet die **"Book Details"** des entsprechenden Titels.

    4. Workflow: Buchdetails bearbeiten & löschen (Edit Book)

        *Ziel: Ein bereits existierendes Buch in den Details anpassen oder komplett aus der App entfernen.*

        - **Ausgangspunkt:** Ansicht "Book Details"
        - **Ablauf (Bearbeiten):**
            1. Nutzer:in klickt in den "Book Details" auf **"edit"**.
            2. Das System öffnet die Ansicht **"Buch editieren"**.
            3. **Pfad-Ende:** Klick auf **"save"** übernimmt die Daten, Klick auf **"cancel"** verwirft sie. Beide führen zurück zu den **"Book Details"**.
        - **Ablauf (Löschen):**
            1. Nutzer:in klickt in den "Book Details" auf **"delete"**.
            2. Das System wechselt in den Zustand **"Buch löschen"** (Sicherheitsabfrage/Prozess).
            3. **Pfad-Ende:** Nach erfolgreicher Löschung führt das System automatisch zurück zum **Homescreen**.

    5. Workflow: Lese-Archiv einsehen (Book Archive)

        *Ziel: Die Sammlung aller bereits gelesenen Bücher betrachten und durchsuchen.*

        - **Ausgangspunkt:** Homescreen / Navigation
        - **Ablauf:**
            1. Nutzer:in klickt in der Navigation auf **"My Reads"**.
            2. Das System öffnet das **"Book Archive"** in einem klassischen Raster-Layout (Grid), um eine optische Bücherwand zu simulieren.
            3. Nutzer:in nutzt die Funktion **"Buch suchen/filtern"** nach Genre, Titel, Autor oder Rating.
            4. Nutzer:in führt die Aktion **"anklicken"** auf einem Buchcover aus.
            5. Das System öffnet die dazugehörigen **"Book Details"**.

    6. Workflow: Leseziele & Gamification verwalten (Goals)

        *Ziel: Persönliche Meilensteine stressfrei tracken und den Fortschritt visuell belohnen.*

        - **Ausgangspunkt:** Bereich "My Goals"
        - **Ablauf A: Neues Ziel hinzufügen**
            1. Nutzer:in klickt auf **"+ Add Goal"**.
            2. Das System öffnet das Fenster **"New Goal hinzufügen"**.
            3. **Pfad-Ende:** Klick auf **"save"** (Ziel wird gespeichert) oder **"cancel"** (Abbruch) führt zurück zu **"My Goals"**.
        - **Ablauf B: Ziel bearbeiten**
            1. Nutzer:in klickt bei einem bestehenden Ziel auf **"edit"**.
            2. Das System öffnet die Ansicht **"Goal editieren"**.
            3. **Pfad-Ende:** Klick auf **"save"** oder **"cancel"** führt zurück zu **"My Goals"**.
        - **Ablauf C: Fortschritt tracken (Gamification)**
            1. Nutzer:in klickt direkt auf der "My Goals"-Oberfläche auf ein Kreiselement (**"auf Kreis klicken"**).
            2. **System-Reaktion:** Die **Farbe des Kreises ändert sich** sofort visuell, um das Erreichen einer Lese-Einheit spielerisch und ohne Druck zu bestätigen.


    <br>
    User Journey Map: 

    (Fokus Persona: Lydia, gestresste Alltagsleserin)

    | Phase | Emotion | Pain Point / Bedürfnis | Lösung durch App |
    | :--- | :--- | :--- | :--- |
    | **Awareness** | Frustration | Lydia erhält ständig Buchempfehlungen, vergisst diese aber schnell wieder. Ihr analoger Notizzettel ist unübersichtlich und sie verliert den Überblick über ihren ungelesenen Bücherstapel. | Lydia liest online von BookTrack, einer simplen Web-Applikation, die als rein privates, digitales Bücherregal ohne sozialen Druck funktioniert. |
    | **Consideration** | Skepsis | Goodreads erzeugt bei Lydia "Lese-Druck" durch die Community, und ein physisches Bullet Journal raubt ihr zu viel Zeit. Sie fragt sich, ob die neue App wirklich stressfrei ist. | Sie sieht, dass die App komplett auf soziale Vergleiche verzichtet. Die strikte, in Schwarz, Weiß und Grautönen gehaltene Benutzeroberfläche verhindert kognitive Überlastung und rückt die Buchcover in den Fokus. |
    | **App Start** *(Purchase)* | Erleichterung | Lydia sitzt im Zug und möchte schnell eine neue Empfehlung speichern, ohne sich durch komplexe Menüs klicken zu müssen. | Über die einfache horizontale Text-Navigation am oberen Bildschirmrand und den „+Add Book“-Button auf dem Homescreen erfasst sie das neue Buch in Sekundenschnelle. |
    | **Retention** | Motivation | Lydia möchte am Ball bleiben, um angefangene Bücher wirklich zu beenden, und ihre eigenen Leseziele stressfrei verfolgen. | Unter „My Goals“ werden ihre Ziele visuell und emotional greifbar gemacht. Durch einfaches Klicken auf einen Kreis ändert dieser die Farbe, was große Ziele in verdauliche Einheiten bricht und spielerisch anspornt. |
    | **Advocacy** | Stolz | Lydia ist überrascht, wie viele Bücher sie dieses Jahr ohne Druck beendet hat und genießt den Blick auf ihre persönliche Bibliothek. | Das "Book Archive" im Raster-Layout simuliert das befriedigende Gefühl einer gut sortierten Bücherwand und macht den Fortschritt sichtbar. Lydia empfiehlt die App an Freunde, die ebenfalls genervt vom Social-Media-Druck sind. |

- **Mockup:** 
    - URL: https://www.figma.com/site/ZPN2YQtrXU0m0xuofxRcbk/BookTrack?node-id=0-1&t=Dn5xux7RWkdTF7Fb-1

        <table><tr>
        <td><img src=".docs/mockscreens/HomeScreen.png" width="200" alt="Home-Screen"><br><em>Startseite</em></td>
        <td><img src=".docs/mockscreens/CurrentRead.png" width="200" alt="CurrentRead"><br><em>Current Read Ansicht</em></td>
        <td><img src=".docs/mockscreens/Bookmarked.png" width="200" alt="Bookmarked"><br><em>Bookmarked Ansicht</em></td>
        <td><img src=".docs/mockscreens/MyReads.png" width="200" alt="MyReads"><br><em>My Reads Ansicht</em></td>
        <td><img src=".docs/mockscreens/AddBook.png" width="200" alt="AddBook"><br><em>Buch hinzufügen</em></td>
        </tr></table>
        <table><tr>
        <td><img src=".docs/mockscreens/EditBook.png" width="200" alt="EditBook"><br><em>Buch editieren</em></td>
        <td><img src=".docs/mockscreens/BookDetails.png" width="200" alt="BookDetails"><br><em>Buchdetails</em></td>
        <td><img src=".docs/mockscreens/GoalOverview.png" width="200" alt="GoalOverview"><br><em>Ziel Übersicht</em></td>
        <td><img src=".docs/mockscreens/EditGoal.png" width="200" alt="EditGoal"><br><em>Ziel editieren</em></td>
        <td><img src=".docs/mockscreens/AddGoal.png" width="200" alt="AddGoal"><br><em>Ziel hinzufügen</em></td>
        </tr></table>


### 3.4 Prototype

#### 3.4.1. Entwurf (Design)
Beschreibt die Gestaltung und Interaktion.
> **Hinweis:** Hier wird der **Prototyp** beschrieben, nicht das **Mockup**.
- **Informationsarchitektur:** 

    Die Informationsarchitektur ist extrem flach und nutzerzentriert aufgebaut. Das zentrale Navigationskonzept basiert auf einer horizontalen Navigationsleiste (Navbar) am oberen Bildschirmrand, die auf jeder Seite präsent ist. Dadurch sind alle Hauptkategorien („Bookmarked“, „Current Read“, „My Reads“, „Goals“, „Add Book“ und „Settings“) stets nur einen Klick entfernt. Die App verzichtet auf tief verschachtelte Menüs, um den kognitiven Aufwand beim Wechseln zwischen verschiedenen Lesestatus zu minimieren.

- **User Interface Design:** 
    - **Homescreen / Dashboard:** 
        - Dient als Einstiegspunkt mit einem Karussell der aktuell erfassten Buchcover und schnellen Call-to-Action-Buttons („+Add Book“). Bei nicht eingeloggten Nutzern werden hier die Kern-Features ansprechend präsentiert.
            <table><tr>
            <td><img src=".docs/appscreens/HomeScreenNoLogin.png" width="200" alt="Home-Screen1"><br><em>Startseite vor Login</em></td>
            <td><img src=".docs/appscreens/LoginScreen.png" width="200" alt="Login-Screen"><br><em>Login Ansicht</em></td>
            <td><img src=".docs/appscreens/HomeScreenWithLogin.png" width="200" alt="Home-Screen2"><br><em>Startseite nach Login</em></td>
            </tr></table>

    - **Bibliotheks-Ansichten (Bookmarked, My Reads):** 
        - Nutzen ein responsives Grid-Layout (`BookCard.svelte`). Die Buchcover stehen im absoluten Zentrum, ergänzt durch eine interaktive Such- und Filterleiste (nach Genre und Rating) direkt über dem Raster.
            <table><tr>
            <td><img src=".docs/appscreens/Bookmarked.png" width="200" alt="Bookmarked"><br><em>Bookmarked Ansicht</em></td>
            <td><img src=".docs/appscreens/MyReads.png" width="200" alt="MyReads"><br><em>My Reads Ansicht</em></td>
            </tr></table>
   
    - **Current Read, Add Book, Detail- & Editieransichten (`BookLayout.svelte`):** 
        - Diese Seiten verwenden ein Split-Screen-Layout. Auf der linken Seite werden Fakten, Formulare und Ratings strukturiert dargestellt, während die rechte Seite grosszügig dem Buchcover gewidmet ist.
            <table><tr>
            <td><img src=".docs/appscreens/CurrentRead.png" width="200" alt="Current Read"><br><em>Current Read Ansicht</em></td>
            <td><img src=".docs/appscreens/DetailScreen.png" width="200" alt="Detail-Screen"><br><em>Detail Ansicht</em></td>
            <td><img src=".docs/appscreens/EditScreen.png" width="200" alt="Edit-Screen"><br><em>Editier Ansicht</em></td>
            <td><img src=".docs/appscreens/AddBook.png" width="200" alt="AddBook-Screen"><br><em>Buch hinzufügen Ansicht</em></td>
            </tr></table>
   
    - **Goals-Ansicht:** 
        - Leseziele werden in einzelnen Karten dargestellt. Der Fortschritt wird stark visuell über interaktive, abhakbare Kreise (Circle Checkbox) oder durch einen dynamischen Fortschrittsbalken (Progress Bar) kommuniziert.
            <table><tr>
            <td><img src=".docs/appscreens/AddGoal.png" width="200" alt="AddGoal"><br><em>Goal hinzufügen Ansicht</em></td>
            <td><img src=".docs/appscreens/EditGoal.png" width="200" alt="EditGoal"><br><em>Goal editieren Ansicht</em></td>
            <td><img src=".docs/appscreens/GoalOverview.png" width="200" alt="GoalOverview"><br><em>Goal Übersicht</em></td>
            </tr></table>
   
    - **Settings:** 
        - Ein visuelles Dashboard für den Nutzer, das Statistiken und ein dynamisch generiertes Pie-Chart der gelesenen Genres anzeigt. Zusätzlich bietet die Einstellungsseite zentrale Account-Funktionen: Nutzer können ihre komplette Bibliothek als CSV-Datei exportieren (Data Management), ihr Passwort sicher aktualisieren (Change Password) und sich aus der aktiven Sitzung ausloggen (Account Actions).
            <table><tr>
            <td><img src=".docs/appscreens/Statistics.png" width="200" alt="Statistics"><br><em>Statistiken</em></td>
            <td><img src=".docs/appscreens/FurtherActions.png" width="200" alt="FurtherActions"><br><em>Account-Funktionen</em></td>
            <td><img src=".docs/appscreens/LogOut.png" width="200" alt="LogOut-Screen"><br><em>LogOut Ansicht</em></td>
            </tr></table>

- **Designentscheidungen:**
    - **Monochromer Minimalismus:** 
        - Die Benutzeroberfläche ist strikt in Schwarz, Weiss und dezenten Grautönen gehalten (unterstützt durch Bootstrap-Klassen). Dies verhindert eine visuelle Überlastung und sorgt dafür, dass die bunten Buchcover optimal zur Geltung kommen.
    - **Visuelle Hierarchie & Kontrast:** 
        - Primäre Aktionen (z. B. "Save", "+Add Book") sind als massive schwarze Buttons gestaltet. Sekundäre oder destruktive Aktionen (z. B. "Cancel", "Delete") heben sich als weisse Buttons mit Kontur (Outline) ab. Das lenkt das Auge intuitiv.
    - **Sicherheits-Modals:** 
        - Destruktive Aktionen (Buch löschen, Ziel löschen) oder finale Aktionen (Buch als beendet markieren, Logout) lösen stets ein modales Pop-up (`Modal.svelte`) aus. Dies verhindert versehentliche Klicks und Frustration.

    Weitere Designentscheidungen sind im Dokument unter Kapitel 3.3 Abschnitt "End-to-End-Ablauf" beschrieben.


#### 3.4.2. Umsetzung (Technik)
Fasst die technische Realisierung zusammen.
- **Technologie-Stack:** 

    Als Meta-Framework kommt SvelteKit zum Einsatz, welches sowohl das Frontend-Routing als auch die Backend-Schnittstellen bereitstellt. Weitere Bibliotheken wurden eingebunden:
            
     - **Styling:** Bootstrap 5 (eingebunden via CDN für schnelle, responsive Layouts und Basis-Komponenten) ergänzt durch massgeschneidertes CSS.

     - **Datenbank:** MongoDB (NoSQL-Datenbank, angebunden über den nativen `mongodb` Node-Treiber).

     - **Authentifizierung:** Custom Cookie-based Session-Handling mit `bcryptjs` zur sicheren Passwort-Verschlüsselung.
        

- **Tooling:** 

    - **IDE:** Visual Studio Code.

    - **Versionskontrolle:** Git.

    - **Local Environment:** Vite (als extrem schneller Development-Server und Bundler).
    
    - **Hosting/Deployment:** Netlify (Serverless Functions).


- **Struktur & Komponenten:** 
    - **Seiten/Routen:**

        Die App nutzt das dateibasierte Routing von SvelteKit:

        ```
        src/
        ├── app.html                 # Basis HTML-Template inkl. Bootstrap CDN
        ├── hooks.server.js          # Auth-Guard: Session-Cookie prüfen, User in locals setzen und geschützte Routen sichern
        ├── lib/
        │   ├── assets/
        │   │   └── favicon.png       # App-Favicon
        │   ├── components/
        │   │   ├── BookCard.svelte   # Grid-Ansicht für Bücher inkl. Such- und Filterlogik (nach Titel, Autor, Genre, Rating)
        │   │   ├── BookLayout.svelte # Wiederverwendbares Split-Screen-Layout für Buchdetails und Formulare
        │   │   ├── GoalForm.svelte   # Formular-Komponente für das Erfassen und Editieren von Lesezielen
        │   │   └── Modal.svelte      # Wiederverwendbare Overlay-Komponente für Sicherheitsabfragen
        │   └── db.js                 # MongoDB-Verbindung und Funktionen für DB-Abfragen (Books, Goals, Users)
        └── routes/
            ├── +layout.server.js     # Gibt den authentifizierten User (locals) an das Frontend weiter
            ├── +layout.svelte        # Root-Layout: Enthält die persistente obere Navigationsleiste (Navbar)
            ├── +page.server.js       # Lädt Bücher für das Karussell und handhabt Login/Registrierung via bcryptjs
            ├── +page.svelte          # Homescreen: Auth-Modal, Feature-Übersicht (ausgeloggt) oder Buch-Karussell (eingeloggt)
            ├── style.css             # Globale Styles (Farben, Buchcover-Grössen und Hover-Effekte)
            ├── bookmarked/           # Übersicht der Wunschliste (Ansicht der Bücher mit Status "bookmarked")
            ├── currentread/          # Aktuell gelesene Bücher inkl. "Finish"-Funktion (Status "reading")
            ├── myreads/              # Buch-Archiv für alle bereits gelesenen Bücher (Status "read")
            ├── books/
            │   ├── addbook/          # Formular zum Erfassen neuer Bücher inkl. Cover-Bild-Upload (Base64)
            │   ├── bookinfodemo/     # Detailansicht eines spezifischen Buches inkl. Lösch-Funktion
            │   └── editbook/         # Formular zum Bearbeiten bestehender Buchinformationen
            ├── goals/                # Übersicht der eigenen Leseziele inkl. visueller Fortschrittsanzeige (Gamification)
            │   ├── addgoal/          # Route zum Erstellen eines neuen Leseziels
            │   └── editgoal/         # Route zum Bearbeiten eines bestehenden Leseziels
            └── settings/             # Profil-Dashboard mit Lese-Statistiken (Pie-Chart), Passwortänderung und Logout
                └── export/           # GET-Route (+server.js) für den CSV-Download aller gespeicherten Bibliotheksdaten
         ```   

    - **State/Stores (Svelte 5 Runes):**

        Die Applikation verwendet konsequent die neuen Svelte 5 Runes zur Zustandsverwaltung.

        - `$state` wird für lokale UI-Zustände genutzt (z. B. Formulareingaben, Modal-Sichtbarkeit, Suchbegriffe).

        - `$derived` berechnet reaktiv gefilterte Buchlisten, Animation-Speeds oder Genre-Statistiken basierend auf den aktuellen `$state`-Werten.

        - `$effect` wird eingesetzt, um URL-Parameter nach erfolgreichen Aktionen (wie `?success=true`) im Hintergrund aufzuräumen oder automatische Datums-Werte zu setzen, wenn ein Buch-Status auf "read" geändert wird.

        - `{@render children()}` und Snippets (`#snippet`) ermöglichen hochflexible, wiederverwendbare Layouts.


    - **Wichtige Komponenten (`$lib/components`):**

        - `BookCard.svelte`: Kapselt die komplexe Such- und Filterlogik (Titel, Autor, Genre, Rating) sowie die Grid-Darstellung der Buchcover.

        - `BookLayout.svelte`: Eine Wrapper-Komponente für die Split-Screen-Ansicht, die sowohl in reinen Lese-Ansichten als auch in Formularen (mit Bindings für das Star-Rating) genutzt wird.

        - `GoalForm.svelte`: Zentralisiert die Formularlogik für das Erstellen und Bearbeiten von Lesezielen.

        - `Modal.svelte`: Eine wiederverwendbare Overlay-Komponente für sämtliche Sicherheitsabfragen.

- **Daten & Schnittstellen:** 
    - **Datenbank-Anbindung:** 
        - Die Datei `lib/db.js` exportiert Funktionen (wie `getBooks`, `getGoals`, `getUsers`), die eine Singleton-Verbindung zur MongoDB herstellen. 

        - In der MongoDB gibt es 3 Collections:
            1. books (alle hinzugefügten Bücher)

            2. goals (alle hinzugefügten Ziele)

            3. users (Benutzername + bcrypt-Passwort-Hash)

    - **Datenabruf:** 
        - In den jeweiligen `+page.server.js`-Dateien werden die Daten in der `load`-Funktion serverseitig abgerufen, anhand der `userId` aus der Session gefiltert und dem Frontend zur Verfügung gestellt.

    - **Datenmanipulation (SvelteKit Form Actions):**
        - CRUD-Operationen (Create, Read, Update, Delete) werden ausschliesslich über serverseitige Actions abgewickelt (z. B. `?/create`, `?/finishBook`, `?/incrementGoal`). 

    - **Progressive Enhancement:**
        - Im Frontend werden Formulare mit der Direktive `use:enhance` ausgestattet. Dies sorgt dafür, dass Daten asynchron via JavaScript an den Server gesendet werden, was störende Page-Reloads verhindert und ein reibungsloses App-Erlebnis schafft.

- **Deployment:**  
    - Produktive URL (nach fixes): https://boooktrack.netlify.app/

- **Besondere Entscheidungen:**  
    - **Bild-Uploads als Base64:** 

        Anstatt eine komplexe externe Cloud-Storage-Lösung (wie AWS S3 oder Cloudinary) für die Buchcover zu integrieren, konvertiert die Form-Action (`books/addbook/+page.server.js`) hochgeladene Bilder in Base64-Strings und speichert diese direkt im Dokument in der MongoDB.

        *Trade-off:* Dies führt zu grösseren Datenbank-Dokumenten, vereinfacht aber die Architektur und das Deployment für diesen Prototyp massiv.

    - **Custom Authentication:** 

        Es wurde bewusst auf Drittanbieter wie Auth0 oder Firebase verzichtet. Die App verifiziert Nutzer über eigene Server-Hooks (`hooks.server.js`), prüft Session-Cookies und schützt Routen serverseitig (`isProtected`). Dies garantiert die im Konzept geforderte absolute Daten-Privatsphäre.

### 3.5 Validate
- **URL der getesteten Version** 
    - Test URL (vor fixes): https://booktracktest.netlify.app/

- **Ziele der Prüfung:** 

    Folgende Fragen wurden bei jeder Testdurchführung beantwortet:

    1. Was hat Ihnen an der App am besten gefallen?

    2. Was hat Sie am meisten gestört oder verwirrt?

    3. Welche Funktion hat gefehlt, die Sie sich wünschen würden?

    4. Würden Sie die App wirklich verwenden? Warum / warum nicht?


- **Vorgehen:** 
    - Das Vorgehen erfolgte On-Site.

    - Zuerst wurde moderiert das Konzept erklärt und danach durfte die Testperson unmoderiert sich durch die Aufgaben testen. 

    - Von Bedeutung war das laute vor sich hin Denken der jeweiligen Testperson um Gedanken abzufangen

    - Bei Fragen durfte sich die Testperson jederzeit melden und diese wurden ebenfalls dokumentiert

    - Zum Schluss wurden vorformulierte Feedbackfragen beantwortet und anschliessend im Feedback-Grid erfasst.

- **Stichprobe:** 

    Getestet wurde in der Kleinklasse mit zwei unabhängigen Personen, welche meine Applikation zuvor noch nicht gesehen oder getestet haben.

    Die Ausgefüllten Tests sind unter folgenden Links abrufbar:

    [Test 1 öffnen](./.docs/testing/TEST1.md)

    [Test 2 öffnen](./.docs/testing/TEST2.md)

- **Aufgaben/Szenarien:** 
    
    Die Ausformulierten Aufgaben sind unter folgender Vorlage beschrieben:

    [Testvorlage öffnen](./.docs/testing/TESTVORLAGE.md)

- **Kennzahlen & Beobachtungen:** 

    - **Zeitbedarf:**
    
        Insgesamt benötigte ich für beide Testdurchführungen inklusive der anschliessenden Dokumentation ca. 30 Minuten.

    - **Erfolgsquote:**

        Alle Tests konnten erfolgreich durchgeführt werden.

        Die Erfolgsquote liegt bei: 100%

    - **Qualitative Findings:**

        1. Im Editiermodus kann man das Rating nicht fixieren.

        2. Nutzer wünschen sich bei den Goals einen Button um den Fortschritt einfacher zu ändern. 

        3. Zudem soll bei einem beendetem Goal dies auch als solches gekenntzeichnet werden.

        4. Auf der Startseite wünschen sich Nutzer das Karousel auch manuell zu schieben.

        5. Nutzer fänden es eine gute Funktion, dass man in den Settings unter den "My Library Stats" mit klicken auf die Zahlen direkt zur entsprechenden Seite (Z.B. "My Reads" weitergeleitet wird). Zudem war es für Nutzer verwirrend, dass es bei den bookmarks als: "On Watchlist" notiert war und sich somit ein neues Wording gewünscht hat.


- **Zusammenfassung der Resultate:** 

    Beide Testpersonen absolvierten alle Szenarien erfolgreich. Im Grossen und Ganzen konnte beobachtet werden, dass die Applikation enorm intuitiv bedienbar ist; das User-Interface war universell verständlich und die grundsätzliche Navigation gab keinen Grund zur Verwirrung. 
    
    Es wurden lediglich ein kritischer Bug (Rating) sowie vier spezifische Optimierungspotenziale in den Bereichen Micro-Interactions und Wording identifiziert.    
    Diese Punkte bilden die Grundlage für die finale Überarbeitung.


- **Abgeleitete Verbesserungen:** 

    | Priorität | Problem / Wunsch | Begründung |
    |-----------|------------------|------------|
    | Hoch | Fehlerhafte Buch-Bewertung (Rating) reparieren | Behebt einen kritischen Bug im Editiermodus. Da das Bewerten von Büchern eine der definierten Kernfunktionalitäten der App ist, blockiert dieser Fehler den primären User-Workflow massgeblich. |
    | Hoch | Quick-Update Button für Goals implementieren | Reduziert die Reibung (Friction) bei der Fortschritts-Aktualisierung. Da Motivation und Ziel-Tracking die zentralen Alleinstellungsmerkmale (USPs) der App sind, muss das Updaten so niederschwellig wie möglich sein, um die Nutzer-Gewohnheit nicht zu stören. |
    | Hoch | Karussell-Steuerung (Pfeile) für Desktop auf der Startseite | Stellt die essenzielle Usability-Heuristik "Nutzerkontrolle und Freiheit" sicher. Es eliminiert den Frustfaktor, beim Durchsuchen der Bibliothek passiv auf ein bestimmtes Buch warten zu müssen. |
    | Mittel | Visuelles "Completed"-Badge für 100% erreichte Goals | Schliesst die Gamification-Schleife ab. Erst durch ein klares, positives visuelles Feedback wird das Erfolgserlebnis beim Erreichen eines Leseziels für den Nutzer wirklich spürbar. |
    | Tief | Wording in Stats anpassen ("On Shelf") & Werte anklickbar machen | Steigert die Effizienz der Navigation (Shortcuts direkt in die Listen) und sorgt für ein konsistenteres Wording innerhalb der App. Es ist kein Blocker, rundet das Nutzererlebnis aber sinnvoll ab. |


## 4. Erweiterungen [Optional]
Dokumentiert Erweiterungen über den Mindestumfang hinaus.
> **Hinweis:** Jede Erweiterung ist separat nach dem folgenden Schema zu beschreiben.

### 4.1 Lokaler Bild-Upload für Buchcover  
- **Beschreibung & Nutzen:** _[Was wurde erweitert? Warum?]_
 Anstatt Nutzer zu zwingen, externe Bild-URLs für Buchcover im Internet suchen und kopieren zu müssen, bietet die App die Möglichkeit, direkt eigene Bilder (z.B. vom Smartphone oder PC) hochzuladen. Im Frontend gibt es dafür eine interaktive Vorschau, die über URL.createObjectURL sofort das gewählte Bild im Platzhalter anzeigt. Die Bilder werden nicht lokal sondern in der MongoDB gespeichert. Sofern kein Cover hinzugefügt wird gibt es ein Platzhalterbild namens "The Spaceholder".


- **Wo umgesetzt:** _[Wie und wo wurde es gemacht? Frontend, Backend, Datenbank?]_

    - Frontend:

        Implementierung eines <input type="file"> in der Datei books/addbook/+page.svelte mit einem reaktiven Event-Handler onchange={handleFileChange} zur Vorschaugenerierung. 

    - Backend:

        In der Form-Action in books/addbook/+page.server.js wird die Datei aus den FormData extrahiert. xxxx

    - Datenbank:

        In der MongoDB wird anschließend xxxxxx

- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_ 

- **Aus Evaluation abgeleitet?:** _[Wurde diese Erweiterung als Folge eines in der Evaluation identifizierten Issues implementiert?]_  
xxx

### 4.2 Suchleiste für Titel und Autor sowohl als auch Filter für Genre und Rating
- **Beschreibung & Nutzen:** _[Was wurde erweitert? Warum?]_

- **Wo umgesetzt:** _[Wie und wo wurde es gemacht? Frontend, Backend, Datenbank?]_  

- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_ 

- **Aus Evaluation abgeleitet?:** _[Wurde diese Erweiterung als Folge eines in der Evaluation identifizierten Issues implementiert?]_ 

### 4.3 Eigene Benutzerlogins
- **Beschreibung & Nutzen:** _[Was wurde erweitert? Warum?]_

- **Wo umgesetzt:** _[Wie und wo wurde es gemacht? Frontend, Backend, Datenbank?]_  

- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_ 

- **Aus Evaluation abgeleitet?:** _[Wurde diese Erweiterung als Folge eines in der Evaluation identifizierten Issues implementiert?]_ 

> Das folgende **Beispiel** wurde bewusst kurz gehalten. Erweiterungen dürfen auch ausführlicher beschrieben werden.

### 4.4 Beispiel aus README.md Tabelle nach Kategorien filtern
- **Beschreibung & Nutzen:** Tabelle X kann nach Kategorie gefiltert werden, weil User typischerweise nur an einer bestimmten Kategorie interessiert sind.  
- **Wo umgesetzt:** 
  - **Frontend:** Tabelle mit Dropdown in Datei ...
  - **Backend:** Form Action ... in Datei ...
  - **Datenbank:** MongoDB-Query in Datei ...
- **Referenz:** Screenshot in Kap. x.y
- **Aus Evaluation abgeleitet?:** Ja, Issue x.y

## 5. Projektorganisation [Optional]
- **Repository & Struktur:**  
    - URL: https://github.com/Stermmur/booktrack

    - Struktur gemäss Kapitel 3.4.2.

- **Issue-Management & Planung:** 

    Für die Aufgabenplanung und das Tracking von Fehlern wurde ein sehr direkter, pragmatischer Ansatz gewählt. Anstatt ein komplexes, digitales Ticket-System (wie GitHub Issues oder Jira) aufzusetzen, wurden neue Funktionen, Feedback aus den Nutzertests und identifizierte Bugs in persönlichen Notizen und handschriftlichen To-Do-Listen festgehalten. Die Bearbeitung erfolgte iterativ und "hands-on": Auffälligkeiten wurden oft direkt während der Entwicklung oder unmittelbar nach Testdurchläufen analysiert und zeitnah im Code behoben.

- **Commit-Praxis:** 

    Bei der Versionskontrolle wurde auf einen sinnvollen und logischen Rhythmus geachtet. Code wurde immer dann committet, wenn ein bestimmtes Feature, ein Design-Update oder ein zusammenhängender Entwicklungsabschnitt vollständig abgeschlossen und lokal getestet war. Dies sorgte für eine aufgeräumte Historie, in der jeder Commit einen runden und funktionierenden Zwischenstand der Applikation repräsentiert.

- **Deployment-Workflow:**

    Das Projekt wird für die Live-Umgebung über Netlify gehostet. Um die volle Kontrolle über die veröffentlichte Version zu behalten, wurde bewusst auf ein vollautomatisiertes Deployment bei jedem Code-Push verzichtet. Stattdessen werden Deployments manuell angestossen, sobald ein stabiler Meilenstein erreicht wurde. Dies stellte sicher, dass die produktive URL jederzeit eine verifizierte und fehlerfreie Version der Applikation ausliefert.
    

## 6. KI-Deklaration
Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools
- **Eingesetzte Tools**: 
    1. Google Gemini Pro¨

    2. ChatGPT (Open-AI)

    Es wurde kein weiteres KI-Tool eingesetzt.

- **Zweck & Umfang**:

    Künstliche Intelligenz wurde für grundlegende Textentwürfe, Konzept-Feedback und als essenzielles Werkzeug für das tiefgreifende Debugging während der Entwicklungs- und Deployment-Phase genutzt. KI-Modelle fungierten als "Senior Developer" bei der Code-Implementierung, der Analyse kryptischer SvelteKit/Vite Build-Fehler und gaben Hinweise zur sauberen Strukturierung der MongoDB-Verbindung. Gemini generierte in diesem Zusammenhang auf Basis klarer Anforderungen grosse Teile des Codes, welches jedoch stets geprüft und bei Bedarf angepasst wurde.


- **Eigene Leistung (Abgrenzung):** 

    Die gesamte grundlegende Idee, die Handskizzen, die Systemarchitektur (Trennung von Status-Seiten), die Definition der Funktionen (Genres, Filter) sowie das komplette UI-Design (Figma/Design-Tool) sind eigenständig erstellte Leistungen. Die robuste CRUD-Architektur, der Einsatz von Svelte 5 Runes ($state, $derived) und das Verfassen der serverseitigen +page.server.js Load-Funktionen wurden konzeptionell eigenständig entwickelt und umgesetzt. Ebenfalls wurde der Usability-Test ohne KI aufgesetzt und durchgeführt.

### 6.2 Prompt-Vorgehen

- **Urheberrecht/Quellen:**

    Es wurde kein fertiger Code aus Drittquellen übernommen. 
    Da das Projekt zudem für den Privaten Gebrauch im engsten Umkreis genutz wird, gibt es in der Schweiz keine Urheberrechtlichen Probleme, wenn User Buch-Cover aus dem Internet für ihre persönliche Library verwenden. 
    Für das "admin"-Login wurde explizit mit Gemini generierten Daten und Coverbilder gearbeitet.

- **Promting-Vorgehen:**

    Es wurde ein stark iterativer und dialogorientierter Prompting-Ansatz verfolgt. Anstatt ganze Features generieren zu lassen, wurde die KI spezifisch für Problemlösungen eingesetzt. 

    Typisches Vorgehen:

    1. Code-Dateien in den Anhang hinzufügen

    2. Klare Anforderungen beschreiben

    3. Prompt ausführen

    4. Generierten Code lesen und in den entsprechenden Abschnitt einfügen

    5. Bei Bedarf promt verfeinern bzw. Anforderung genauer deklarieren und somit itertiv zur Lösung gelangen

- **Beispiel:**

    Ein signifikantes Beispiel war das Netlify-Deployment. Der Build-Prozess schlug mit einem kryptischen SyntaxError: "Illegal return statement" im Vite SSR-Compiler fehl. Die KI wurde angewiesen, die Terminal-Logs (ausgeführt mit npx vite build --debug) systematisch zu analysieren. Wir iterierten durch verschiedene Hypothesen (z.B. fehlerhafte CommonJS Imports der mongodb Library in der vite.config.js), bevor die KI durch sukzessive Code-Reviews den Fehler in einer verwaisten Top-Level try/catch Block in der Datei goals/[goal_id]/+page.server.js identifizieren konnte. Die KI lieferte dabei nicht nur den Fix, sondern erklärte das Konzept, warum Top-Level-Returns in Node ESM-Modulen nicht erlaubt sind.


### 6.3 Reflexion
- **Nutzen:**

    Die Nutzung der KI hat den Prozess der Konzeptionsphase, der Problemlösung und der Dokumentation erheblich beschleunigt und qualitativ aufgewertet. Besonders wertvoll war die Fähigkeit der KI, kontextbezogen auf Svelte 5 und Vite Build-Spezifika einzugehen, was stundenlanges manuelles Suchen in StackOverflow-Foren ersparte.

- **Grenzen:**

    Die größte Erkenntnis war jedoch, dass die KI einem nicht die konzeptionellen architektonischen Entscheidungen abnimmt. Sie fungiert hervorragend als Strukturierungshilfe für bereits vorhandene Gedanken und als forensisches Tool zur Fehlersuche, stößt aber an ihre Grenzen, wenn sie den Gesamtzusammenhang eines hochgeladenen Projekt-Baums verlieren würde. Eine saubere, selbst erarbeitete Code-Struktur (wie die Aufteilung in Layouts und Komponenten) bleibt unerlässlich, damit die KI überhaupt effektiv helfen kann.

- Qualitätssicherung:

    KI generierten Code kann und soll nicht blind übernommen werden sondern muss stets überprüft und validiert werden.


## 7. Anhang

Dieses Kapitel enthält weiterführende Links und Dokumente, die für das Verständnis und die Nachvollziehbarkeit des Projekts relevant sind.

### 7.1 Externe Ressourcen & Lizenzen
- **Framework & Libraries:**
    - [SvelteKit Dokumentation](https://kit.svelte.dev/)

    - [Bootstrap 5 (via CDN)](https://getbootstrap.com/)

    - [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/)

    - [Bcrypt.js (NPM)](https://www.npmjs.com/package/bcryptjs)

- **Bildmaterial:**
    - Sämtliche verwendeten Buchcover in den Test-Accounts sind Gemini generierte bilder. Da die Applikation für den reinen Eigengebrauch (bzw. für Studienzwecke und den engsten Umkreis) entwickelt wurde und keine Monetarisierung stattfindet, greift die Schrankenbestimmung für den privaten Gebrauch (Art. 19 URG Schweiz).

    - Als Platzhalter-Bild (sofern kein Cover hochgeladen wird) wurde ein neutrales, Gemini generiertes Bild namens "The Spaceholder" verwendet.

### 7.2 Projekt-Links (URLs)
- **Live-Applikation (Produktivumgebung):** [https://boooktrack.netlify.app/](https://boooktrack.netlify.app/)

- **Test-Umgebung (Usability-Testing):** [https://booktracktest.netlify.app/](https://booktracktest.netlify.app/)

- **Figma Prototyp (Mockups & Workflows):** [BookTrack auf Figma](https://www.figma.com/site/ZPN2YQtrXU0m0xuofxRcbk/BookTrack?node-id=0-1&t=Dn5xux7RWkdTF7Fb-1)

### 7.3 Interne Dokumentation (Referenzen)
Die detaillierten Ausarbeitungen der Konzeptions- und Validierungsphase sind in separaten Markdown-Dateien im `.docs`-Ordner (bzw. als separate Abgaben) hinterlegt:

- **Ideenfindung (Skizzen):** `/.docs/SkizzePrototyping.md`

- **Design-Entscheide & Workflows:** `/.docs/PrototypMitFigma.md`

- **Usability-Test Leitfaden:** `/.docs/testing/TESTVORLAGE.md`

- **Usability-Test Protokoll 1:** `/.docs/testing/TEST1.md`

- **Usability-Test Protokoll 2:** `/.docs/testing/TEST2.md`

- **App- & Mockup Screenshots:** Sämtliche in dieser Dokumentation gezeigten Screenshots der Applikation sowie die Figma-Mockups sind Eigenleistungen und geistiges Eigentum des Autors. `/.docs/testing/appscreens.md` & `/.docs/testing/mockscreens.md`