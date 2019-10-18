import {Given, Then, When} from 'cucumber'
import {IAppTestFacade} from "../framework";
import {assert} from 'chai';

Given(/^the age group of (\d+) to (\d+)$/, function (ageStart, ageEnd) {
    let facade = this as IAppTestFacade;
    let dietFixture = facade.fixtures().getDietFixture();
    assert.isNotNull(dietFixture);
    assert.equal(dietFixture.getDietRecommendations(ageStart, ageEnd), '');
});

When(/^their weight is less than normal$/, function () {

});

Then(/^the recommended foods are apple, orange, nuts$/, function () {

});
