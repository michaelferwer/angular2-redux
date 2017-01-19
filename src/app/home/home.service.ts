import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {

    public getData(dispatch, store, callback) {
        console.log("HTTP call");
        dispatch(callback());
    }
}
