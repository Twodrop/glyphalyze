/**
 * @file Defines the Tokenizer class.
 * @author Robin Helander <rehswe@gmail.com>
 */

/**
 * Splits text into words, characters and sentences using Intl.Segmenter.
 */
export class Tokenizer {
  readonly #wordSegmenter = new Intl.Segmenter('en', { granularity: 'word' })
  readonly #charSegmenter = new Intl.Segmenter('en', { granularity: 'grapheme' })
  readonly #sentenceSegmenter = new Intl.Segmenter('en', { granularity: 'sentence' })

  /**
   * Cleans up a text and splits it into words.
   *
   * @example
   * new Tokenizer().getWords('Hello, how\n are you?') // Returns ['Hello', 'how', 'are', 'you']
   * @param text - The text to clean up.
   * @returns The words in the text, cleaned up.
   */
  getWords(text: string): string[] {
    const words: string[] = []
    const segmentedWords = this.#wordSegmenter.segment(text)

    // Only adds elements deemed "word-like" by the segmenter.
    for (const element of segmentedWords) {
      if (element.isWordLike) {
        words.push(element.segment)
      }
    }
    return words
  }

  /**
   * Splits a text into characters.
   * Emojis count as one character, instead of one per Unicode code unit.
   * Includes line breaks and spaces.
   *
   * @example
   * new Tokenizer().getCharacters('Hi 👍🏽') // Returns ['H', 'i', ' ', '👍🏽']
   * @param text - The text to clean up.
   * @returns The characters in the text, cleaned up.
   */
  getCharacters(text: string): string[] {
    const characters: string[] = []
    const segmentedCharacters = this.#charSegmenter.segment(text)

    for (const element of segmentedCharacters) {
      characters.push(element.segment)
    }
    return characters
  }

  /**
   * Splits a text into sentences.
   *
   * TODO: Does not deal with line breaks very well.
   *
   * @example
   * new Tokenizer().getSentences('Hello sir! How are you today?')
   * // Returns ['Hello sir! ', 'How are you today?']
   * @param text - The text to split up.
   * @returns The sentences in the text, split up.
   */
  getSentences(text: string): string[] {
    const sentences: string[] = []
    const segmentedSentences = this.#sentenceSegmenter.segment(text)

    for (const element of segmentedSentences) {
      sentences.push(element.segment)
    }
    return sentences
  }
}
