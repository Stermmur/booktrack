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

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

<!-- WICHTIG: DIE KAPITELSTRUKTUR DARF NICHT VERÄNDERT WERDEN! -->

<!-- Diese Vorlage ist für eine README.md im Repository gedacht. Abschnitte mit [Optional] können weggelassen werden, wenn in den Übungen nichts anderes verlangt wird. -->

## 1. Ausgangslage
Kurz beschreiben, welches Problem adressiert wird und welches Ergebnis angestrebt ist. Wem nützt die Lösung, wer ist beteiligt oder betroffen?
- **Problem:** _[Das Problem ist identifiziert, verständlich beschrieben und optional mit Beispielen illustriert]_ 

Lesen ist für viele Menschen ein beliebtes Hobby, doch im stressigen Alltag fällt es oft schwer, den Überblick über Buchempfehlungen und den eigenen Lesefortschritt zu behalten. Viele Leserinnen und Leser wissen zwar, welche Bücher sie interessieren, verlieren jedoch schnell den Überblick darüber, welche Titel sie bereits gelesen haben, noch lesen möchten oder die Motivation für ein angefangenes Buch aufrechtzuerhalten.

Ein zentrales Problem besteht darin, dass bestehende Lösungen wie einfache Notizen oder Textlisten diesen Bedarf nur unzureichend abdecken. Sie sind häufig unübersichtlich, wenig intuitiv und bieten kaum Möglichkeiten zur Strukturierung, Filterung oder gezielten Suche.

Gleichzeitig sind viele bestehende Plattformen öffentlich oder stark auf soziale Interaktion ausgelegt. Dadurch fehlt oft ein persönlicher, privater Raum, in dem Leserinnen und Leser ihre Gedanken, Fortschritte und Interessen unabhängig von anderen festhalten können.

Das Problem liegt somit nicht im Lesen selbst, sondern in der fehlenden Unterstützung bei der Organisation, Motivation und Privatsphäre. Bestehende analoge oder einfache digitale Lösungen sind statisch, während viele moderne Plattformen zu öffentlich und sozial ausgerichtet sind. Es fehlt eine Lösung, die Übersichtlichkeit, visuelle Darstellung, persönliche Nutzung und motivierende Funktionen in einem privaten Rahmen kombiniert.

- **Ziele:** _[stichwortartig oder einige Sätze]_ 
--> Entwicklung einer modernen und benutzerfreundlichen Web-Applikation als „digitales Bücherregal“ zur einfachen Verwaltung der persönlichen Bibliothek.
--> Schaffung einer übersichtlichen und visuell ansprechenden Darstellung durch Buchcover zur besseren Wiedererkennung von Büchern.
--> Ermöglichung einer intuitiven und flexiblen Kategorisierung/Filterung (nach Titel, Autor, Genre und Rating)
--> Unterstützung der Nutzer beim Behalten des Überblicks über gelesene und geplante Bücher.
--> Förderung der Lesemotivation durch Funktionen wie Fortschrittsverfolgung.
--> Bereitstellung einer privaten Nutzungserfahrung ohne sozialen Druck oder öffentliche Bewertungssysteme (im Gegensatz zu Plattformen wie Goodreads).

- **Primäre Zielgruppe:** _[kurz beschreiben]_  
Hobby-Leser & Buchliebhaber:
Diese Zielgruppe liest regelmäßig aus Interesse und möchte Bücher bewerten, kommentieren und übersichtlich nach Genres organisieren. Sie hat oft viele Buchempfehlungen, verliert jedoch schnell den Überblick, da bestehende Listen unstrukturiert und schwer durchsuchbar sind.

Zielorientierte Leser (z.B. Studierende):
Diese Nutzer lesen mit klaren Zielen und benötigen eine strukturierte Übersicht über ihren Lesefortschritt. Aufgrund eines stressigen Alltags lesen sie unregelmäßig und verlieren häufig den Überblick, weshalb sie von Erinnerungen und Fortschrittsanzeigen profitieren.

Eltern & dessen Kinder:
Diese Zielgruppe möchte das Lesen gemeinsam gestalten, Fortschritte verfolgen und die Motivation der Kinder fördern. Im hektischen Familienalltag fällt es jedoch schwer, eine feste Leseroutine zu etablieren, weshalb visuelle Anreize und spielerische Elemente besonders wichtig sind.

