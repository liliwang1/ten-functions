"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(a) {
    return a === true;
}

function isFalse(b) {
    return b === false;
}

function not(c) {
    return !c;
}

function addOne(d) {
    return Number(d) + 1;
}

function isEven(e) {
    return parseInt(e) % 2 === 0;
}

function isIdentical(f, g) {
    return f === g;
}

function isEqual(h, i) {
    return h == i;
}

function or(j, k) {
    return j || k;
}

function and(l, m) {
    return l && m;
}

function concat(n, o) {
    return n.toString() + o.toString();
}