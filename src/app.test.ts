import { describe, it, expect } from 'vitest'
import { avgWordLength, countCharacters, countWords } from './app.js'

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

describe('avgWordLength()', () => {
  it('It should return the average length of each word found in a text string', () => {
    const result = avgWordLength(
      'This text will test the average word length! Hopefully it works? I am adding some weird stuff to test;'
    )
    expect(result).toBe(81 / 19)
  })
})
