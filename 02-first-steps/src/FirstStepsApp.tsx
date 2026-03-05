import { ItemCounter } from "./shopping-cart/itemCounter";

interface ItemInCart {
    productName: string;
    cantidad: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo', cantidad: 10 },
    { productName: 'PlayStation', cantidad: 30 },
    { productName: 'Xbox', cantidad: 5 }
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>
            {/* <p>Esto es un párrafo !!</p>

            <button>Botón</button>

            <div>
                <h2>Hola dentro de un div</h2>

            </div> */}

            {
                itemsInCart.map(({ productName, cantidad }) =>
                    <ItemCounter key={productName} name={productName} cantidad={cantidad} />
                )

            }

            {/* <ItemCounter name="Nintendo" cantidad={10} />
            <ItemCounter name="Playstation" cantidad={30} />
            <ItemCounter name="Xbox" cantidad={5} /> */}

        </>
    );
}