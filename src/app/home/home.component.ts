import { Component, Inject } from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')]
})
export class Home {
  private unsubscribe;
  private cpt=0;

  constructor(@Inject('AppStore') private appStore){
    
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.cpt = state.cpt;
    });
  }

  private ngOnDestroy(){
    this.unsubscribe();
  }
}
