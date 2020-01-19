import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, {static: false}) slides: IonSlides;
  page = "login";

  public wavesPosition: number = 0;
  public wavesDiference: number = 80;

  constructor(public keyboard: Keyboard) { }
  
  ngOnInit() { }
  
  segmentChanged(event: any){
    if(event.detail.value === "login") {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDiference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDiference;
    }
  }
 
  async slideChanged() {
    //this.slides.getActiveIndex().then(item => {this.page = item == 0 ? "login" : "register"})
    let index = await this.slides.getActiveIndex()
    if(index == 0) {
      this.page = "login";
    } else {
      this.page = "register";
    }
  }

  /* funcaoGenerica (n: number) :number {
    if(n > 0){
      return n * this.funcaoGenerica(n-1)
    } else {
      return 1;
    }
  } */
}