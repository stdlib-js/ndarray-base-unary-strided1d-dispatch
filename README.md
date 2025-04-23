<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# UnaryStrided1dDispatch

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Constructor for applying a strided function to an input ndarray.



<section class="usage">

## Usage

```javascript
import UnaryStrided1dDispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-strided1d-dispatch@deno/mod.js';
```

#### UnaryStrided1dDispatch( table, idtypes, odtypes, policy )

Constructor for applying a strided function to an input ndarray.

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@deno/mod.js';

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = new UnaryStrided1dDispatch( table, [ dtypes ], dtypes, policy );
```

The constructor has the following parameters:

-   **table**: strided function dispatch table. Must have a `'default'` property and a corresponding strided function. May have additional properties corresponding to specific data types and associated specialized strided functions.
-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.
-   **odtypes**: list of supported input data types.
-   **policy**: output data type policy.

#### UnaryStrided1dDispatch.prototype.apply( x\[, ...args]\[, options] )

Applies a strided function to a provided input ndarray.

```javascript
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@deno/mod.js';

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = new UnaryStrided1dDispatch( table, [ dtypes ], dtypes, policy );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = unary.apply( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ -1.0, 2.0, 2.0 ]
```

The method has the following parameters:

-   **x**: input ndarray.
-   **...args**: additional input ndarray arguments (_optional_).
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform an operation.
-   **dtype**: output ndarray data type. Setting this option, overrides the output data type policy.

By default, the method returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

```javascript
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@deno/mod.js';
import getDType from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@deno/mod.js';

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = new UnaryStrided1dDispatch( table, [ dtypes ], dtypes, policy );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = unary.apply( x, {
    'dtype': 'float64'
});
// returns <ndarray>

var dt = getDType( y );
// returns 'float64'
```

#### UnaryStrided1dDispatch.prototype.assign( x\[, ...args], out\[, options] )

Applies a strided function a provided input ndarray and assigns results to a provided output ndarray.

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';

var idt = dtypes( 'real_and_generic' );
var odt = idt;
var policy = 'same';

var table = {
    'default': base
};
var unary = new UnaryStrided1dDispatch( table, [ idt ], odt, policy );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 0.0, 0.0, 0.0 ];
var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );

var out = unary.assign( x, y );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ -1.0, 2.0, 2.0 ]

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input ndarray.
-   **args**: additional input ndarray arguments (_optional_).
-   **out**: output ndarray.
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform an operation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output data type policy only applies to the `apply` method. For the `assign` method, the output ndarray is allowed to have any data type.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-cumax@deno/mod.js';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@deno/mod.js';
import dtype from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';
import UnaryStrided1dDispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-strided1d-dispatch@deno/mod.js';

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_and_generic' );

// Define the policy mapping an input data type to an output data type:
var policy = 'same';

// Define a dispatch table:
var table = {
    'default': base
};

// Create an interface for performing a reduction:
var cumax = new UnaryStrided1dDispatch( table, [ idt ], odt, policy );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, -10, 10, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Perform operation:
var y = cumax.apply( x, {
    'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-unary-strided1d-dispatch.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-unary-strided1d-dispatch

[test-image]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-unary-strided1d-dispatch/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-unary-strided1d-dispatch?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-unary-strided1d-dispatch.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-unary-strided1d-dispatch/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/blob/main/branches.md

</section>

<!-- /.links -->