- **Weitere Stakeholder [Optional]:** _[z. B. Verwaltung, Geschäftsleitung]_  
Schulen & Bildungseinrichtungen:
Lehrkräfte oder Schulen haben Interesse daran, Lesemotivation zu fördern und Fortschritte nachvollziehbar zu machen, insbesondere bei Kindern und Jugendlichen.

Werbepartner & Kooperationspartner:
Falls die Lösung monetarisiert wird, könnten Partner (z. B. Buchplattformen oder Bildungsanbieter) Interesse haben, ihre Inhalte gezielt zu platzieren.

Technologie- und Plattformanbieter:
Unternehmen, die Infrastruktur oder Schnittstellen bereitstellen (z. B. für Buchdaten, APIs), sind wichtige Stakeholder, da die Lösung technisch von ihnen abhängig sein könnte.


## 2. Lösungsidee
Beschreibt die Lösungsidee.
- **Kernfunktionalität:** _[Workflows kurz nennen und optional illustrieren]_ 
--> Eine Web-Applikation, in der Nutzer Bücher hinzufügen, editieren, löschen und in Kategorien einteilen können (Current Read, Bookmarked & My Reads). 
--> Jeder Nutzer hat seinen eigenen Account und kann somit seine persönliche "Library" pflegen.
--> Bücher werden primär als Bilder-Raster (Cover) mit Titel, Autor und Genre dargestellt. 
--> Nutzer können die Liste über eine Suchleiste sowie über Genre-Tags(Romance, Thriller, Fantasy etc.) und Ratings durchsuchen.
--> Es gibt eine Seite in der man Reading-Goals erfassen und nachverfolgen kann.

User-Journey (ein exemplarischer Workflow):
1. Nutzer öffnet die Web-App und loggt sich in sein Profil ein
2. Fügt ein neues Buch hinzu via +Add Book Button (Required: Titel, Genre & Status. Optional: Cover, Autor, Rating, Release-Datum, Notizen und Abschluss-Datum).
4. Sieht das Buch direkt in der entsprechend Katogerisierten Seite des Status (Bookmarked, Current Read oder My Reads).
5. Aktualisiert Fortschritt, editiert die Buchinformationen oder verschiebt es zu einem anderen Status.

- **Annahmen [Optional]:** _[welche Hypothesen werden geprüft?]_
--> Nutzer bevorzugen eine visuelle Navigation (Bilder) gegenüber reinen Textlisten. 
--> Eine aufgeräumte, minimalistische Oberfläche lenkt weniger ab und rückt die Bücher in den Fokus.
--> Gamification-Elemente (wie das Füllen von Kreisen bei erreichten Zielen) steigern die Rückkehrrate (Retention) der Nutzer.

- **Abgrenzung [Optional]:** _[Was gehört explizit nicht zum Umfang?]_
Nicht zum Umfang dieses Projekts gehören: 
--> Social-Media-Funktionen (wie Freunde hinzufügen oder Listen teilen).
--> Eine integrierte Lese-Funktion (es können keine E-Books in der App gelesen werden).
--> Direkte Kauf-Links zu Buchhandlungen.


## 3. Vorgehen & Artefakte
Die Durchführung erfolgt phasenbasiert; dokumentieren Sie die wichtigsten Ergebnisse je Phase.

### 3.1 Understand & Define
- **Zielgruppenverständnis:** _[Problemraumanalyse, Recherche, (Proto-)Personas]_
Analyse bestehender Lösungen (wie Goodreads oder analoge Bullet Journals):
--> Es zeigte sich, dass viele Apps zu überladen sind. Die Zielgruppe wünscht sich einen simplen, persönlichen Raum nur für die eigene Buchverwaltung ohne zwingenden Social-Media-Aspekt.

- **Wesentliche Erkenntnisse:** _[Stichpunkte]_
    - Visuelle Elemente (Buchcover) sind für das Gehirn schneller erfassbar als Text.
    - Das Hinzufügen von Büchern muss schnell und unkompliziert sein (z.B. durch den "+Add Book" Button).
    - Filtern nach Genre und Titel sind wichtige Kernfunktionen.

### 3.2 Sketch
- **Variantenüberblick:** _[kurz]_

- **Skizzen:** _[Mehrere Varianten; Unterschiede kurz dokumentieren.]_

