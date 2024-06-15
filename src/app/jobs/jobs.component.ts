import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {

  list = [
    {
      id: 0, sug: 'software engineer'
    },
    {
      id: 0, sug: 'senior software engineer'
    },
    {
      id: 0, sug: 'software engineer team lead'
    },
    {
      id: 0, sug: 'junior software engineer'
    },
    {
      id: 0, sug: 'software engineer technical lead'
    },
    {
      id: 0, sug: 'senior software engineer technical lead'
    },
    {
      id: 0, sug: 'senior software engineer team lead'
    }
  ];

  job = [
    {
      id: 0, img: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/paytm_logo.jpeg',
      title: 'Frontend-Softwere Engineer',
      company: 'Paytm',
      time: '8 hours'
    },
    {
      id: 0, img: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/paypal_logo.jpeg',
      title: 'Softwere Engineer',
      company: 'Paypal',
      time: '16 hours'
    },
    {
      id: 0, img: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/volvo_group_logo.jpeg',
      title: '.Net Softwere Engineer',
      company: 'Volvo Group',
      time: '7 hours'
    },
    {
      id: 0, img: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/microsoft_logo.jpeg',
      title: 'Softwere Engineer',
      company: 'Microsoft',
      time: '5 hours'
    },
  ];

  leftContent = [{ name: 'My jobs', icon: 'icofont-book-mark' }, { name: 'Job alerts', icon: 'icofont-alarm' },
  { name: 'Skill Assessments', icon: 'icofont-prescription' }, { name: 'Interview prep', icon: 'icofont-paper' },
  { name: 'Resume Builder', icon: 'icofont-paperclip' }, { name: 'Job seeker guidance', icon: 'icofont-youtube-play' },
  { name: 'Application settings', icon: 'icofont-ui-settings' },
  ];
}
