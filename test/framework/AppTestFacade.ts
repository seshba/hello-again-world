import {CxConstants, TestFacade} from "cucumber-x";
import {IAppTestFacade} from "./index";
import {AppFixtures} from "../fixtures/AppFixtures";
import {IAppFixtures} from "../fixtures/interfaces/IAppFixtures";


export class AppTestFacade extends TestFacade implements IAppTestFacade {
    constructor(init: { attach: Function, parameters: { [key: string]: any } }) {
        super(init);
        this.container().inject(CxConstants.FIXTURES, AppFixtures);
    }

    fixtures(): IAppFixtures {
        return super.fixtures() as IAppFixtures;
    }
}
