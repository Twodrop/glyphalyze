import { describe, it, expect } from 'vitest'
import { Tokenizer } from './Tokenizer.js'

describe('getWords()', () => {
  it('It should return each word found in a text string, without punctuation', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getWords('Hello, how are you? I am fine!')
    expect(result).toEqual(['Hello', 'how', 'are', 'you', 'I', 'am', 'fine'])
  })
})

describe('getCharacters()', () => {
  it('It should return each character found in a text string, counting an emoji as one character', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getCharacters('Hi 👍🏽')
    expect(result).toEqual(['H', 'i', ' ', '👍🏽'])
  })
})

describe('getSentences()', () => {
  it('It should return each sentence found in a text string', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getSentences('Hello my name is Robin. What is your name?')
    expect(result).toEqual(['Hello my name is Robin. ', 'What is your name?'])
  })
})
