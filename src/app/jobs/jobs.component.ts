import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {

  list = [
    {
      id:0, sug:'software engineer'
    },
    {
      id:0, sug:'senior software engineer'
    },
    {
      id:0, sug: 'software engineer team lead'
    },
    {
      id:0, sug: 'junior software engineer'
    },
    {
      id:0, sug: 'software engineer technical lead'
    },
    {
      id:0, sug: 'senior software engineer technical lead'
    },
    {
      id:0, sug: 'senior software engineer team lead'
    }
  ]

    job =[
      {
        id:0, img:'https://media-exp1.licdn.com/dms/image/D4D0BAQEON9nU-K3L6w/company-logo_100_100/0/1665731624733?e=1677715200&v=beta&t=XlEmw8WEaKn6u_7D6OhYFeDuyXBqMbfL3uK0j7cwNX8', title:'Frontend-Softwere Engineer', company:'Paytm',time:'8 hours'
      },
      {
        id:0, img:'https://media-exp1.licdn.com/dms/image/C560BAQEEvjF9SDmDfg/company-logo_100_100/0/1657843479528?e=1677715200&v=beta&t=-C4qLirhvJE9TMpAJPe9CVyngW9UDDOT7yBfMJnnn9c', title:'Softwere Engineer', company:'Paypal',time:'16 hours'
      },
      {
        id:0, img:'https://media-exp1.licdn.com/dms/image/C4D0BAQF6VxeKGI-lyg/company-logo_100_100/0/1632477689832?e=1677715200&v=beta&t=ocNPDHiUoOFDs3o3NDwPFqBL1bDtB0b8W5O92O5yWyk', title:'.Net Softwere Engineer', company:'Volvo Group',time:'7 hours'
      },
      {
        id:0, img:'https://media-exp1.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1618231291419?e=1677715200&v=beta&t=JXuZLIEBt-JW9bhw0HFpARmG4FYYWNC-RxnyHdin2C0', title:'Softwere Engineer', company:'Microsoft',time:'5 hours'
      },
    ]
}
