import { isEmail, isNumber, isEmpty } from '../regexp';

describe('Validation Functions Tests', () => {
    describe('isEmail', () => {
        it('should return true for valid email formats', () => {
            expect(isEmail('test@example.com')).toBe(true);
            expect(isEmail('user.name@example.co.uk')).toBe(true);
            expect(isEmail('info@subdomain.example.com')).toBe(true);
        });

        it('should return false for invalid email formats', () => {
            expect(isEmail('test@')).toBe(false);
            expect(isEmail('@example.com')).toBe(false);
            expect(isEmail('test@example')).toBe(false);
        });

    });

    describe('isNumber', () => {
        it('should return true for valid numbers', () => {
            expect(isNumber('123')).toBe(true);
            expect(isNumber('-456')).toBe(true);
            expect(isNumber('0')).toBe(true);
            expect(isNumber('123.45')).toBe(true);
            expect(isNumber('123.45.67')).toBe(false);
        });

        it('should return false for non-number strings', () => {
            expect(isNumber('abc')).toBe(false);
            expect(isNumber('123abc')).toBe(false);
            expect(isNumber('abc123')).toBe(false);
            expect(isNumber('123.45.67')).toBe(false);
        });

        it('should handle empty string', () => {
            expect(isNumber('-')).toBe(false);
        });
    });

    describe('isEmpty', () => {
        it('should return true for empty string', () => {
            expect(isEmpty('')).toBe(true);
        });

        it('should return false for non-empty strings', () => {
            expect(isEmpty('test')).toBe(false);
            expect(isEmpty('   ')).toBe(false);
            expect(isEmpty('0')).toBe(false);
            expect(isEmpty('true')).toBe(false);
            expect(isEmpty('[]')).toBe(false);
        });

        it('should handle undefined input', () => {
            expect(isEmpty(undefined)).toBe(false);
        });
    });
});