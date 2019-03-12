var should = chai.should()

describe('function fizzbuzz', function () {
    it('should return Fizz if the integer cannot be divisible by 3', function () {
        let result = fizzbuzz(3)
        result.should.be.equal('Fizz')
    })
    it('should return Buzz if the integer cannot be divisible by 5', function () {
        let result = fizzbuzz(5)
        result.should.be.equal('Buzz')
    })
    it('should return FizzBuzz if the integer cannot be divisible by 3 and 5', function () {
        let result = fizzbuzz(15)
        result.should.be.equal('FizzBuzz')
    })
    it('should return an integer if the integer cannot be divisible by any integers', function () {
        let result = fizzbuzz(7)
        result.should.be.equal(7)
    })

})