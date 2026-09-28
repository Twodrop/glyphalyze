import { Tokenizer } from './Tokenizer.js'

/**
 *
 */
export class TextStatistics {
  readonly #text: string
  readonly #tokenizer = new Tokenizer()

  /**
   * Consturctor for TextStatistics class.
   *
   * @param text Text to be calculated on.
   */
  constructor(text: string) {
    this.#text = text
  }

  /**
   * Calculates the average word length.
   *
   * @example
   * avgWordLength('Hello, how are you today?') // Returns 3.8
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
   * @param wordsPerMinute - How fast the user reads.
   * @returns Reading time in seconds.
   */
  readingTime(wordsPerMinute: number): number {
    const wordCount = this.#tokenizer.getWords(this.#text).length
    return (wordCount / wordsPerMinute) * 60
  }
}
