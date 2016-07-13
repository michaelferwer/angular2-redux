// App
export * from './app.component';
export * from './app.routes';
import {provide} from '@angular/core';
import {createStore} from 'redux';

import {rootReducer} from './rootReducer';
import {HelloActions} from './helloActions';

const appStore = createStore(rootReducer);

// Application wide providers
export const APP_PROVIDERS = [
    provide('AppStore', {useValue: appStore}),
    HelloActions
];
