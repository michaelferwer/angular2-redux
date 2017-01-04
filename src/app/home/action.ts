export const SAY_HELLO = "HELLO";

export class HomeActions {

    constructor() {}

    sayHello(){
        return {
            type : SAY_HELLO
        };
    }
}
