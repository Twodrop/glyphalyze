import { describe, it, expect } from 'vitest'
import { TextStatistics } from './TextStatistics.js'

describe('avgWordLength()', () => {
  it('It should return the average length of each word found in a text string', () => {
    const statistics = new TextStatistics(
      'This text will test the average word length! Hopefully it works? I am adding some weird stuff to test;'
    )
    const result = statistics.avgWordLength()
    expect(result).toBe(81 / 19)
  })
})

describe('avgSentenceLength()', () => {
  it('It should return the average length of each sentence found in a text string', () => {
    const statistics = new TextStatistics(
      'This text will test the average sentence length! Hopefully it will work? I am adding some weird stuff to test.'
    )
    const result = statistics.avgSentenceLength()
    expect(result).toBe(20 / 3)
  })
})

describe('readingTime()', () => {
  it('It should return the correct estimated reading time in seconds based on users words per minute input', () => {
    const statistics = new TextStatistics(
      'I will write a very short text here cause im a slow reader, 23 words per minute btw, dont wanna flex or anything'
    )
    const result = statistics.readingTime(23)
    expect(result).toBe(60)
  })
})
