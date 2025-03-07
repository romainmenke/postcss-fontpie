/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { fromCssString, toCssString } from '../src/css-string.js'

test.each([
  { cssString: `'a string'`, string: `a string` },
  { cssString: `'a \\n \\' string'`, string: `a \n ' string` },
  { cssString: `"a string"`, string: `a string` },
  { cssString: `"a \\n \\" string"`, string: `a \n " string` },
])(`fromCssString: $cssString -> $string`, ({ cssString, string }) => {
  expect(fromCssString(cssString)).toBe(string)
})

test.each([
  { string: `a string`, cssString: `'a string'` },
  { string: `a \n ' string`, cssString: `'a \\n \\' string'` },
])(`toCssString: $string -> $cssString`, ({ string, cssString }) => {
  expect(toCssString(string)).toBe(cssString)
})
