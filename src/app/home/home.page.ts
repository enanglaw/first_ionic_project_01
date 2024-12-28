import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../app/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit, OnDestroy {
    personSub!:Subscription;
    personList:any[]=[];
  constructor(private personService:ApiService) {}
  ngOnDestroy(){
    this.personSub.unsubscribe();
  }

  ngOnInit() {
   
   this.personSub=this.personService.personChanged.subscribe((res)=>{
     this.personList=res;
     console.log('thanks!')
     console.log(this.personList)
   })
   this.personService.getData()
  }



}
