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
--> Ermöglichung einer intuitiven und flexiblen Kategorisierung (z. B. nach Genre)
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
--> Eine Web-Applikation, in der Nutzer Bücher hinzufügen und in Kategorien einteilen können (Current Read, Bookmarked & My Reads). 
--> Bücher werden primär als Bilder-Raster (Cover) mit Titel, Autor und Genre dargestellt. 
--> Nutzer können die Liste über eine Suchleiste sowie über Genre-Tags (Romance, Thriller, Fantasy etc.) durchsuchen.
--> Es gibt eine Seite in der man Reading-Goals erfassen und nachverfolgen kann.

User-Journey:
1. Nutzer öffnet die Web-App
2. Fügt ein neues Buch hinzu (Titel, Autor, Cover)
3. Ordnet es einer Kategorie zu (z.B. „Current Read“)
4. Sieht das Buch direkt in der entsprechenden Seite.
5. Aktualisiert Fortschritt oder verschiebt es zu einem anderen Status (z.B. „My Reads“)

- **Annahmen [Optional]:** _[welche Hypothesen werden geprüft?]_
--> Nutzer bevorzugen eine visuelle Navigation (Bilder) gegenüber reinen Textlisten. 
--> Eine aufgeräumte, minimalistische Oberfläche lenkt weniger ab und rückt die Bücher in den Fokus.

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
- **Tooling:** _[IDE/Erweiterungen, lokale/Cloud-Tools; den Einsatz von KI beschreiben Sie im Kapitel **KI-Deklaration**]_  
- **Struktur & Komponenten:** _[Seiten, Routen, State/Stores, wichtige Komponenten]_
- **Daten & Schnittstellen:** _[Wie werden Daten gespeichert, verwaltet, abgerufen?]_
- **Deployment:** _[URL]_  
- **Besondere Entscheidungen:** _[z. B. Trade-offs, Vereinfachungen]_  

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

### _[4.x Kurzbeschreibung / Titel]_  
- **Beschreibung & Nutzen:** _[Was wurde erweitert? Warum?]_  
- **Wo umgesetzt:** _[Wie und wo wurde es gemacht? Frontend, Backend, Datenbank?]_  
- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_  
- **Aus Evaluation abgeleitet?:** _[Wurde diese Erweiterung als Folge eines in der Evaluation identifizierten Issues implementiert?]_  

> Das folgende **Beispiel** wurde bewusst kurz gehalten. Erweiterungen dürfen auch ausführlicher beschrieben werden.

### 4.1 Tabelle nach Kategorien filtern
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
1. ChatGPT
2. Google Gemini

- **Zweck & Umfang**: _[wie, wofür und in welchem Ausmass wurde KI eingesetzt (z. B. Textentwürfe, Codevorschläge, Tests, Refactoring); welche Teile stammen (ganz/teilweise) aus KI-Unterstützung?]_


- **Eigene Leistung (Abgrenzung):** _[was ist eigenständig erarbeitet/überarbeitet worden?]_
Die gesamte grundlegende Idee, die Handskizzen, die Definition der Funktionen (Genres, Filter, Navigation) sowie das digitale UI-Mockup (Figma/Design-Tool) sind eigenständig erstellte Leistungen

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