### 3.3 Decide
- **Gewählte Variante & Begründung:** _[Entscheidkriterien nennen]_  
- **End-to-End-Ablauf:** _[Beschreibung inkl. User Journey Map]_  
- **Mockup:** _[URL, z. B. Figma; Screenshots mit kurzen Beschreibungen]_  

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)
Beschreibt die Gestaltung und Interaktion.
> **Hinweis:** Hier wird der **Prototyp** beschrieben, nicht das **Mockup**.
- **Informationsarchitektur:** _[z. B. Seiten/Navigation: Konzept, nicht die technische Umsetzung]_

- **User Interface Design:** _[wichtige Screens: Screenshots mit kurzen Erläuterungen]_  

- **Designentscheidungen:** _[zentrale Entscheidungen und Begründungen]_


#### 3.4.2. Umsetzung (Technik)
Fasst die technische Realisierung zusammen.
- **Technologie-Stack:** _[SvelteKit, Bibliotheken falls genutzt]_
--> Als Meta-Framework kommt SvelteKit zum Einsatz, welches sowohl das Frontend-Routing als auch die Backend-Schnittstellen bereitstellt. 
--> Folgende Bibliotheken wurden verwendet:
    - xxx
    - xxx
--> Für das Styling wird Bootstrap 5 über CDN eingebunden. 
--> Als Datenbank dient MongoDB.

- **Tooling:** _[IDE/Erweiterungen, lokale/Cloud-Tools; den Einsatz von KI beschreiben Sie im Kapitel **KI-Deklaration**]_ 
 --> Entwickelt wurde mit Visual Studio Code, verwaltet über Git. --> Als lokaler Development-Server und Bundler diente Vite.
 --> Das finale Hosting läuft über Netlify Serverless Functions.

- **Struktur & Komponenten:** _[Seiten, Routen, State/Stores, wichtige Komponenten]_
Seiten:

Routen:

State/Stores:
Das State-Management im Frontend basiert komplett auf den modernsten Svelte 5 Runes ($state, $derived, $effect, $props). Dies ermöglichte eine sehr schlanke Reaktivität, beispielsweise für Suchfilter, das automatische Setzen von Enddaten oder das Rendern von UI-Snippets ({@render children()})

Wichtige Komponenten:
Die App nutzt stark wiederverwendbare UI-Komponenten im $lib/components-Ordner, um Code-Duplizierung zu vermeiden (z.B. BookCard.svelte für das Grid, BookLayout.svelte als Ansicht für Detailseiten und Formulare, GoalForm.svelte für die Zielerfassung) und Modal.svelte für die Pop-Up Fenster.

- **Daten & Schnittstellen:** _[Wie werden Daten gespeichert, verwaltet, abgerufen?]_
 Die Datenbankanbindung erfolgt extrem direkt und performant über den nativen mongodb-Node-Treiber in der zentralen Datei lib/db.js. 
 --> SvelteKit Form Actions (?/create, ?/deleteBook, ?/finishBook) verarbeiten die Datenübermittlung vom Frontend ans Backend serverseitig. 
 --> use:enhance wird im Frontend genutzt, um diese Requests nahtlos (ohne Page-Reload) auszuführen.


- **Deployment:** _[URL]_  
--> https://boooktrack.netlify.app/

- **Besondere Entscheidungen:** _[z. B. Trade-offs, Vereinfachungen]_  
???

### 3.5 Validate
- **URL der getesteten Version** (separat deployt)

- **Ziele der Prüfung:** _[welche Fragen sollen beantwortet werden?]_  

- **Vorgehen:** _[moderiert/unmoderiert; remote/on-site]_ 

- **Stichprobe:** _[Mit wem wurde getestet? Profil; Anzahl]_ 

- **Aufgaben/Szenarien:** _[Ausformulierte Testaufgaben]_  

- **Kennzahlen & Beobachtungen:** _[z. B. Erfolgsquote, Zeitbedarf, qualitative Findings]_ 

- **Zusammenfassung der Resultate:** _[Wichtigste Erkenntnisse; 2-4 Sätze]_  

- **Abgeleitete Verbesserungen:** _[Anforderungen, die als nächstes umgesetzt werden sollten, priorisiert, kurz begründet; falls Verbesserungen im Prototyp konkret umgesetzt wurden: In Kap. 4 dokumentieren]_  


## 4. Erweiterungen [Optional]
Dokumentiert Erweiterungen über den Mindestumfang hinaus.
> **Hinweis:** Jede Erweiterung ist separat nach dem folgenden Schema zu beschreiben.

