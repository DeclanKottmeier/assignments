var assert = require("chai").assert;

var antiCaps = require("../main.js");

var testCases = ["", "abc", "ABC", "AbC"];

describe("Testing anti-caps", function(){
    it("should return empty string", function(){
        assert.equal(antiCaps(testCases[0]), "");
    });
    it("should return ABC", function(){
        assert.equal(antiCaps(testCases[1]), "ABC");
    });
    it("should return abc", function(){
        assert.equal(antiCaps(testCases[2]), "abc");
    });
    it("should return aBc", function(){
        assert.equal(antiCaps(testCases[3]), "aBc");
    });
})