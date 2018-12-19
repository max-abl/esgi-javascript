// Timeout
let timout = function(resolve, reject) {
    setTimeout(() => reject('timeout'), 3000);
}

// Processus
let process = function(resolve, reject){
    setTimeout(() => resolve('ok'), 5000);
}

Promise
.race([new Promise(process), new Promise(timout)])
.then((result) => console.log(result))
.catch((error) => console.log(error));