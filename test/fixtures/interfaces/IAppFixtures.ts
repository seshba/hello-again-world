//all fixtures are registered and exposed thru this
import {IFixtures} from "cucumber-x";

export class FixtureTypes {
    public static readonly MY_DIET_FIXTURE = 'Type.IDietFixture';
}

export interface IAppFixtures extends IFixtures {
    getDietFixture(instanceName?: string | null): IMyDietFixture;
}

export interface IMyDietFixture {

    getDietRecommendations(ageFrom: number, ageTo: number): string;

}
