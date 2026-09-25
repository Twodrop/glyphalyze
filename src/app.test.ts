import { describe, it, expect } from 'vitest'
import { countCharacters } from './app.js'


describe('generateGreeting()', () => {
  it('should return a personalized greeting when a valid name is provided', () => {
    const result = countCharacters('Six Seven')
    expect(result).toBe(9)
  })

})
