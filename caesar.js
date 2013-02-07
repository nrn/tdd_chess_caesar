// caesar.js
module.exports = caesar

var characters = ['a','b'];

function caesar (rotation, char) {
  var currentIndex = characters.indexOf(char)
  return characters[currentIndex + rotation];
}
