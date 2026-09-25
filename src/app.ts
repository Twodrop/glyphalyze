/**
 * Counts the amount of characters in a text.
 *
 * @example
 * countCharacters('Six Seven') // Returns 9
 * @param text - The text to count.
 * @returns The amount of characters found.
 */
export function countCharacters(text: string): number {
  return text.split('').length;
}


