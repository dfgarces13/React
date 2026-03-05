const myArray: (number | string)[] = [1,2,2,4,5,6];

myArray.push(10);
myArray.push(11);


const myArray2 = myArray; // creo myArray2 como referencia de myArray. Cualquier cambio que haga en uno de ellos afectara los dos

const myArray3 = [...myArray];
//const myArray3 = structuredClone(myArray);

myArray3.push(7);
myArray3.push('Hola Mundo');

console.log({myArray,  myArray2, myArray3});

/* for (const myNumber of myArray){
    console.log(myNumber + ': algo');
}


for (const myNumber of myArray){
    console.log(myNumber + 10);
} */