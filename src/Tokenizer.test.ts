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

  it('It should not end a sentence at a single line break', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getSentences('Hello my name\nis Robin. What is\r\nyour name?')
    expect(result).toEqual(['Hello my name\nis Robin. ', 'What is\r\nyour name?'])
  })

  it('It should still end a sentence at a single line break after punctuation', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getSentences('Hello my name is Robin.\nWhat is your name?')
    expect(result).toEqual(['Hello my name is Robin.\n', 'What is your name?'])
  })

  it('It should end a sentence at an empty line', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getSentences('A heading\n\nSome text\n \nMore text')
    expect(result).toEqual(['A heading\n\n', 'Some text\n \n', 'More text'])
  })

  it('It should not end a sentence at an abbreviation', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getSentences('I met Mr. Smith and Dr. Jones. Big cities, e.g. Paris, are loud.')
    expect(result).toEqual(['I met Mr. Smith and Dr. Jones. ', 'Big cities, e.g. Paris, are loud.'])
  })

  it('It should not end a sentence at an abbreviation followed by a single line break', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getSentences('Hello Mr.\nSmith. How are you?')
    expect(result).toEqual(['Hello Mr.\nSmith. ', 'How are you?'])
  })

  it('It should still end a sentence at an empty line after an abbreviation', () => {
    const tokenizer = new Tokenizer()
    const result = tokenizer.getSentences('Hello Mr.\n\nNext part')
    expect(result).toEqual(['Hello Mr.\n\n', 'Next part'])
  })
})
