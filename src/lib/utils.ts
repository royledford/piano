import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ToneMapType } from '@/Types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toneMap: Record<string, ToneMapType> = {
  F3: { note: 'F3', hertz: 174.61, keyboard: 'a' },
  Gb3: { note: 'Gb3', hertz: 185.0, keyboard: 'w', position: 'left' },
  G3: { note: 'G3', hertz: 196.0, keyboard: 's' },
  Ab3: { note: 'Ab3', hertz: 207.65, keyboard: 'e', position: 'center' },
  A3: { note: 'A3', hertz: 220.0, keyboard: 'd' },
  Bb3: { note: 'Bb3', hertz: 233.08, keyboard: 'r', position: 'right' },
  B3: { note: 'B3', hertz: 246.94, keyboard: 'f' },
  C4: { note: 'C4', hertz: 261.63, keyboard: 'g' },
  Db4: { note: 'Db4', hertz: 277.18, keyboard: 'y', position: 'left' },
  D4: { note: 'D4', hertz: 293.66, keyboard: 'h' },
  Eb4: { note: 'Eb4', hertz: 311.13, keyboard: 'u', position: 'right' },
  E4: { note: 'E4', hertz: 329.63, keyboard: 'j' },
  F4: { note: 'F4', hertz: 349.23, keyboard: 'k' },
  Gb4: { note: 'Gb4', hertz: 369.99, keyboard: 'i', position: 'left' },
  G4: { note: 'G4', hertz: 392.0, keyboard: 'l' },
  Ab4: { note: 'Ab4', hertz: 415.3, keyboard: 'o', position: 'center' },
  A4: { note: 'A4', hertz: 440.0, keyboard: ';' },
  Bb4: { note: 'Bb4', hertz: 466.16, keyboard: 'p', position: 'right' },
  // Not sure what keys the following get assigned to ???
  B4: { note: 'B4', hertz: 493.88, keyboard: "'" },
  C5: { note: 'C5', hertz: 523.25, keyboard: '' },
  Db5: { note: 'Db5', hertz: 554.37, keyboard: '', position: 'left' },
  D5: { note: 'D5', hertz: 587.33, keyboard: '' },
  Eb5: { note: 'Eb5', hertz: 622.25, keyboard: '', position: 'right' },
  E5: { note: 'E5', hertz: 659.25, keyboard: '' },
}

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export function clamp(number: number, lower: number, upper: number) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower
    }
  }
  return number
}
