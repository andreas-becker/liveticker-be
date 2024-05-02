import { Controller, Get } from '@nestjs/common';
import { Entry, TickerTyp } from 'src/models';

const MIN = 60 * 1000;

@Controller('entries')
export class EntriesController {
  @Get()
  getEntries(): Entry[] {
    return [
      {
        text: 'Benedikt Krause erzielte einen Abpraller',
        timestamp: Date.now() - MIN,
        typ: TickerTyp.OTHERS,
      },
      {
        text: 'Hans Kunkel erzielte einen Steckschuß im Stamm',
        timestamp: Date.now() - 3 * MIN,
        typ: TickerTyp.OTHERS,
      },
      {
        text: 'Gereon Richard erziehlte ein Luftloch',
        timestamp: Date.now() - 6 * MIN,
        typ: TickerTyp.OTHERS,
      },
      {
        text: '📣 Maxi Mumm-Schunkewitz erziehlte den zweiten Hauptpreis. Herzlichen Glückwunsch und viel Spaß mit den Gewinnen!',
        timestamp: Date.now() - 20 * MIN,
        typ: TickerTyp.HIT,
      },
      {
        text: 'Clemens Hartman erzielte einen Steckschuß in der Zepterkralle',
        timestamp: Date.now() - 23 * MIN,
        typ: TickerTyp.OTHERS,
      },
      {
        text: 'Vinzenz Pfaff erzielte einen Steckschuß',
        timestamp: Date.now() - 27 * MIN,
        typ: TickerTyp.OTHERS,
      },
      {
        text: 'Willi Frank erzielte einen Steckschuß',
        timestamp: Date.now() - 31 * MIN,
        typ: TickerTyp.OTHERS,
      },
      {
        text: 'Wolfdietrich Geissler erzielte einen Steckschuß',
        timestamp: Date.now() - 33 * MIN,
        typ: TickerTyp.OTHERS,
      },
      {
        text: 'Kim Schultze erzielte einen Abpraller',
        timestamp: Date.now() - 36 * MIN,
        typ: TickerTyp.OTHERS,
      },
      {
        text: '📣 Samuel Engel erziehlte den vierten Hauptpreis. Gratulation!',
        timestamp: Date.now() - 61 * MIN,
        typ: TickerTyp.HIT,
      },
    ];
  }
}
