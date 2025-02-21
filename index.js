"use strict";
var foo;
(function (foo) {
    foo.bar = 1;
})(foo || (foo = {}));
console.log(foo.bar);
