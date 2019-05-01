const expect = require('expect.js');
const buildFullName = require('./index');

describe('buildFullName', () => {
    it('should build full name from valid first and last', () => {
        const fn = buildFullName('First', 'Name ');

        expect(fn).to.equal('First Name');
    });
});
