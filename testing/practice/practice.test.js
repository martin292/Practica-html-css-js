import { capitalize, reverseString, calculator, analyzeArray } from './practice';

test('Capitalize', () => {
    expect(capitalize('abc')).toBe('Abc');
});

//--------------------------------------------------------

test('Reverse string', () => {
    expect(reverseString('ABC')).toBe('CBA');
});

//---------------------------------------------------------

test('Calculator add', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('Calculator subtract', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});

test('Calculator divide', () => {
    expect(calculator.divide(10, 5)).toBe(2);
});

test('Calculator divide by 0', () => {
    expect(calculator.divide(10, 0)).toBeUndefined();
});

test('Calculator multiply', () => {
    expect(calculator.multiply(10, 2)).toBe(20);
});

//------------------------------------------------------------

test('Analyze array', () => {
    const obj = analyzeArray([1, 8, 3, 4, 2, 6]);

    expect(obj.average).toBe(4);
    expect(obj.min).toBe(1);
    expect(obj.max).toBe(8);
    expect(obj.length).toBe(6);
});