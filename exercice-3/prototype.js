// ucfirst : Premiere lettre en majuscule
String.prototype.ucfirst = function() {
  if (this.length === 0) return "";
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// capitalize : Premiere lettre de chaque mot
String.prototype.capitalize = function() {
  if (this.length === 0) return "";
  tab = this.split(" ");
  var result = "";
  tab.forEach(e => {
    result += e.ucfirst() + " ";
  });
  return result.trim();
};

// camelCase : Premiere lettre chaque mot collé
String.prototype.camelCase = function() {
  if (this.length === 0) return "";
  var result = "";
  tab = this.split(" ");
  tab.forEach(e => {
    result += e.ucfirst();
  });
  return result;
};

// snake_case : Joindre mot par underscore
String.prototype.snake_case = function() {
  return this.trim()
    .toLowerCase()
    .replace(" ", "_");
};

// leet : Cryptage conversion
String.prototype.leet = function() {
  return this.toLowerCase()
    .replace("a", "4")
    .replace("e", "3")
    .replace("o", "0")
    .replace("u", "(_)")
    .replace("y", "7");
};

// verlan : Retourne la chaine
String.prototype.verlan = function() {
  result = "";
  for (var i = this.length - 1; i >= 0; i--) {
    result += this.charAt(i);
  }
  return result;
};

// yoda : Retourne les mots
String.prototype.yoda = function() {
  tab = this.split(" ");
  var result = "";
  for (var i = tab.length - 1; i >= 0; i--) {
    result += tab[i] + " ";
  }
  return result.trim();
};

// vig : Cryptage par la methode de vigenere
String.prototype.vig = function(cle) {
  if (typeof cle !== "string") return this;

  var count = 0;
  var result = "";
  var convert_min_from_ascii = 97; // a
  var convert_max_from_ascii = 122; // z
  var chaine = this.toLowerCase();
  cle = cle.toLowerCase();

  for (var i = 0; i <= chaine.length - 1; i++) {
    if (chaine.charAt(i) != " ") {
      if (!(count < cle.length))
        // Key Checker
        count = 0;

      let addCode = cle.charCodeAt(count) - convert_min_from_ascii; // [0 - 25]
      let charCode = chaine.charCodeAt(i) + addCode; // Char to Code [97 - 122]
      if (charCode > convert_max_from_ascii)
        // > 122
        charCode = charCode - 26; // From 123+ to 97+

      result += String.fromCharCode(charCode); // Code to Char [97 - 122]
      count++; // Key counter
    } else {
      result += " ";
    }
  }
  return result;
};

// prop_access : acces aux propriétés de l'objet
Object.prototype.prop_access = function(path) {
  if (path === null || path === undefined) {
    return null;
  }
  if (this === null) {
    return null;
  }
  var input = this;
  var pathArray = path.split(".");
  for (let i = 0; i < pathArray.length; i++) {
    if (input[pathArray[i]] === undefined) {
      return null;
    }
    input = input[pathArray[i]];
  }
  return input;
};

// ======================================
//              TESTS
// ======================================

var str = "mario kart";
var obj = { animal: { type: { name: "dog" } } };
var myPath = "animal.type.name";

console.log(str.ucfirst());
console.log(str.capitalize());
console.log(str.camelCase());
console.log(str.snake_case());
console.log(str.leet());
console.log(str.verlan());
console.log(str.yoda());
console.log(str.vig("key"));
console.log(obj.prop_access(myPath));
