
import { describe, expect, test} from 'vitest'
import { add, multiply, substrac } from './math.helper'


describe('add' , () => {
    test ('Test suma', () => {

        // ! 1. Arrange
        const a = 1;
        const b = 3;
        
        // ! 2. Act
        const result = add(a,b);
        


        // if (result != 2) {
        //     throw new Error ('Error')
        // }

        // ! 3. Assert
        expect(result).toBe(a + b);

    });

    

});

describe('subtract' , () => {
    test ('Test Resta', () => {

        // ! 1. Arrange
        const a = 1;
        const b = 3;
        
        // ! 2. Act
        const result = substrac(a,b);
        


        // if (result != 2) {
        //     throw new Error ('Error')
        // }

        // ! 3. Assert
        expect(result).toBe(a - b);

    });

});

describe('subtract' , () => {
    test ('Test Resta', () => {

        // ! 1. Arrange
        const a = 1;
        const b = 3;
        
        // ! 2. Act
        const result = substrac(a,b);
        


        // if (result != 2) {
        //     throw new Error ('Error')
        // }

        // ! 3. Assert
        expect(result).toBe(a - b);

    });

});


describe('multiply' , () => {
    test ('Test Multiplicacion', () => {

        // ! 1. Arrange
        const a = 1;
        const b = 3;
        
        // ! 2. Act
        const result = multiply(a,b);
        


        // if (result != 2) {
        //     throw new Error ('Error')
        // }

        // ! 3. Assert
        expect(result).toBe(a * b);

    });

    test ('Test Multiplicacion', () => {

        // ! 1. Arrange
        const a = 1;
        const b = 1;
        
        // ! 2. Act
        const result = multiply(a,b);
        


        // if (result != 2) {
        //     throw new Error ('Error')
        // }

        // ! 3. Assert
        // expect(result).toBe(a * b != 0);
        expect(result).toBe(a * b);


    });


});