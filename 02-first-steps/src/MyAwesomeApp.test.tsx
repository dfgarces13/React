import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen} from '@testing-library/react'

describe('MyAwesomeApp', () => {

    test('Should render firstName and lastName', () => {

        const { container } = render(<MyAwesomeApp/>);
        // console.log( container.innerHTML);
        // screen.debug();

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Soy el hijo de');
        // console.log(h1?.innerHTML);

        
    });

    test('Should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp/>);
        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1,
        // })
        
        const h1 = screen.getByTestId('first-name');
        console.log(h1?.innerHTML);
        expect(h1?.innerHTML).toContain('Vicky');
        
    });

});