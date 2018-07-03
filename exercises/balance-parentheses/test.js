let chai = require('chai');
let assert = chai.assert;
let parentheses = require('./app')

describe("Given a string including parentheses, write a function that determines if parenthesis are balanced", ()=>{
    it("returns true if every opening parenthesis has a closing parenthesis", ()=> {
        assert.equal(parentheses("(())"), true)
    })
    it("returns false if every closing parenthesis does not have a opening parenthesis", ()=> {
        assert.equal(parentheses("()))"), false)
    })
    it("returns false if a closing parenthesis is not at the end", ()=> {
        assert.equal(parentheses("())("), false)
    })
})

