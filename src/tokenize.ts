/**
 * @file Utility functions for text segmenting.
 * @author Robin Helander <rehswe@gmail.com>
 */

const wordSegmenter = new Intl.Segmenter('en', { granularity: 'word' })
const charSegmenter = new Intl.Segmenter('en', { granularity: 'grapheme' })
const sentenceSegmenter = new Intl.Segmenter('en', { granularity: 'sentence' })

/**
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

  // Only adds elements deemed "word-like" by the segmenter.
  for (const element of segmentedWords) {
    if (element.isWordLike) {
      words.push(element.segment)
    }
  }
  return words
}

/**
 * Uses Intl.Segmenter so that emojis are counted
 * as 1, instead of its Unicode code.
 * Includes line breaks and spaces.
 *
 * @example
 * getCharacters('Hi 👍🏽') // Returns ['H', 'i', ' ', '👍🏽']
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

/**
 * Splits a text into sentences.
 *
 * TODO: Does not deal with line breaks very well.
 *
 * @example
 * getSentences('Hello sir! How are you today?')
 * // Returns ['Hello sir! ', 'How are you today?']
 * @param text - The text to split up.
 * @returns The sentences in the text, split up.
 */
export function getSentences(text: string): string[] {
  const sentences: string[] = []
  const segmentedSentences = sentenceSegmenter.segment(text)

  for (const element of segmentedSentences) {
    sentences.push(element.segment)
  }
  return sentences
}
