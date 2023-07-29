# Why forked? (& potential alterations you'd need to use it)
Had some issues loading in the original one so I forked, compiled myself (which worked for me) and made a release so I can use it with npm.
The output library required manual initialization so before using the imported Fuzzr class you'll need to run:
```js
init()
```
Potentially you also need to supply a path to the "fuzzr_bg.wasm" file from the pkg-directory. Depending on your use-case this file might need to be loaded from a hosted source.

# Fuzzr

Fuzzr is an incredibly fast fuzzy searcher compiled for browser use. This
library is written in rust and utilizes the popular skim algorithm used in the
skim command line search. The algorithm is provided by the
[fuzzy-matcher](https://github.com/lotabout/fuzzy-matcher) crate by
[lotabout](https://github.com/lotabout). I merely provided the wasm bindings.

## Usage

``` js
const Fuzzr = (await import('fuzzr')).Fuzzr

const collection = [
  { name: 'Apple' },
  { name: 'Orange' },
  { name: 'Pineapple' },
  { name: 'Pear' }
]

const fuzzr = new Fuzzr(collection, {
  surroundResultsWith: ['<strong>', '</strong>'],
  // only necessary when not passing a collection of Strings:
  toString: ({ name }) => name,
})

fuzzr.search('Ale')
/*
[
  {
    item: { name: 'Apple' },
    score: 42,
    formatted: '<strong>A</strong>pp<strong>le</strong>'
  },
  {
    item: { name: 'Pineapple' },
    score: 42,
    formatted: 'Pine<strong>a</strong>pp<strong>le</strong>'
  }
]
*/
```

Results are ordered in descending order by score. If the score is equal, the
order of the elements in the collection is preserved.
