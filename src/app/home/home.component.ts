import {Component, Inject, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HomeActions} from "./action";
import {HomeService} from "./home.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.scss')],
    providers: [HomeActions, HomeService]
})
export class Home implements OnInit, OnDestroy {
    private appStoreSub: any;
    private routerSub: Subscription;
    private cpt = 0;
    private code: string;

    constructor(@Inject('AppStore') private appStore: any, private actions: HomeActions, private route: ActivatedRoute, private router: Router) {

        this.appStoreSub = this.appStore.subscribe(() => {
            let state = this.appStore.getState();
            this.cpt = state.home.cpt;
        });
    }

    ngOnInit() {
        /*this.routerSub = this.router.routerState.queryParams.subscribe(queryParams => {
         this.code = queryParams["code"];
         });*/
    }

    ngOnDestroy() {
        this.appStoreSub();
        /*this.routerSub();*/
    }

    private clickButton() {
        this.appStore.dispatch(this.actions.fetchData());
    }
}
