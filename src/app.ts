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

export function avgWordLength(text: string): number {
  //We remove the following characters.
  let filter = [',', '.', '?', '!', "'", ':', ';', '"', '(', ')']
  let filteredText = text

  for (let index = 0; index < filter.length; index++) {
    filteredText = filteredText.replaceAll(filter[index], '')
  }

  let splitText = filteredText.split(' ')
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
