


const useState = (value: string) => {
    return [ value, (nuevoValor: string) => {
        console.log(nuevoValor);
    } ] as const;
}


const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"


