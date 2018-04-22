const TokenGenerator = require('../src/token.generator');

describe('[Token UUID Generator]', function() {

    let uuid;
    beforeEach(function() {
        uuid = new TokenGenerator();
    });

    it('should generate token with length 11', function() {
        const token = uuid.generate();
        expect(token).toBeDefined();
        expect(token.length).toBe(11); // AAA-AAA-AAA
    });

    it('should generate tokens with only uppercase, numbers, without 0, 1, I, L and O. Ex.: ABC-G2K-Z9X', function() {
        const acceptedAlpha = 'ABCDEFGHJKMNPQRSTUVWXYZ';
        const acceptedNumbers = '23456789';
        const chunck = '[' + acceptedAlpha + acceptedNumbers + ']{3}';
        const separator = '-';
        const pattern = '^' + chunck + separator + chunck + separator + chunck + '$';
        for (let i = 0; i < 10; i++) {
            const regExp = new RegExp(pattern, 'g'); // g = global
            const token = uuid.generate();
            const actual = regExp.test(token);
            expect(actual).toBeTruthy('token: ' + token);
        }
    });

    it('should be able to generate random id\'s based on internal counter', function() {
        const uidCollection = [];
        uidCollection.push(uuid.randomUUID(6));
        uidCollection.push(uuid.randomUUID(7));
        uidCollection.push(uuid.randomUUID(10));

        expect(uidCollection[0].length).toBe(6);
        expect(uidCollection[1].length).toBe(7);
        expect(uidCollection[2].length).toBe(10);

        expect(uidCollection[0] !== uidCollection[1]).toBeTruthy();
        expect(uidCollection[0] !== uidCollection[2]).toBeTruthy();
        expect(uidCollection[1] !== uidCollection[0]).toBeTruthy();
        expect(uidCollection[1] !== uidCollection[2]).toBeTruthy();
        expect(uidCollection[2] !== uidCollection[0]).toBeTruthy();
        expect(uidCollection[2] !== uidCollection[1]).toBeTruthy();
    });

});
