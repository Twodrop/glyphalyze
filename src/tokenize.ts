const wordSegmenter = new Intl.Segmenter("en", { granularity: "word" });
const charSegmenter = new Intl.Segmenter("en", { granularity: "grapheme" });


/**
 * Private helper function.
 * Cleans up a text and splits it into words.
 *
 * @example
 * getWords('Hello, how\n are you?') // Returns ['Hello', 'how', 'are', 'you']
 * @param text - The text to clean up.
 * @returns The words in the text, cleaned up.
 */
export function getWords(text: string): string[] {
  const words: string[] = []
  const segmentedWords = wordSegmenter.segment(text)
 
  // Only adds element deemd "word like" by the segmenter.
  for (const element of segmentedWords) {
    if (element.isWordLike) {
      words.push(element.segment)
    }
  }
  return words
}


/**
 * Private helper function.
 * Cleans up a text and splits it into characters.
 *
 * @example
 * getCharacters('Hello, how\n are you?') // Returns ['Hello', 'how', 'are', 'you']
 * @param text - The text to clean up.
 * @returns The characters in the text, cleaned up.
 */
export function getCharacters(text: string): string[] {
  const characters: string[] = []
  const segmentedCharacters = charSegmenter.segment(text)

  for (const element of segmentedCharacters) {
      characters.push(element.segment)
  }
  return characters
}