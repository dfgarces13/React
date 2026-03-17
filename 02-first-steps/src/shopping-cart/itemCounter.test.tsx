import { describe, expect, test } from 'vitest';
import { ItemCounter } from './itemCounter';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ItemCounter', () => {

    test('should render with ddefault values', () => {
        const name = 'Test item';
        const cantidad = 10;
        render(<ItemCounter name={name} cantidad={cantidad}/>);
        // screen.debug();
        expect(screen.getByText(name)).not.toBeNull();
        expect(screen.getByText(name)).toBeDefined();
    });

    test('should increase + 1', () => {
        render(<ItemCounter name={'name'} cantidad={1}/>);

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });

    test('should decrease', () => {
        // quantity = 5
        // render(<ItemCounter name={'name'} cantidad={5}/>);

        // const [, buttonSubtract] = screen.getAllByRole('button');

        // fireEvent.click(buttonSubtract);
        // const span = screen.getByTestId('span-count').nodeValue;
        // console.log(span)
        // expect(span).toContain('4');
    });

    test('should change to red', () => {
        const name = 'Test item';
        const cantidad = 1;
        render(<ItemCounter name={name} cantidad={cantidad}/>);


        const itemTex = screen.getByText(name);
        expect(itemTex.style.color ).toBe('red');
        
    });

    test('should change to black', () => {
        const name = 'Test item';
        const cantidad = 2;
        render(<ItemCounter name={name} cantidad={cantidad}/>);


        const itemTex = screen.getByText(name);
        expect(itemTex.style.color ).toBe('black');
        
    });

})