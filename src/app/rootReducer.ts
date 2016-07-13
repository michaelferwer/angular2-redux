import * as HelloActions from './helloActions';

const initialState = {
  cpt : 0
}

export function rootReducer(state = initialState, action){
  switch (action.type) {
    case HelloActions.SAY_HELLO:
        state.cpt++;
        return state;
    default:
      return state;
  }
}
