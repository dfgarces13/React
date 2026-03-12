import React, { useState } from 'react'

//import './itemCounter.css'
import estilo from './itemCounter.module.css'

interface Props {
    name: string;
    cantidad?: number;
};




export const ItemCounter = ({ name, cantidad = 1 }: Props) => {


    const [count, setCount] = useState(cantidad);

    const handleSuma = () => {
        setCount(count + 1);
    };

    const handleResta = () => {
        if (count === 1) return;
        setCount(count - 1);
    };


    const hancleClick = () => {
        console.log(`Click ${name}`);
    }


    return (
        <section className={estilo['itemRow']}
        //     style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop: 10,
        //     color: count === 1 ? 'red' : 'black'
        // }}
        >
            <span className={estilo['item-text']}
                style={{ color: count === 1 ? 'red' : 'black' }}
            >{name}</span>
            <button
                onMouseEnter={() => {
                    console.log(`Mouse Enter ${name}`);
                }}
                onClick={handleSuma}
            >+1</button>
            <span data-testid="span-count">{count}</span>
            <button
                onClick={handleResta}>-1</button>
        </section>
    )
}


