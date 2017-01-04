import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'googleButton',
  template: require('./googleButton.component.html'),
  styles: [require('./googleButton.component.scss')]
})
export class GoogleButton {
  private unsubscribe:any;
  @Input() code:String;

  constructor(@Inject('AppStore') private appStore: any){
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
    });
  }

  private ngOnInit(){
      console.log("code", this.code);
  }

  private ngOnDestroy(){
    this.unsubscribe();
  }
}
