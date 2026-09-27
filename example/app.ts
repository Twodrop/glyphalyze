/**
 * Example app demonstrating the glyphalyze text analysis functions.
 */

import { avgWordLength, countCharacters, countWords, readingTime, wordFrequency } from '../src/app.js'

import fs from 'node:fs/promises'
import { join } from 'node:path'

async function loadFile() {
  try {
    const data = await fs.readFile(join(import.meta.dirname, 'test.txt'), { encoding: 'utf8' })
    return data
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const text = await loadFile()

console.log('Text:', text)
console.log()
console.log('Characters:', countCharacters(text))
console.log('Words:', countWords(text))
console.log('Average word length:', avgWordLength(text))
console.log('Word frequency:', wordFrequency(text))
console.log('Reading time (200 wpm):', readingTime(text, 200))
