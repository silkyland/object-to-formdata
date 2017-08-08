'use strict';

var _expect = require('chai').expect;

var _es = require('../es5');

var _formdata = require('formdata');

describe("Object to formdata", function () {
    it("Should be formdata", function () {
        var ex = {
            a: 0,
            b: false,
            c: undefined,
            d: NaN,
            e: 1
        };
        var example = _es(ex);
        var exampleAnswer = new _formdata();
        exampleAnswer.append('a', 0);
        exampleAnswer.append('b', false);
        exampleAnswer.append('c', undefined);
        exampleAnswer.append('d', NaN);
        exampleAnswer.append('e', 1);
        _expect(example[3])
            .to
            .equal(exampleAnswer[3])
    });
});