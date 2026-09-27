import { describe, it, expect } from 'vitest'
import { countCharacters, countWords } from './app.js'

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
