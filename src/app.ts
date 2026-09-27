/**
 * Counts the amount of characters in a text.
 *
 * @example
 * countCharacters('Six Seven') // Returns 9
 * @param text - The text to count.
 * @returns The amount of characters found.
 */
export function countCharacters(text: string): number {
  return text.split('').length
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
  return text.split(' ').length
}

/**
 * Calculates the average word length.
 *
 * @example
 * avgWordLength('Hello sir, how are you today?') // Returns 3.8
 * @param text - The text to calculate on.
 * @returns The average word length.
 */
export function avgWordLength(text: string): number {
  //We remove the following characters.
  const filter = [',', '.', '?', '!', "'", ':', ';', '"', '(', ')']
  let filteredText = text

  for (let index = 0; index < filter.length; index++) {
    filteredText = filteredText.replaceAll(filter[index], '')
  }

  const splitText = filteredText.split(' ')
  let total = 0
  for (let index = 0; index < splitText.length; index++) {
    const word = splitText[index]

    total = total + word.split('').length
  }

  return total / splitText.length
}

/*
export function sentenceCount(text: string): number {
  
}
*/

/**
 * Returns an object represting the frequency of each word.
 *
 * @example
 * avgWordLength('Hello hello world') // Returns {hello:2, world:1}
 * @param text - The text to get the frequency from.
 * @returns An object with a key word each word with a value for each count.
 */
export function wordFrequency(text: string): Record<string, number> {
  const filter = [',', '.', '?', '!', "'", ':', ';', '"', '(', ')']
  let filteredText = text

  for (let index = 0; index < filter.length; index++) {
    filteredText = filteredText.replaceAll(filter[index], '')
  }

  const wordFrequency: Record<string, number> = {}

  const splitText = filteredText.split(' ')

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
