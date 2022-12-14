import { Component } from '@angular/core';
import { ApiService } from 'src/apiservice';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  profileData: any;

  constructor(public api:ApiService){}

  ngOnInit(){
    this.getProfile();
  }

  getProfile(){
    this.api.getProfileDetails().subscribe((ref)=>{
      this.profileData = ref;
      console.log(ref);
    });
  }

  notify =[
    {
      id:0, img:'https://media-exp1.licdn.com/dms/image/D560BAQGRHOdaPHPKEQ/company-logo_100_100/0/1665765655002?e=1678320000&v=beta&t=9zQTYUwoif1OeDgo5wYB0mKiVnvsz3ZSgUaBEl6K2TM', name:'Diane Chiang', company:'Paytm',time:'8 hours'
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
      id:0, img:'https://media-exp1.licdn.com/dms/image/D560BAQGRHOdaPHPKEQ/company-logo_100_100/0/1665765655002?e=1678320000&v=beta&t=9zQTYUwoif1OeDgo5wYB0mKiVnvsz3ZSgUaBEl6K2TM', name:'Diane Chiang', company:'Paytm',time:'8 hours'
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
      id:0, img:'https://media-exp1.licdn.com/dms/image/D560BAQGRHOdaPHPKEQ/company-logo_100_100/0/1665765655002?e=1678320000&v=beta&t=9zQTYUwoif1OeDgo5wYB0mKiVnvsz3ZSgUaBEl6K2TM', name:'Diane Chiang', company:'Paytm',time:'8 hours'
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
