// Premiere lettre
function ucfirst(str) {
    if (typeof (str) !== "string")
        return "";

    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Premiere lettre chaque mot
function capitalize(str) {
    if (typeof (str) !== "string")
        return "";

    tab = str.split(" ");
    var result = "";
    tab.forEach(e => {
        result += ucfirst(e) + " ";
    });
    return result.trim();
}

// Premiere lettre chaque mot collé
function camelCase(str) {
    if (typeof (str) !== "string")
        return "";

    var result = "";
    if (typeof str == "string") {
        tab = str.split(" ");
        tab.forEach(e => {
            result += ucfirst(e);
        });
    }
    return result;
}

// Joindre mot par underscore
function snakeCase(str) {
    if (typeof (str) !== "string")
        return "";

    return str.trim().toLowerCase().replace(" ", "_");
}

// Cryptage conversion
function leet(str) {
    if (typeof (str) !== "string")
        return "";

    return str.toLowerCase().replace("a", "4").replace("e", "3").replace("o", "0").replace("u", "(_)").replace("y", "7");
}

// Retourne la chaine
function verlan(str) {
    if (typeof (str) !== "string")
        return "";

    rts = "";
    for (var i = (str.length - 1); i >= 0; i--) {
        rts += str.charAt(i);
    }
    return rts;
}

// Retourne les mots
function yoda(str) {
    if (typeof (str) !== "string")
        return "";

    tab = str.split(" ");
    var result = "";
    for (var i = (tab.length - 1); i >= 0; i--) {
        result += tab[i] + " ";
    }
    return result.trim();
}

// Vigenere
function vig(chaine, cle) {
    if (typeof (chaine) !== "string" || typeof (cle) !== "string")
        return "";

    var count = 0;
    var result = "";
    var convert_min_from_ascii = 97; // a
    var convert_max_from_ascii = 122; // z
    chaine = chaine.toLowerCase();
    cle = cle.toLowerCase();

    for (var i = 0; i <= (chaine.length - 1); i++) {
        if (chaine.charAt(i) != " ") {
            if (!(count < cle.length)) // Key Checker
                count = 0;

            let addCode = (cle.charCodeAt(count) - convert_min_from_ascii); // [0 - 25]
            let charCode = chaine.charCodeAt(i) + addCode; // Char to Code [97 - 122]
            if (charCode > convert_max_from_ascii) // > 122
                charCode = (charCode - 26); // From 123+ to 97+

            result += String.fromCharCode(charCode); // Code to Char [97 - 122]
            count++; // Key counter
        } else {
            result += " ";
        }
    }
    return result;
}

// Acces objet
function prop_access(object, param_path = '') {
    if (param_path === '' || param_path === null)
        return object;

    if (typeof (param_path) !== "string")
        return "";

    if (!object) {
        console.log(object + ' not exist');
        return "";
    }

    let tempObj = object;
    let path = '';
    for (let propertie of param_path.split('.')) {
        path += '.' + propertie;
        if (tempObj.hasOwnProperty(propertie)) {
            tempObj = tempObj[propertie];
        } else {
            console.log(path.slice(1) + ' not exist');
            return;
        }
    }

    return tempObj
}



// ========================================================
//
//                      TESTS
//
// ========================================================

var str = "hello world my name is John Doe";
var prairie = {
    animal: {
        type: {
            name: "cheval"
        }
    }
}

console.log(ucfirst(str));
console.log(capitalize(str));
console.log(camelCase(str));
console.log(snakeCase(str));
console.log(leet(str));
console.log(verlan(str));
console.log(yoda(str));
console.log(vig(str, "bigshaq"));
console.log(prop_access(prairie,"animal.type.name"));
