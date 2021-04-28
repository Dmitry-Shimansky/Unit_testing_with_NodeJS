class NumbersValidator {
    constructor() {};

    isNumberEven(number) {
        const typeOfVariable = typeof number;
        if (typeOfVariable !== 'number') {
            throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
        } else {
            return number % 2 === 0;
        }
    };

    getEvenNumberFromArray(arrayOfNumbers) {
        if (Array.isArray(arrayOfNumbers) &&
            arrayOfNumbers.every((item) => typeof item === 'number')) {
            const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
            return arrayOfEvenNumbers;
        } else {
            throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`)
        }
    };
}

module.exports = NumbersValidator;
