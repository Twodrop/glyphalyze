# Test Report


## Summary

I have chosen to use unit testing using Vitest. To me this was the most obvious solution since the functions are pure: they have no side effects and always return the same output for the same input. That means each test only needs a fixed input and an expected value calculated by hand, without any setup or mocking, and the tests can run in any order. This gives me the benefit of easily seeing if something breaks during development. I would testing each function was more or less equally hard, other than for obejcts i had to use `toEqual(...)` rather than `toBe(...)`

### Run tests

The tests can be found `src/` *.test.ts

1. Clone repo
```bash
git clone https://github.com/Twodrop/glyphalyze.git
cd glyphalyze
```

2. Install:

```bash
npm install
```

3. Run the tests:

```bash
npm run test:run
```

### Output

![Vitest output](Vitest_Test_Report.png)

## Test Results

**Example** (shows what a filled-in row can look like — remove this example table before
submitting):

| What was tested                                                        | How it was tested                                                                                                       | Result                                                                       |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Jpeg.load(path)` returns a `Picture` instance for a valid image file. | Automated unit test (Vitest): loaded `test-image.jpg` and checked that the return value had `getHeight()`/`getWidth()` methods. | ✅ Passed.                                                                    |
| `Picture.getPixelAt(x, y)` with coordinates outside the image.         | Manual test via the Test-App's interface: entered a coordinate pair larger than the image's width/height and observed the output. | ❌ Didn't throw an error initially — fixed, now throws a clear exception. |

**Your test results:**

| What was tested | How it was tested | Result |
| ---------------- | ------------------ | ------- |
| `TextCounter.countWords()` |                    |         |
| `TextCounter.countCharacters()` |                    |         |
| `TextCounter.countSentences()` |                    |         |
| `TextCounter.wordFrequency()` |                    |         |
| `TextStatistics.avgWordLength()` |                    |         |
| `TextStatistics.avgSentenceLength()` |                    |         |
| `TextStatistics.readingTime()` |                    |         |
| `Tokenizer.getWords()` |                    |         |
| `Tokenizer.getCharacters()` |                    |         |
| `Tokenizer.getSentences()` |                    |         |