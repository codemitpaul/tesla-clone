# Was ist Nextjs? (D)

Next.js ist ein React-Framework,
das Ihnen Bausteine für die Erstellung von Webanwendungen bietet.
Mit Framework meinen wir, dass Next.js die für React erforderlichen Werkzeuge und Konfigurationen übernimmt und zusätzliche Strukturen,
Funktionen und Optimierungen für Ihre Anwendung bereitstellt.

## Vorteile Next js

1. Ausgezeichnete Leistung in Bezug auf die Ladezeiten.
2. Die Ladezeiten wurden durch "Lazy Loading" und automatische Codeaufteilung verbessert.
3. Jede Menge Unterstützung für Entwickler.
4. Fantastische Benutzerfreundlichkeit.
5. Schnellere Markteinführung.
6. Großartige SEO.

## Was ist getStaticProps in Next.js

getStaticProps: Es handelt sich um eine asynchrone Funktion,
die wir aus der Seitenkomponente exportieren, um Daten zum Zeitpunkt der Erstellung zu generieren.
Sie holt die Daten ab und generiert die HTML-Seiten auf unserem Server und speichert sie im Cache.

## Was ist getServerSideProps in Next.js

Einfach ausgedrückt, ermöglicht getServerSideProps das serverseitige Rendern einer Seite.
getServerSideProps rendert Ihre clientseitige Seite serverseitig und gibt ein hydriertes,
SEO-freundliches HTML-Dokument an den Browser zurück. Das bedeutet,
dass getServerSideProps die Seite bei jeder Anfrage anhand der Daten,
die es vom Server abruft, vorab rendert.

## Wie funktioniert revalidate

Wenn Sie eine Aktualisierungszeit von 60 Minuten festlegen, sehen alle Besucher eine Minute lang die gleiche generierte Version Ihrer Website.

1. Die Website wird erstellt.
2. Benutzer fordert Site an, erhält statische Datei.
3. Der Inhalt wird in der Headless-Source aktualisiert.
4. Der Inhalt ändert sich bis zum neuen Build nicht.
5. der Benutzer fordert die Site an und erhält die alten statischen Dateien.

## Was ist recoil - Global State Management

Recoil ist eine experimentelle Zustandsverwaltungsbibliothek und bietet mehrere Möglichkeiten,
die mit React allein nur schwer zu erreichen sind.
In diesem Artikel erfahren wir mehr über die recoil. js,
und wie es den Zustand in React verwaltet. JavaScript React Recoil.
Recoil js ist eine weitere Zustandsverwaltungsbibliothek für React.

## Befehle

1. npx create-next-app tesla-clone
2. yarn add -D tailwindcss postcss autoprefixer
3. npx tailwindcss init -p
4. tailwind.config.js
   /** @type {import('tailwindcss').Config} \*/
   module.exports = {
   content: [
   "./pages/**/_.{js,ts,jsx,tsx}",
   "./components/\*\*/_.{js,ts,jsx,tsx}",
   ],
   theme: {
   extend: {},
   },
   plugins: [],
   }
5. globals.css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

# SSH-Key für GitHub-Repositories einrichten

1. ls -al ~/.ssh
2. ssh-keygen -t rsa -b 4096 -C "codemitpaul@gmail.com"
3. ssh-add ~/.ssh/id_rsa_github
4. chmod 600 ~/.ssh/config
5. chmod 400 ~/.ssh/id_rsa_github
6. nano ~/.ssh/config
7. Host \*
   AddKeysToAgent yes
   UseKeychain yes
   IdentityFile ~/.ssh/id_rsa_github
8. cat ~/.ssh/id_rsa_github.pub
