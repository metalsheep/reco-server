/*global before*/
/*global describe*/
/*global it*/

var prettyRecs;

before(function() {
    prettyRecs = require('../../views/prettyRecs');
});

var expected = `<div class="rec">
    <div>hello</div>
    <div>there</div>
</div><br>`;

describe('prettyRecs', () => {
    it('should format an array of recs', done => {
        var recs = prettyRecs([{name: 'hello', description: 'there'}]);
        if(recs === expected) {
            return done();
        }
        return done(new Error('didn\'t get expected output'));
    });
});