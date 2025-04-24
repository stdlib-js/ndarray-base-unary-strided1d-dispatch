/** @license Apache-2.0 */

'use strict';

/**
* Constructor for applying a strided function to an input ndarray.
*
* @module @stdlib/ndarray-base-unary-strided1d-dispatch
*
* @example
* var base = require( '@stdlib/stats-base-ndarray-cumax' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var ndarray2array = require( '@stdlib/ndarray-to-array' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var UnaryStrided1dDispatch = require( '@stdlib/ndarray-base-unary-strided1d-dispatch' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var table = {
*     'default': base
* };
* var cumax = new UnaryStrided1dDispatch( table, [ idt ], odt, policy );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = cumax.apply( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ -1.0, 2.0, 2.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
