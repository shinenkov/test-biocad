import { AminoAcidsType, Letter } from 'types';
import { aminoAcidColors } from 'types/colors';

export function getAlignmentLines(
  seq1: string,
  seq2: string
): [Letter[], Letter[]] {
  const line1: Letter[] = [];
  const line2: Letter[] = [];
  for (let i = 0; i < seq1.length; i++) {
    const char1 = seq1[i].toUpperCase() as AminoAcidsType;
    const char2 = seq2[i].toUpperCase() as AminoAcidsType;
    line1.push({
      char: char1,
      bg: aminoAcidColors[char1] || 'transparent',
    });
    line2.push({
      char: char2,
      bg: 'transparent',
      highlight: char1 !== char2 && char2 !== '-' && char1 !== '-',
    });
  }
  return [line1, line2];
}

export function partSequence<T>(arr: T[], partSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += partSize) {
    result.push(arr.slice(i, i + partSize));
  }
  return result;
}

export const createBackgroundGradient = (letters: Letter[]): string => {
  const segments = letters.map((letter, index) => {
    const percentage = 100 / letters.length;
    const start = percentage * index;
    const end = percentage * (index + 1);
    if (index === letters.length - 1) {
      return `${letter.bg} calc(${start}% - 4px) calc(${end}% - 4px), transparent calc(${end}% - 4px) 100%`;
    }
    return `${letter.bg} calc(${start}% - 4px) calc(${end}% - 4px)`;
  });

  return `linear-gradient(to right, ${segments.join(',')})`;
};
