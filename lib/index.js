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
	if ( !sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
	}
	return quantile( arr, 0.90 ) - quantile( arr, 0.10 );
} // end FUNCTION idr()

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

/**
* FUNCTION: quantile( vec, percent )
*	Finds a quantile value.
*
* @private
* @param {Array} vec - 1d array
* @param {Number} percent - quantile percent [0,1]
* @returns {Number} quantile value
*/
function quantile( vec, percent ) {
	var len = vec.length,
		id,
		val;

	// Calculate the vector index marking the quantile:
	id = ( len * percent ) - 1;

	// Is the index an integer?
	if ( id === Math.floor( id ) ) {
		// Value is the average between the value at id and id+1:
		val = ( vec[ id ] + vec[ id+1 ] ) / 2.0;
	}
	else {
		// Round up to the next index:
		id = Math.ceil( id );
		val = vec[ id ];
	}
	return val;
} // end FUNCTION quantile()


// EXPORTS //

module.exports = idr;
