import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
    
  count = 0;
  counte = 0;

  countOffTeamA = 0;

  countOffTeamB = 0;

  constructor(private service: HomeService, public alertController: AlertController, private route: Router) {
    this.count=this.service.count;
    this.counte = this.service.counte;

    this.countOffTeamA = this.service.countOffTeamA;
    this.countOffTeamB = this.service.countOffTeamB;
   }

  ngOnInit() {
  }
  goHome() {
    this.route.navigateByUrl('home');
  }

  goCounter(){
    this.service.counter();
 
  // this.count = this.count + 1;
  this.count=this.service.count;
 }
 goCounta(){
this.service.counte  
  // this.counte = this.counte + 1;
  this.counte = this.service.counte;
  }


  goOffTeamA(){
    this.service.offTeamA();
    this.countOffTeamA = this.service.countOffTeamA;
 }

 goOffTeamB(){
   this.service.offTeamB();
   this.countOffTeamB = this.service.countOffTeamB;
 }

}
