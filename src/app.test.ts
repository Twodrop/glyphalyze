import { describe, it, expect } from 'vitest'
import {
  avgWordLength,
  countCharacters,
  countWords,
  countSentences,
  wordFrequency,
  readingTime,
  avgSentenceLength,
} from './app.js'

describe('countWords()', () => {
  it('It should return the correct amount of words found in a text string', () => {
    const result = countWords('Hello! Not really sure what i should write here but i guess this will do.')
    expect(result).toBe(15)
  })
})

describe('countCharacters()', () => {
  it('It should return the correct amount of characters found in a text string', () => {
    const result = countCharacters('Six Seven')
    expect(result).toBe(9)
  })
})

describe('countSentences()', () => {
  it('It should return the correct amount of sentences found in a text string', () => {
    const result = countSentences('Hello my name is Robin. What is your name?')
    expect(result).toBe(2)
  })
})

describe('avgWordLength()', () => {
  it('It should return the average length of each word found in a text string', () => {
    const result = avgWordLength(
      'This text will test the average word length! Hopefully it works? I am adding some weird stuff to test;'
    )
    expect(result).toBe(81 / 19)
  })
})

describe('avgSentenceLength()', () => {
  it('It should return the average length of each word found in a text string', () => {
    const result = avgSentenceLength(
      'This text will test the average sentence length! Hopefully it will work? I am adding some weird stuff to test.'
    )
    expect(result).toBe(20 / 3)
  })
})

describe('wordFrequency()', () => {
  it('Returns an object with each word as a key and its count as value', () => {
    const result = wordFrequency('Hej hej hej! Hallå')
    expect(result).toEqual({
      hej: 3,
      hallå: 1,
    })
  })
})

describe('readingTime()', () => {
  it('It should return the correct estimated reading time in seconds based on users words per minute input', () => {
    const result = readingTime(
      'I will write a very short text here cause im a slow reader, 23 words per minute btw, dont wanna flex or anything',
      23
    )
    expect(result).toBe(60)
  })
})
