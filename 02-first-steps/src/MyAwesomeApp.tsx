import type { CSSProperties } from "react";

const firstName = 'Soy el hijo de';
const lastName = 'Vicky';

const favoriteGames = ['Gears of war', 'Zelda', 'Mario'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    phone: '123456'
};

const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    marginTop: 30
}

export function MyAwesomeApp() {



    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name">{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p
                style={myStyles}
            >{JSON.stringify(address)}</p>

        </div>


    );
}