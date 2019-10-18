import {setDefaultTimeout, setWorldConstructor} from "cucumber";
import {AppTestFacade} from "./AppTestFacade";


setDefaultTimeout(90 * 1000);
setWorldConstructor(AppTestFacade);
