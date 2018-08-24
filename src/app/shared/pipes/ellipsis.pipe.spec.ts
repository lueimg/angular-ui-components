import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
    let pipe = new EllipsisPipe();

    it('on empty value', () => {
        expect(pipe.transform('', 5)).toBe('');
    });

    it('on Argument is empty', () => {
        let value = 'this is a short value';
        let expected = 'this is a short value';
        expect(pipe.transform(value, undefined)).toBe(expected);
    });

    it('With value', () => {
        expect(pipe.transform('this is a short value', 5)).toBe('this ...');
    });
});
