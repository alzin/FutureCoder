import { logFormDataValues } from '../algorithms';

describe('Form Data Logging Tests', () => {
    describe('logFormDataValues', () => {

        it('should handle FormData with non-string values', () => {
            const formData = new FormData();
            formData.append('numberField', '123'); // Use string representation of number
            formData.append('booleanField', 'true'); // Convert boolean to string
            formData.append('arrayField', JSON.stringify(['a', 'b'])); // Convert array to string

            const consoleSpy = jest.spyOn(console, 'log');

            logFormDataValues(formData);

            expect(consoleSpy).toHaveBeenCalledWith('Name: numberField, Value: 123');
            expect(consoleSpy).toHaveBeenCalledWith('Name: booleanField, Value: true');
            expect(consoleSpy).toHaveBeenCalledWith('Name: arrayField, Value: ["a","b"]');
        });

        it('should handle FormData with special characters', () => {
            const formData = new FormData();
            formData.append('special@character', 'value with @&$*()[]{}<>?/~');
            formData.append('spaceField', '   value with spaces   ');

            const consoleSpy = jest.spyOn(console, 'log');

            logFormDataValues(formData);

            expect(consoleSpy).toHaveBeenCalledWith('Name: special@character, Value: value with @&$*()[]{}<>?/~');
            expect(consoleSpy).toHaveBeenCalledWith('Name: spaceField, Value:    value with spaces   ');
        });

    });
});