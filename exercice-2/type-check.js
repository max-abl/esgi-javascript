// Exercice 2

// 1 - Vérifie le type de l'objet passé en param
function type_check_v1(obj, type) {
  if (typeof type !== "string") return null;
  if (type === "null") return obj === null;
  if (type === "array") return Array.isArray(obj);
  return typeof obj === type;
}

// 2 - Vérifie le type de l'objet passé en param
function type_check_v2(obj, conf) {
  if (conf.hasOwnProperty("type")) {
    if (conf.hasOwnProperty("value"))
      return conf.value == obj && type_check_v1(obj, conf.type);
    else return type_check_v1(obj, conf.type);
  } else if (conf.hasOwnProperty("enum")) return conf.enum.includes(obj);
  return false;
}

// 3 - Vérification de type récursif
function type_check(val, check) {
  return false;
}

// ========================================================
//                      TESTS
// ========================================================

var test = {
  properties: {
    prop1: { type: "number" },
    prop2: { type: "string", enum: ["val1", "val2"] },
    prop3: { type: "object", properties: { prop31: "number" } },
    prop4: { type: "array", properties: ["boolean"] }
  }
};

console.log("--- TYPE_CHECK_V1 ---");
console.log(type_check_v1(1, "number"));
console.log("--- TYPE_CHECK_V2 ---");
console.log(type_check_v2(1, { type: "number", value: 1 }));
console.log(type_check_v2("foo", { enum: ["foo", "bar", 3] }));
console.log(type_check("azerty", test));
