//FIX to the error : "expect is not defined"
var expect = chai.expect;


//describe Telefilm tests
describe('Telefilm', function() {
//Before the execution, initialize the object
  before(function() {
     this.telefilm = new Telefilm("Scrubs", ["John Dorian"]);
  });
  //LIst of tests
  it('should be able to init new telefilm object', function() {
    expect(this.telefilm).to.exist;
  });

  it('should be able to get characters', function() {
    expect(this.telefilm.getCharacters()).to.ok;
  });

  it('should be able to get name', function() {
    expect(this.telefilm.getName()).to.ok;
  });

  it('should be able to add character', function(){
      var telefilmAdd= new Telefilm("Scrubs",[]);
      telefilmAdd.addCharacter("Elliot Reid");
      expect(telefilmAdd.getCharacters().length).to.be.equals(1);
  })
});
