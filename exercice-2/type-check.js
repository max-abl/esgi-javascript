// Exercice 2

// 1 - Vérifie le type de l'objet passé en param
function type_check_v1(obj, type) {
    if (typeof (type) !== "string")
        return null;

    if (type === 'null')
        return elem === null;

    if(type === 'array')
        return Array.isArray(obj)

    return (typeof(obj) == type);
}

// 2 - Vérifie le type de l'objet passé en param
function type_check_v2(obj, conf) {

    // On regarde l'enumeration
    if (conf.enum) {
        bool_enum = false
        conf.array.forEach(e => {
            if(e == conf.enum){
                bool_enum = true
            }
        });
    }

    if(conf.type)
        bool_type = type_check_v1(obj, conf["type"])

    if(conf.value)
        bool_value = obj == conf.value

    return (bool_enum || (bool_type && bool_value))
}


// ========================================================
//                      TESTS
// ========================================================

console.log(type_check_v1(1, "number"))