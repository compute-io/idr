'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	idr = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-idr', function tests() {

	it( 'should export a function', function test() {
		expect( idr ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				idr( value, {} );
			};
		}
	});

	it( 'should throw an error if provided options is not an object', function test() {
		var values = [
			'5',
			5,
			[],
			undefined,
			null,
			NaN,
			function(){},
			true
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				idr( [], value );
			};
		}
	});

	it( 'should compute the interdecile range', function test() {
		var data, expected;

		// 1st decile: 2, 9th decile: 7.5,  idr: 5.5
		data = [ 6, 4, 3, 3, 5, 7, 4, 7, 8, 1 ];
		expected = 5.5;

		assert.strictEqual( idr( data ), expected );

		// Sort the data:
		data.sort( function sort( a, b ) {
			return a - b;
		});
		assert.strictEqual( idr( data, {'sorted': true} ), expected );

		// 1st decile: -2, 9th decile: 8,  idr: 10
		data = [ 3, -5, 2, 9, 6, 1, -2, 7, 7, 3, 6, 4, 8 ];
		expected = 10;

		assert.strictEqual( idr( data ), expected );
	});

});



