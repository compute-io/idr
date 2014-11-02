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

var quantile = require( 'compute-quantile' );


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
* FUNCTION: idr( arr[, sorted] )
*	Computes the interdecile range for an array.
*
* @param {Array} arr - array of values
* @param {Boolean} [sorted] - boolean flag indicating if the input array is sorted
* @returns {Number} interdecile range
*/
function idr( arr, sorted ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'idr()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 && typeof sorted !== 'boolean' ) {
		throw new TypeError( 'idr()::invalid input argument. Second argument must be a boolean.' );
	}
	var opts = {
		'sorted': true
	};
	if ( !sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
	}
	return quantile( arr, 0.90, opts ) - quantile( arr, 0.10, opts );
} // end FUNCTION idr()


// EXPORTS //

module.exports = idr;
