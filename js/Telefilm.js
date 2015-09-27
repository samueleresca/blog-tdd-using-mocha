/*
*SIMPLE CLASS: describes telefilms
*/
var Telefilm = function (name, characters) {

    this.name = name;
    this.characters = characters;
};


Telefilm.prototype.getName = function () {
  return this.name;
};
Telefilm.prototype.getCharacters = function () {
  return this.characters;
};
Telefilm.prototype.addCharacter = function (character) {
  return  this.characters.push(character);
};
