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
