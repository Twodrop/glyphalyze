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
 * avgWordLength('Hello, how are you today?') // Returns 3.8
 * @param text - The text to calculate on.
 * @returns The average word length.
 */
export function avgWordLength(text: string): number {
  const splitText = filterWords(text)
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
 * wordFrequency('Hello hello world') // Returns {hello:2, world:1}
 * @param text - The text to get the frequency from.
 * @returns An object with a key word each word with a value for each count.
 */
export function wordFrequency(text: string): Record<string, number> {


  const wordFrequency: Record<string, number> = {}

  const splitText = filterWords(text)

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


/**
 * Private helper function.
 * Removes punctuation from a text and splits it into words.
 *
 * @example
 * filterWords('Hello, how are you?') // Returns ['Hello', 'how', 'are', 'you']
 * @param text - The text to filter.
 * @returns The words in the text, without punctuation.
 */
function filterWords(text: string): string[] {
  const filter = [',', '.', '?', '!', "'", ':', ';', '"', '(', ')']
  let filteredText = text

  for (let index = 0; index < filter.length; index++) {
    filteredText = filteredText.replaceAll(filter[index], '')
  }

  return filteredText.split(' ')
}