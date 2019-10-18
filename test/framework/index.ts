import {Fixture, ITestFacade} from "cucumber-x";
import {IAppFixtures} from "../fixtures/interfaces/IAppFixtures";


//this is global to scenarios
export interface IAppTestFacade extends ITestFacade {
    fixtures(): IAppFixtures;
}

//all your fixtures will extend this class
export class BaseFixture extends Fixture {
    constructor() {
        super();
    }

    public getFixtures(): IAppFixtures {
        return super.getFixtures() as IAppFixtures;
    }
}


