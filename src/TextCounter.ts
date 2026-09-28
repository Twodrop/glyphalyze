import { Tokenizer } from './Tokenizer.js'

/**
 *
 */
export class TextCounter {
  readonly #text: string
  readonly #tokenizer = new Tokenizer()

  /**
   *
   */
  constructor(text: string) {
    this.#text = text
  }

  /**
   * Counts the amount of characters in a text.
   *
   * @example
   * countCharacters('Six Seven') // Returns 9
   * @returns The amount of characters found.
   */
  countCharacters(): number {
    return this.#tokenizer.getCharacters(this.#text).length
  }

  /**
   * Counts the amount of words in a text.
   *
   * @example
   * countWords('Hello sir, how are you today?') // Returns 6
   * @returns The amount of words found.
   */
  countWords(): number {
    return this.#tokenizer.getWords(this.#text).length
  }

  /**
   * Counts the amount of sentences in a text.
   *
   * @example
   * countSentences('Hello sir! How are you today?') // Returns 2
   * @returns The amount of sentences found.
   */
  countSentences(): number {
    return this.#tokenizer.getSentences(this.#text).length
  }

  /**
   * Returns an object representing the frequency of each word.
   *
   * @example
   * wordFrequency('Hello hello world') // Returns {hello:2, world:1}
   * @param text - The text to get the frequency from.
   * @returns An object with each word as a key and its count as the value.
   */
  wordFrequency(): Record<string, number> {
    const frequencies: Record<string, number> = Object.create(null)

    const splitText = this.#tokenizer.getWords(this.#text)

    for (let index = 0; index < splitText.length; index++) {
      const word = splitText[index].toLowerCase()

      if (frequencies[word]) {
        frequencies[word] = frequencies[word] + 1
      } else {
        frequencies[word] = 1
      }
    }
    return frequencies
  }
}
