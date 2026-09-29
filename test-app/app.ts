/**
 * Test app demonstrating the glyphalyze text analysis functions.
 */

import { TextCounter, TextStatistics } from '../src/app.js'

import fs from 'node:fs/promises'
import { join } from 'node:path'

let text = ''
try {
  text = await fs.readFile(join(import.meta.dirname, 'test.txt'), { encoding: 'utf8' })
} catch (err) {
  console.error(err)
  process.exit(1)
}

const counter = new TextCounter(text)
const statistics = new TextStatistics(text)

console.log('Text:', text)
console.log()
console.log('Characters:', counter.countCharacters())
console.log('Sentences:', counter.countSentences())
console.log('Words:', counter.countWords())
console.log('Average word length:', statistics.avgWordLength())
console.log('Average sentence length:', statistics.avgSentenceLength())
console.log('Word frequency:', counter.wordFrequency())
console.log('Reading time (200 wpm):', statistics.readingTime(200))
