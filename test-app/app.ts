/**
 * Test app demonstrating the glyphalyze text analysis functions.
 */

import { avgWordLength, countCharacters, countWords, readingTime, wordFrequency, countSentences } from '../src/app.js'

import fs from 'node:fs/promises'
import { join } from 'node:path'
import { getSentences } from '../src/tokenize.js'
let text = ''
try {
  text = await fs.readFile(join(import.meta.dirname, 'test.txt'), { encoding: 'utf8' })
} catch (err) {
  console.error(err)
  process.exit(1)
}

console.log('Text:', text)
console.log()
console.log('Characters:', countCharacters(text))
console.log('Sentences:', countSentences(text))
console.log('Words:', countWords(text))
console.log('Average word length:', avgWordLength(text))
console.log('Word frequency:', wordFrequency(text))
console.log('Reading time (200 wpm):', readingTime(text, 200))
console.log(getSentences('Hello sir! How are you today?'))
