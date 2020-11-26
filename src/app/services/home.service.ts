import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  count = 0;
  counte = 0;
  countMinus;
  countMin;

  countOffTeamA = 0;

  countOffTeamB = 0;

  constructor() { }

  counter(){
    this.count = this.count + 1;
   }
   countr(){
     this.counte = this.counte + 1;
    }

    counterMinus(){
     this.count = this.count - 1;
    }
    countaMini(){
      this.counte = this.counte - 1;
     }
     offTeamA(){
        this.countOffTeamA = this.countOffTeamA + 1;
     }

     offTeamB(){
      this.countOffTeamB = this.countOffTeamB + 1;
    }

    resets(){
      this.count = 0;
      this.counte = 0;
      this.countOffTeamA = 0;
      this.countOffTeamB = 0;
    }
}
