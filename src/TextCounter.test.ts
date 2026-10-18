import { describe, it, expect } from 'vitest'
import { TextCounter } from './TextCounter.js'

describe('countWords()', () => {
  it('It should return the correct amount of words found in a text string', () => {
    const counter = new TextCounter('Hello! Not really sure what i should write here but i guess this will do.')
    const result = counter.countWords()
    expect(result).toBe(15)
  })
})

describe('countCharacters()', () => {
  it('It should return the correct amount of characters found in a text string', () => {
    const counter = new TextCounter('Six Seven')
    const result = counter.countCharacters()
    expect(result).toBe(9)
  })
})

describe('countSentences()', () => {
  it('It should return the correct amount of sentences found in a text string', () => {
    const counter = new TextCounter('Hello my name is Robin. What is your name?')
    const result = counter.countSentences()
    expect(result).toBe(2)
  })

  it('It should not count a single line break as the end of a sentence', () => {
    const counter = new TextCounter('Hello my name\nis Robin. What is\nyour name?')
    const result = counter.countSentences()
    expect(result).toBe(2)
  })

  it('It should not count an abbreviation as the end of a sentence', () => {
    const counter = new TextCounter('Hello Mr. Smith. How are you?')
    const result = counter.countSentences()
    expect(result).toBe(2)
  })
})

describe('wordFrequency()', () => {
  it('Returns an object with each word as a key and its count as value', () => {
    const counter = new TextCounter('Hej hej hej! Hallå')
    const result = counter.wordFrequency()
    expect(result).toEqual({
      hej: 3,
      hallå: 1,
    })
  })
})

describe('mostFrequentWords()', () => {
  it('It should return the most frequent words sorted from most to least frequent', () => {
    const counter = new TextCounter('Cat dog cat bird. Dog cat fish!')
    const result = counter.mostFrequentWords(2, [])
    expect(result).toEqual([
      { word: 'cat', count: 3 },
      { word: 'dog', count: 2 },
    ])
  })

  it('It should not return excluded words, regardless of case', () => {
    const counter = new TextCounter('The cat and the dog and the bird')
    const result = counter.mostFrequentWords(2, ['THE', 'And'])
    expect(result).toEqual([
      { word: 'bird', count: 1 },
      { word: 'cat', count: 1 },
    ])
  })

  it('It should throw a RangeError if count is not an integer greater than 0', () => {
    const counter = new TextCounter('Hello hello world')
    expect(() => counter.mostFrequentWords(0, [])).toThrow(RangeError)
    expect(() => counter.mostFrequentWords(-5, [])).toThrow(RangeError)
    expect(() => counter.mostFrequentWords(1.5, [])).toThrow(RangeError)
    expect(() => counter.mostFrequentWords(NaN, [])).toThrow(RangeError)
  })
})
