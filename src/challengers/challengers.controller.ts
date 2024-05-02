import { Controller, Get } from '@nestjs/common';
import { Challenger } from 'src/models';

@Controller('challengers')
export class ChallengersController {
  @Get()
  getChallengers(): Challenger[] {
    return [
      {
        name: 'Max Mustermann',
        riege: 1,
      },
      {
        name: 'Hans Kunkel',
        riege: 1,
      },
      {
        name: 'Benedikt Krause',
        riege: 1,
      },
      {
        name: 'Thorsten Kröger',
        riege: 2,
      },
      {
        name: 'Pascal Sommer',
        riege: 2,
      },
      {
        name: 'Bernhard Wirt',
        riege: 2,
      },
      {
        name: 'Marco Berger',
        riege: 2,
      },
      {
        name: 'André Marius Vieth',
        riege: 3,
      },
      {
        name: 'Felix Salzwedel',
        riege: 3,
      },
      {
        name: 'Boris Hoffmann',
        riege: 3,
      },
      {
        name: 'Alexander Thälmann',
        riege: 4,
      },
      {
        name: 'Roman Meyers',
        riege: 4,
      },
      {
        name: 'Marcel Waltz',
        riege: 4,
      },
      {
        name: 'Stefan Zimmermann',
        riege: 4,
      },
      {
        name: 'Lothar Enns',
        riege: 4,
      },
      {
        name: 'Hendrik Kneib',
        riege: 5,
      },
    ];
  }
}
