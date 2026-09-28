import { Tokenizer } from './Tokenizer.js'
import { TextCounter } from './TextCounter.js'

/**
 *
 */
export class TextStatistics {
  readonly #text: string
  readonly #tokenizer = new Tokenizer()
  readonly #counter: TextCounter

  /**
   *
   */
  constructor(text: string) {
    this.#text = text
    this.#counter = new TextCounter(text)
  }

  /**
   * Calculates the average word length.
   *
   * @example
   * avgWordLength('Hello, how are you today?') // Returns 3.8
   * @param text - The text to calculate on.
   * @returns The average word length, or 0 if the text has no words.
   */
  avgWordLength(): number {
    const splitText = this.#tokenizer.getWords(this.#text)
    if (splitText.length === 0) {
      return 0
    }

    let total = 0
    for (let index = 0; index < splitText.length; index++) {
      const word = splitText[index]

      total = total + this.#tokenizer.getCharacters(word).length
    }

    return total / splitText.length
  }

  /**
   * Calculates the average sentence length,
   * based on word length.
   *
   * @example
   * @param text - The text to calculate on.
   * @returns The average sentence length, or 0 if the text has no words.
   */
  avgSentenceLength(): number {
    const sentences = this.#tokenizer.getSentences(this.#text)
    if (sentences.length === 0) {
      return 0
    }

    let total = 0
    for (let index = 0; index < sentences.length; index++) {
      const sentence = sentences[index]

      total = total + this.#tokenizer.getWords(sentence).length
    }

    return total / sentences.length
  }

  /**
   * Returns the expected reading time in seconds.
   *
   * @example
   * readingTime('Hello hello world', 3) // Returns 60
   * @param text - The text to get the reading time from.
   * @param wordsPerMinute - How fast the user reads.
   * @returns Reading time in seconds.
   */
  readingTime(wordsPerMinute: number): number {
    const wordCount = this.#counter(this.#text)
    return (wordCount / wordsPerMinute) * 60
  }
}
