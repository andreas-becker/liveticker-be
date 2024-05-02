export interface Challenger {
  name: string;
  position?: number;
  riege?: number;
  timestamp?: number;
}

export interface Entry {
  text: string;
  timestamp: number;
  typ: TickerTyp;
}

export const enum TickerTyp {
  OTHERS = 'secondary',
  HIT = 'success',
}
