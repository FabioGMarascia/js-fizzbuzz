let i = prompt("Inserisci numero");

if (i % 3 == 0 && i % 5 == 0) {
	console.log("È divisibile per entrambi");
} else if (i % 3 == 0) {
	console.log("È divisibile solo per 3");
} else if (i % 5 == 0) {
	console.log("È divisibile solo per 5");
} else {
	console.log("Non è divisibile per nessuno dei due");
}
