import { Component } from '@angular/core';
import { ApiService } from 'src/apiservice';
import { DataService } from 'src/data-service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  userProfile: any;

  constructor(public api:ApiService,
    private dataService: DataService){}

  ngOnInit(){
    // this.getProfile();
    this.dataService.users.subscribe((res: any) =>{
      this.userProfile = res[0];
    });
  }

  // getProfile(){
  //   this.api.getProfileDetails().subscribe((ref)=>{
  //     this.profileData = ref;
  //     // console.log(ref);
  //   });
  // }

  notify =[
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugb_Bwq4G4QY6V11WR8dMyDTJnX6JbleZ1A&usqp=CAU', name:'Diane Chiang', company:'Paytm',time:'8 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTXTE3FBqvPGLwVwasuF4iHYpSa01U9YkfA&usqp=CAU', name:'Aastha Malhotra', company:'Paypal',time:'16 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4RwbwLMKupTfn2mhwyOUkjD0clloiwTKBQ&usqp=CAU', name:'Sibaji Patnaik', company:'Volvo Group',time:'7 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVaYCtrXlbqrWBuXvFqzTAGM6MP3wk2aCcw&usqp=CAU', name:'Kalinda Raina', company:'Microsoft',time:'5 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugb_Bwq4G4QY6V11WR8dMyDTJnX6JbleZ1A&usqp=CAU', name:'Diane Chiang', company:'Paytm',time:'8 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTXTE3FBqvPGLwVwasuF4iHYpSa01U9YkfA&usqp=CAU', name:'Aastha Malhotra', company:'Paypal',time:'16 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4RwbwLMKupTfn2mhwyOUkjD0clloiwTKBQ&usqp=CAU', name:'Sibaji Patnaik', company:'Volvo Group',time:'7 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVaYCtrXlbqrWBuXvFqzTAGM6MP3wk2aCcw&usqp=CAU', name:'Kalinda Raina', company:'Microsoft',time:'5 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugb_Bwq4G4QY6V11WR8dMyDTJnX6JbleZ1A&usqp=CAU', name:'Diane Chiang', company:'Paytm',time:'8 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTXTE3FBqvPGLwVwasuF4iHYpSa01U9YkfA&usqp=CAU', name:'Aastha Malhotra', company:'Paypal',time:'16 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4RwbwLMKupTfn2mhwyOUkjD0clloiwTKBQ&usqp=CAU', name:'Sibaji Patnaik', company:'Volvo Group',time:'7 hours'
    },
    {
      id:0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVaYCtrXlbqrWBuXvFqzTAGM6MP3wk2aCcw&usqp=CAU', name:'Kalinda Raina', company:'Microsoft',time:'5 hours'
    },
  ]

}
