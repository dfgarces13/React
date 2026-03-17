import { describe, expect, test, vi } from 'vitest'
import { FirstStepsApp } from './FirstStepsApp'
import { render, screen } from '@testing-library/react'


const mockItemCounter = vi.fn((_props: unknown) => {
    return <div  data-testid="ItemCounter" />
});

vi.mock('./shopping-cart/itemCounter', () => ({
    itemCounter: (props:unknown) => mockItemCounter(props),
}));


// vi.mock('./shopping-cart/itemCounter', () => ({
//     ItemCounter: (props: unknown) => (
//         <div  data-testid="ItemCounter" name={props.name} cantidad={props.cantidad}/>
//     ),
// }));

describe('FirstStepApp', () => {

    // test('should match snapshot', () => {
    //     const { container } =  render(<FirstStepsApp />);
    //     expect(container).toMatchSnapshot();
    // });

    test('should render the correct number of ItemCounter', () => {
        render(<FirstStepsApp/>);
        

        const itemCounters = screen.getAllByTestId('ItemCounter');

        console.log(itemCounters.length);
        expect(itemCounters.length).toBe(3);

        screen.debug();

    })
})