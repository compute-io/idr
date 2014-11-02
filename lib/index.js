/**
*
*	COMPUTE: idr
*
*
*	DESCRIPTION:
*		- Computes the interdecile range for an array of values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	quantile = require( 'compute-quantile' );


// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Comparator function used to sort values in ascending order.
*
* @private
* @param {Number} a
* @param {Number} b
* @returns {Number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()


// INTERDECILE RANGE //

/**
* FUNCTION: idr( arr[, opts] )
*	Computes the interdecile range for an array.
*
* @param {Array} arr - array of values
* @param {Object} [opts] - quantile options
* @returns {Number} interdecile range
*/
function idr( arr, opts ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'idr()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'idr()::invalid input argument. Options should be an object.' );
		}
	} else {
		opts = {
			'sorted': false
		};
	}
	if ( !opts.sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
		opts.sorted = true;
	}
	return quantile( arr, 0.90, opts ) - quantile( arr, 0.10, opts );
} // end FUNCTION idr()


// EXPORTS //

module.exports = idr;
