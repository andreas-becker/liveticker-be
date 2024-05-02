import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChallengersController } from './challengers/challengers.controller';
import { ChallengerController } from './challenger/challenger.controller';
import { EntryController } from './entry/entry.controller';
import { EntriesController } from './entries/entries.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ChallengersController,
    ChallengerController,
    EntryController,
    EntriesController,
  ],
  providers: [AppService],
})
export class AppModule {}

/*
FE: Benötigt die Einträge (entry) aus dem Liveticker

// Endpunkt GET /challengers returns Challenger[] <-- Liefert die Liste der Schützen

// Endpunkt POST /challenger Challenger <-- Aktualisiert den timestamp eines Challengers
// Endpunkt POST /entry Entry <-- fügt einen Eintrag der Liste hinzu
// Endpunkt PATCH /entry Entry <-- aktualisiert einen Eintrag auf Basis des timestamp
// Endpunkt GET /entries <-- Liste aller Einträge
*/
