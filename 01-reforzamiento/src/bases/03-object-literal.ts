interface Person {
    firstName: string;
    lastName: string;
    age: number;

    // address?: {
    //     postalCode: string;
    //     city: string;
    // }
    address?: Address;


}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Diego',
    lastName: 'Garcés',
    age: 45,
    
};


const spiderman: Person = {
    firstName: "Fernando",
    lastName: "Ibañez",
    age: 22,
    address:{
        postalCode: 'ABC123',
        city: 'Cali',
    },
}

console.log(ironman, spiderman);

// const spiderman = structuredClone(ironman);


// spiderman.firstname = 'Tony';
// spiderman.adress.city = 'Bogotá';


// console.log(ironman, spiderman);