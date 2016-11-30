import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloActions } from '../helloActions';
import { GoogleButton } from '../component/googleButton/';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')],
  directives : [GoogleButton]
})
export class Home {
  private unsubscribe;
  private routerSub;
  private cpt=0;
  private code:string;

  constructor(@Inject('AppStore') private appStore, private helloActions: HelloActions, private route:ActivatedRoute, private router:Router){
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.cpt = state.cpt;
    });
  }

  private ngOnInit() {
    this.routerSub = this.router.routerState.queryParams.subscribe(queryParams => {
      this.code = queryParams["code"];
    });
  }

  private ngOnDestroy(){
    this.unsubscribe();
    this.routerSub();
  }

  private clickButton(){
    this.appStore.dispatch(this.helloActions.sayHello());
  }
}
