Interdecile Range
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [interdecile range](http://en.wikipedia.org/wiki/Interdecile_range) (idr) for an array of values.


## Installation

``` bash
$ npm install compute-idr
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var idr = require( 'compute-idr' );
```

#### idr( arr[, opts] )

Computes the interdecile range provided an input `array`.

``` javascript
var unsorted = [ 8, 2, 3, 9, 5, 1, 4, 10, 7, 0, 6 ];

var r = idr( unsorted );
// returns 8
```

If the input `array` is already `sorted` in __ascending__ order, set the `sorted` flag to `true`.

``` javascript
var sorted = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var r = idr( sorted, {'sorted': true} );
// returns 8
```

Additional options are the same as for the [quantile](https://github.com/compute-io/quantile) module.


## Examples

``` javascript
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
    data[ i ] = Math.round( Math.random()*100 );
}

console.log( idr( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

If the input `array` is not sorted in __ascending__ order, the function is `O( N log( N ) )`. If the input `array` is sorted, the function is `O(1)`.


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Rebekah Smith.


[npm-image]: http://img.shields.io/npm/v/compute-idr.svg
[npm-url]: https://npmjs.org/package/compute-idr

[travis-image]: http://img.shields.io/travis/compute-io/idr/master.svg
[travis-url]: https://travis-ci.org/compute-io/idr

[coveralls-image]: https://img.shields.io/coveralls/compute-io/idr/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/idr?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/idr.svg
[dependencies-url]: https://david-dm.org/compute-io/idr

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/idr.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/idr

[github-issues-image]: http://img.shields.io/github/issues/compute-io/idr.svg
[github-issues-url]: https://github.com/compute-io/idr/issues
