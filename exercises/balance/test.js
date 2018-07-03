let chai = require('chai');
let assert = chai.assert;
let parentheses = require('./app')

describe("Given a string including parentheses, write a function that determines if parenthesis are balanced", ()=>{
    it("returns true if every opening parenthesis has a closing parenthesis", ()=> {
        assert.equal(parentheses("(())"), true)
    })
    it("returns true if every opening parenthesis has a closing parenthesis", ()=> {
        assert.equal(parentheses("()))"), false)
    })
    it("returns true if every opening parenthesis has a closing parenthesis", ()=> {
        assert.equal(parentheses("())("), false)
    })
})

