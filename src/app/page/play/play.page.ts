import {HomeService } from './../../services/home.service';
import { AlertController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {


  count = 0;
   counte = 0;
   countOffTeamA = 0;
   countOffTeamB = 0;

  constructor(private route: Router, private service: HomeService, public alertController: AlertController) {
  
  
    this.count=this.service.count;
  this.counte = this.service.counte;
  
  this.countOffTeamA = this.service.countOffTeamA;
  this.countOffTeamB = this.service.countOffTeamB;


   }
   goStats() {
    this.route.navigateByUrl('statistics');
  }

   ngOnInit() {
  }


    goCounter(){
      this.service.counter();
   
    this.count=this.service.count;
   }
   goCounta(){
     this.service.countr();
    this.counte = this.service.counte;
    }

    goCounterMinus(){
     this.service.counterMinus();
    this.count=this.service.count;
    }
    goCountaMini(){
      this.service.countaMini();
     this.counte = this.service.counte;
     }


    async goOffTeamA(){
       this.service.offTeamA();
       this.countOffTeamA = this.service.countOffTeamA;
       const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Offside',
      
        buttons: ['OK']
      });
  
      await alert.present();
    }

    async goOffTeamB(){
      this.service.offTeamB();
      this.countOffTeamB = this.service.countOffTeamB;
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Offside',

        buttons: ['OK']
      });
  
      await alert.present();
    }

    resets(){
      this.service.resets();
      this.count=this.service.count;
      this.counte = this.service.counte;
      this.countOffTeamA = this.service.countOffTeamA;
      this.countOffTeamB = this.service.countOffTeamB;
    }
   

}


