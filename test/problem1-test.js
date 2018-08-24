var expect = require('chai').expect
var problem1 = require('../problem1.js')

describe('checkSimilarityAddress()', function() {
  it('should return 0.5 on addresses that has 50% similarity', function() {
    var string1 = 'jalan abc nomor 2 jakarta indonesia';
    var string2 = 'jalan bca nomor 3 jakarta indonesia';
    var ans = problem1.checkSimilarityAddress(string1, string2);
    expect(ans).to.equal(0.5);
  });
  it('should return 0 on addresses that are not similar', function() {
    var string1 = 'jalan abc nomor 2 new york usa';
    var string2 = 'jalan bca nomor 3 jakarta indonesia';
    var ans = problem1.checkSimilarityAddress(string1, string2);
    expect(ans).to.equal(0);
  });
  it('should return similar even if abbreviated', function() {
    var string1 = 'jln abc no 2 jakarta indonesia';
    var string2 = 'jl abc no. 2 jakarta indonesia';
    var ans = problem1.checkSimilarityAddress(string1, string2);
    expect(ans).to.equal(1);
  });
  it('should return 50% similar if one adress is longer but matches', function() {
    var string1 = 'jln abc';
    var string2 = 'jl abc def';
    var ans = problem1.checkSimilarityAddress(string1, string2);
    expect(ans).to.equal(0.5);
  })
});