### 4.1 Lokaler Bild-Upload für Buchcover  
- **Beschreibung & Nutzen:** _[Was wurde erweitert? Warum?]_
 Anstatt Nutzer zu zwingen, externe Bild-URLs für Buchcover im Internet suchen und kopieren zu müssen, bietet die App die Möglichkeit, direkt eigene Bilder (z.B. vom Smartphone oder PC) hochzuladen. Im Frontend gibt es dafür eine interaktive Vorschau, die über URL.createObjectURL sofort das gewählte Bild im Platzhalter anzeigt. Die Bilder werden nicht lokal sondern in der MongoDB gespeichert. Sofern kein Cover hinzugefügt wird gibt es ein Platzhalterbild namens "The Spaceholder".


- **Wo umgesetzt:** _[Wie und wo wurde es gemacht? Frontend, Backend, Datenbank?]_ 
Frontend:
Implementierung eines <input type="file"> in der Datei books/addbook/+page.svelte mit einem reaktiven Event-Handler onchange={handleFileChange} zur Vorschaugenerierung. 

Backend:
In der Form-Action in books/addbook/+page.server.js wird die Datei aus den FormData extrahiert. xxxx

Datenbank:
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
Beispiele:
- **Repository & Struktur:** _[Link; kurze Strukturübersicht]_  
- **Issue-Management:** _[Vorgehen kurz beschreiben]_  
- **Commit-Praxis:** _[z. B. sprechende Commits]_

## 6. KI-Deklaration
Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools
- **Eingesetzte Tools**: _[z. B. Copilot, ChatGPT, Claude, lokale Modelle; Version/Variante wenn bekannt]_
1. ChatGPT (Open-AI)
2. Google Gemini

- **Zweck & Umfang**: _[wie, wofür und in welchem Ausmass wurde KI eingesetzt (z. B. Textentwürfe, Codevorschläge, Tests, Refactoring); welche Teile stammen (ganz/teilweise) aus KI-Unterstützung?]_
Künstliche Intelligenz wurde für grundlegende Textentwürfe, Konzept-Feedback und als essenzielles Werkzeug für das tiefgreifende Debugging während der Entwicklungs- und Deployment-Phase genutzt. KI-Modelle fungierten als "Senior Developer" bei der Analyse kryptischer SvelteKit/Vite Build-Fehler und gaben Hinweise zur sauberen Strukturierung der MongoDB-Verbindung.


- **Eigene Leistung (Abgrenzung):** _[was ist eigenständig erarbeitet/überarbeitet worden?]_
Die gesamte grundlegende Idee, die Handskizzen, die Systemarchitektur (Trennung von Status-Seiten), die Definition der Funktionen (Genres, Filter) sowie das komplette UI-Design (Figma/Design-Tool) sind eigenständig erstellte Leistungen. Die robuste CRUD-Architektur, der Einsatz von Svelte 5 Runes ($state, $derived) und das Verfassen der serverseitigen +page.server.js Load-Funktionen wurden konzeptionell eigenständig entwickelt und umgesetzt.

### 6.2 Prompt-Vorgehen
_[Überlegungen zu Prompt-Vorgehen, Qualität und Urheberrecht/Quellen. Wie wurde beim Prompting vorgegangen? Zu beschreiben ist die grundlegende Vorgehensweise. Einzelne, konkrete Prompts sollten höchstens als Beispiele aufgeführt werden. ]_

### 6.3 Reflexion
_[Nutzen, Grenzen, Risiken/Qualitätssicherung, ...]_
Die Nutzung der KI hat den Prozess der Konzeptionsphase und der Dokumentation erheblich beschleunigt. Besonders wertvoll war das Feedback zur visuellen Hierarchie beim Übergang von der Skizze zum digitalen Mockup. Die KI nimmt einem jedoch nicht die konzeptionellen Entscheidungen (z. B. welche Zielgruppe adressiert wird) ab, sondern fungiert eher als Strukturierungshilfe für bereits vorhandene Gedanken.


## 7. Anhang [Optional]
Beispiele:
- **Quellen:** _[verwendete Vorlagen/Assets/Modelle; Lizenz/Urheberrecht; ...]_
- **Testskript & Materialien:** _[Link/Datei]_  
- **Rohdaten/Auswertung:** _[Link/Datei]_  

