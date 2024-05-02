## Installation

Node 20 nach [Anleitung](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) installieren
Benötigte Projekt-Pakete installieren mit
```bash
$ npm install
```

## Starten der Anwendung

```bash
$ npm run start
```

## Verwenden der Anwendung

Nach dem Start ist das Backend unter http://localhost:3000 erreichbar.<br>
Der API-Endpunkt zum Abrufen der Teilnehmer ist unter http://localhost:3000/challengers via GET abrufbar.<br>
Teilnehmer werden momentan mit einem Namen (name) und der dazugehörigen Riegennummer (riege) ausgegeben.<br><br>
Der API-Endpunkt zum Abrufen der Liveticker-Einträge ist unter http://localhost:3000/entries via GET abrufbar.<br>
Ein Liveticker-Eintrag enthält den Liveticker-Text (text), die Zeit der Veröffentlichung (timestamp) und die Art des Liveticker-Eintrags (typ). Bei diesem wird zwischen einem Hauptpreis-Treffer (success) und allen Anderen (secondary) unterschieden.<br><br>

Die Werte sind natürlich noch nicht fix und können jederzeit geändert werden.
