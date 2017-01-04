import * as actions from './action';

const initialState = {
    cpt : 0
};

export default function homeReducer(state = initialState, action:any){
    switch (action.type) {
        case actions.SAY_HELLO:
            state.cpt++;
            return state;
        default:
            return state;
    }
}
