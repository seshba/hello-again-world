import {BaseFixture} from "../framework";
import {FixtureTypes, IAppFixtures} from "./interfaces/IAppFixtures";
import {MyDietFixture} from "./MyDietFixture";


// this is just an another fixture class type but it helps you register other fixtures
export class AppFixtures extends BaseFixture implements IAppFixtures {
    constructor() {
        super();
    }

    setup() {
        this.getContainer().inject(FixtureTypes.MY_DIET_FIXTURE, MyDietFixture);
    }

    getDietFixture(instanceName?: string | null) {
        return this.createFixture(FixtureTypes.MY_DIET_FIXTURE, instanceName);
    }

    createFixture(beanName: string, instanceName?: string | null, ...args: any): any {
        let aFixture = this.getContainer().getBean<BaseFixture>(beanName, instanceName, ...args);
        aFixture.setFixtures(this);
        return aFixture;
    }

}
