# Glyphalyze

Glyphalyze is a small module for analyzing text, usable from both JavaScript and TypeScript. Give it a string and it tells you how many characters, words and sentences it contains, how often each word occurs, and statistics such as average word length and estimated reading time.

It has no runtime dependencies.

**What it does**

- Counts characters, words and sentences
- Counts how often each word occurs (case-insensitive)
- Calculates average word length, average sentence length and reading time
- Treats emoji and other multi-code-point symbols as one character (`'👍🏽'` counts as 1, not 4)

**What it does not do**

- It does not read files or fetch text. You pass it a string.
- It does not translate text, check spelling or check grammar.
- It is tuned for English. Other languages may work but are not tested.

## Requirements

- Node.js 24.12.0 or later
- JavaScript or TypeScript. TypeScript is not required.

## Installation

Install directly from GitHub:

```bash
npm install github:Twodrop/glyphalyze
```

The package is compiled to plain JavaScript during installation. It also includes type declarations, so TypeScript users get types and autocompletion.

## Usage

The example below works the same in JavaScript and TypeScript.

```js
import { TextCounter, TextStatistics } from 'glyphalyze'

const text = 'This is a very basic package. The following shows off its features.'

const counter = new TextCounter(text)
counter.countCharacters() // 67
counter.countWords() // 12
counter.countSentences() // 2
counter.wordFrequency() // { this: 1, is: 1, a: 1, very: 1, ... }

const statistics = new TextStatistics(text)
statistics.avgWordLength() // 4.5
statistics.avgSentenceLength() // 6
statistics.readingTime(200) // 3.6 (seconds at 200 words per minute)
```

If your project uses CommonJS, `require` works too:

```js
const { TextCounter, TextStatistics } = require('glyphalyze')
```

## API

### `TextCounter`

Create one with `new TextCounter(text)`.

| Method              | Returns                  | Description                                                                       |
| ------------------- | ------------------------ | --------------------------------------------------------------------------------- |
| `countCharacters()` | `number`                 | Number of characters, including spaces and line breaks. Each emoji counts as one. |
| `countWords()`      | `number`                 | Number of words. Punctuation is ignored.                                          |
| `countSentences()`  | `number`                 | Number of sentences.                                                              |
| `wordFrequency()`   | `Record<string, number>` | Each word in lowercase, with the number of times it occurs.                       |

### `TextStatistics`

Create one with `new TextStatistics(text)`.

| Method                        | Returns  | Description                                                          |
| ----------------------------- | -------- | -------------------------------------------------------------------- |
| `avgWordLength()`             | `number` | Average number of characters per word. `0` if there are no words.    |
| `avgSentenceLength()`         | `number` | Average number of words per sentence. `0` if there are no sentences. |
| `readingTime(wordsPerMinute)` | `number` | Estimated reading time **in seconds** at the given reading speed.    |

### `Tokenizer`

Lower-level class used by the classes above. Use it if you need the words, characters or sentences themselves rather than counts.

| Method                | Returns    | Description                                 |
| --------------------- | ---------- | ------------------------------------------- |
| `getWords(text)`      | `string[]` | The words in `text`, without punctuation.   |
| `getCharacters(text)` | `string[]` | The characters in `text`, including spaces. |
| `getSentences(text)`  | `string[]` | The sentences in `text`.                    |

## Known limitations

- A single line break inside a sentence splits it into two sentences. This affects hard-wrapped text, such as Project Gutenberg books.
- Abbreviations such as `Mr.` end a sentence.
- `readingTime()` does not validate its input. `0` returns `Infinity` and a negative number returns a negative time.

## Development

```bash
npm install
npm run test:run   # run the unit tests
npm run test-app   # run the test app on test-app/test.txt
npm run lint       # check code style
```

See [TEST_REPORT.md](TEST_REPORT.md) for what is tested and the results.

## Contributing

Found a bug or have an idea? Open an [issue](https://github.com/Twodrop/glyphalyze/issues) on GitHub.

## License

Released into the public domain under the [Unlicense](LICENSE).
