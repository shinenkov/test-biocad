export type AminoAcidsType =
  | 'A'
  | 'R'
  | 'N'
  | 'D'
  | 'C'
  | 'E'
  | 'Q'
  | 'G'
  | 'H'
  | 'I'
  | 'L'
  | 'K'
  | 'M'
  | 'F'
  | 'P'
  | 'S'
  | 'T'
  | 'W'
  | 'Y'
  | 'V'
  | '-';

export interface Letter {
  char: AminoAcidsType;
  bg: string;
  highlight?: boolean;
}

export type AminoAcidColorsType = {
  [key in AminoAcidsType]: string;
};

export interface IFormInput {
  sequence1: string;
  sequence2: string;
}
