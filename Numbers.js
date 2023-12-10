var pi = 3.14;
pi.toFixed(0);             // = 3 - format a number using fixed-point notation
pi.toFixed(2);             // = 3.14
pi.toPrecision(2);         // = 3.1 -  format a number using a specified precision
pi.valueOf();              // = 3.14 - return the primitive value of a specified object
Number(true);              // = 1 - convert a value to a number
Number(new Date());        // returns number of milliseconds since 1970
parseInt("3 months");      // = 3 - parse a string and extract an integer
parseFloat("3.5 days");    // = 3.5 - parse a string and extract a float-point number
Number.MAX_VALUE           // represents the maximum positive finite value that can be represented in a JavaScript number
Number.MIN_VALUE           // represents the smallest positive numeric value that can be represented in JavaScript
Number.NEGATIVE_INFINITY   // a constant in JavaScript that represents negative infinity
Number.POSITIVE_INFINITY   // a constant in JavaScript that represents positive infinity