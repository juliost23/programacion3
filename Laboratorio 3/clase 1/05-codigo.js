var a =0 24;
var b = 7;

console.log("a vale "+ a+ " y b vale " + b);

console.log(`a vale ${a} y b vale ${b} numero1 + numero2= ${a+b}`);

var cantidad =2;
console.log(`hay ${cantidad} de elementos`);

var texto = "";

if (cantidad==1) {
    texto= "elemento";
} else {
    texto = "elementos";
}

// Operador condicional
texto= cantidad ==1 ? "elemento" : "elementos";
console.log(`hay ${cantidad} ELEMENTO${cantidad ==1 ? "" : "SS"}`);