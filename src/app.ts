/**
 * @file Glyphalyze functions, used to analyze text in various ways.
 * @author Robin Helander <rehswe@gmail.com>
 */

import { getWords, getCharacters, getSentences } from './tokenize.js'

/**
 * Counts the amount of characters in a text.
 *
 * @example
 * countCharacters('Six Seven') // Returns 9
 * @param text - The text to count.
 * @returns The amount of characters found.
 */
export function countCharacters(text: string): number {
  return getCharacters(text).length
}

/**
 * Counts the amount of words in a text.
 *
 * @example
 * countWords('Hello sir, how are you today?') // Returns 6
 * @param text - The text to count.
 * @returns The amount of words found.
 */
export function countWords(text: string): number {
  return getWords(text).length
}

/**
 * Counts the amount of sentences in a text.
 *
 * @example
 * countSentences('Hello sir! How are you today?') // Returns 2
 * @param text - The text to count.
 * @returns The amount of sentences found.
 */
export function countSentences(text: string): number {
  return getSentences(text).length
}

/**
 * Calculates the average word length.
 *
 * @example
 * avgWordLength('Hello, how are you today?') // Returns 3.8
 * @param text - The text to calculate on.
 * @returns The average word length, or 0 if the text has no words.
 */
export function avgWordLength(text: string): number {
  const splitText = getWords(text)
  if (splitText.length === 0) {
    return 0
  }

  let total = 0
  for (let index = 0; index < splitText.length; index++) {
    const word = splitText[index]

    total = total + getCharacters(word).length
  }

  return total / splitText.length
}

/**
 * Returns an object representing the frequency of each word.
 *
 * @example
 * wordFrequency('Hello hello world') // Returns {hello:2, world:1}
 * @param text - The text to get the frequency from.
 * @returns An object with each word as a key and its count as the value.
 */
export function wordFrequency(text: string): Record<string, number> {
  const wordFrequency: Record<string, number> = Object.create(null)

  const splitText = getWords(text)

  for (let index = 0; index < splitText.length; index++) {
    const word = splitText[index].toLowerCase()

    if (wordFrequency[word]) {
      wordFrequency[word] = wordFrequency[word] + 1
    } else {
      wordFrequency[word] = 1
    }
  }
  return wordFrequency
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
export function readingTime(text: string, wordsPerMinute: number): number {
  const wordCount = countWords(text)
  return (wordCount / wordsPerMinute) * 60
}
