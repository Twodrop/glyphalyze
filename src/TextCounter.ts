/**
 * @file Defines the TextCounter class.
 * @author Robin Helander <rehswe@gmail.com>
 */

import { Tokenizer } from './Tokenizer.js'

/**
 * Counts the characters, words and sentences in a text,
 * and how many times each word occurs.
 */
export class TextCounter {
  readonly #text: string
  readonly #tokenizer = new Tokenizer()

  /**
   * Constructor for TextCounter class.
   *
   * @param text The text that will be counted on.
   */
  constructor(text: string) {
    this.#text = text
  }

  /**
   * Counts the amount of characters in a text.
   *
   * @example
   * new TextCounter('Six Seven').countCharacters() // Returns 9
   * @returns The amount of characters found.
   */
  countCharacters(): number {
    return this.#tokenizer.getCharacters(this.#text).length
  }

  /**
   * Counts the amount of words in a text.
   *
   * @example
   * new TextCounter('Hello sir, how are you today?').countWords() // Returns 6
   * @returns The amount of words found.
   */
  countWords(): number {
    return this.#tokenizer.getWords(this.#text).length
  }

  /**
   * Counts the amount of sentences in a text.
   *
   * @example
   * new TextCounter('Hello sir! How are you today?').countSentences() // Returns 2
   * @returns The amount of sentences found.
   */
  countSentences(): number {
    return this.#tokenizer.getSentences(this.#text).length
  }

  /**
   * Returns an object representing the frequency of each word.
   *
   * @example
   * new TextCounter('Hello hello world').wordFrequency() // Returns {hello:2, world:1}
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

  /**
   * Returns a list of the most common words in the text.
   *
   * @param count The amount of words you want returned.
   * @param excludedWords Words you dont want counted.
   * @returns An array holding the top words and their frequency.
   */
  mostFrequentWords(count: number, excludedWords: string[]): { word: string; count: number }[] {
    if (!Number.isInteger(count) || count <= 0) {
      throw new RangeError('count must be an integer greater than 0.')
    }

    const excluded: string[] = []
    for (let index = 0; index < excludedWords.length; index++) {
      excluded.push(excludedWords[index].toLowerCase())
    }

    const frequencies = this.wordFrequency()
    const uniqueWords = Object.keys(frequencies)
    const words: { word: string; count: number }[] = []

    for (let index = 0; index < uniqueWords.length; index++) {
      const word = uniqueWords[index]

      if (!excluded.includes(word)) {
        words.push({ word: word, count: frequencies[word] })
      }
    }

    words.sort((first, second) => {
      if (first.count !== second.count) {
        return second.count - first.count
      }
      return first.word.localeCompare(second.word)
    })

    return words.slice(0, count)
  }
}
