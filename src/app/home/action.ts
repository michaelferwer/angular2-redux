import {Injectable} from "@angular/core";
import {HomeService} from "./home.service";

export const SAY_HELLO = "HELLO";

@Injectable()
export class HomeActions {

    constructor(private homeService: HomeService) {

    }

    sayHello() {
        return {
            type: SAY_HELLO
        };
    }

    fetchData() {
        return (dispatch, getState) => {
            //dispatch(this.sayHello());
            return this.homeService.getData(dispatch, getState, this.sayHello);
        }
    }

    receiveData(data) {
        return {
            type: "DATA",
            data
        }
    }
}
