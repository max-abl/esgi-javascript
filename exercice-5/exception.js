
// Erreur personnalisé 
var UndefinedPropertyError = function(path, property, object){
   
    var instance = new Error(`Property ${property} not exist for path ${path}, expected on of: [available object properties]`);
    instance.name = "UndefinedPropertyError";

    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if(Error.captureStackTrace) Error.captureStackTrace(instance, UndefinedPropertyError);
    return instance;
}


// prop_access
function prop_access(object, param_path = '') {
    if (param_path === '' || param_path === null) return object;
    if (typeof (param_path) !== "string") return "";
    if (!object) return "";
    let tempObj = object;
    let path = '';
    for (let propertie of param_path.split('.')) {
        path += '.' + propertie;
        if (tempObj.hasOwnProperty(propertie)) tempObj = tempObj[propertie];
        else throw UndefinedPropertyError(param_path, propertie, object);
    }
    return tempObj
}

// class and path
path = "type.brand"
car = { 
    type: {
        brand: "Mercedes",
        model: "Class C"
    },
    engine: {
        type: "v12",
        fuel: "E10"
    }
}

// Try catch
try{
    console.log(prop_access(car, path));
}catch(error){
    if(error.name == "UndefinedPropertyError") console.log(error.message);
}