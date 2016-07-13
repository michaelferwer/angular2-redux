export const SAY_HELLO = "HELLO";

export class HelloActions {

  constructor() {}

  sayHello(){
    return {
      type : SAY_HELLO
    };
  }
}
