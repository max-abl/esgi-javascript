// Premiere lettre
function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Premiere lettre chaque mot
function capitalize(str){
    tab = str.split(" ");
    var result = "";
    tab.forEach(e => {
        result += ucfirst(e) + " ";
    });
    return result.trim();
}

// Premiere lettre chaque mot collé
function camelCase(str){
    tab = str.split(" ");
    var result = "";
    tab.forEach(e => {
        result += ucfirst(e);
    });
    return result;
}

// Joindre mot par underscore
function snakeCase(str){
    return str.trim().toLowerCase().replace(" ", "_");
}

// Cryptage conversion
function leet(str){
    return str.toLowerCase().replace("a", "4").replace("e", "3").replace("o", "0").replace("u", "(_)").replace("y", "7");
}

// Retourne la chaine
function verlan(str){
    rts = "";
    for(var i = (str.length - 1); i >= 0; i--){
        rts += str.charAt(i);
    }
    return rts;
}

// Retourne les mots
function yoda(str){
    tab = str.split(" ");
    var result = "";
    for(var i = (tab.length - 1); i >= 0; i--){
        result += tab[i] + " ";
    }
    return result.trim();
}

// Tests
var str = "hello world";
console.log(ucfirst(str));
console.log(capitalize(str));
console.log(camelCase(str));
console.log(snakeCase(str));
console.log(leet(str));
console.log(verlan(str));
console.log(yoda(str));

prop_access(null, "animal.type.genre");

