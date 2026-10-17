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

describe('readingTimeInSeconds()', () => {
  it('It should return the correct estimated reading time in seconds based on users words per minute input', () => {
    const statistics = new TextStatistics(
      'I will write a very short text here cause im a slow reader, 23 words per minute btw, dont wanna flex or anything'
    )
    const result = statistics.readingTimeInSeconds(23)
    expect(result).toBe(60)
  })

  it('It should throw a RangeError if words per minute is not a finite number greater than 0', () => {
    const statistics = new TextStatistics('Hello hello world')
    expect(() => statistics.readingTimeInSeconds(0)).toThrow(RangeError)
    expect(() => statistics.readingTimeInSeconds(-5)).toThrow(RangeError)
    expect(() => statistics.readingTimeInSeconds(NaN)).toThrow(RangeError)
    expect(() => statistics.readingTimeInSeconds(Infinity)).toThrow(RangeError)
  })
})
