
function greet(name: string):string{
    return `hola ${name}`
}

const message = greet('Goku');
const greet2 = (name: string): string => {
    return `hola ${name}`
}
const greet3 = (name: string): string => `hola ${name}`;


const message2 = greet2('Vegeta');
const message3 = greet2('Gohan');

console.log(message);
console.log(message2);
console.log(message3);


interface User {
    uid: string;
    userName: string;
}


function getUser(): User{
    return{
        uid: '456',
        userName: 'Danko',
    };
}

const getUser2 = () => {
        return{
                uid: 123,
                userName: 'Kaira',
        };
}

const getUser3 = () => ({
        
                uid: 123,
                userName: 'Cindy',
        });


console.log(getUser());
console.log(getUser2());
console.log(getUser3());

const myNumbers: number[] = [1,2,3,4,5];

// myNumbers.forEach(function (value){
//     console.log({value});
// });


// myNumbers.forEach( (value) => {
//     console.log({value});
// });

myNumbers.forEach(console.log);

myNumbers.forEach((value, index, arr) => {
    console.log(value, index, Array);
});
