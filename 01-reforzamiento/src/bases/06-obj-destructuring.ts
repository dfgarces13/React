const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

// const name = person.name;
// const age = person.age;
// const key = person.key;

const {key, name, age} = person;

console.log({name, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const userContext = ({key, name, age, rank}: Hero) => {
    return{
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank
    }
    
}

//const context = userContext(person);
//console.log(context);

//const { rank, keyName, name } = userContext(person);



