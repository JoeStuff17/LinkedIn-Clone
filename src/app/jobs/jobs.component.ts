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
      id: 0, img: 'https://media.licdn.com/dms/image/D4D0BAQHjRyMZ-FVJhg/company-logo_100_100/0/1692711640651/paytm_logo?e=1710374400&v=beta&t=9hsRWIQbOLG_JRkNkv8s66Vxk-6YWERJ3Xi8IPaCdS0', title: 'Frontend-Softwere Engineer', company: 'Paytm', time: '8 hours'
    },
    {
      id: 0, img: 'https://media.licdn.com/dms/image/D560BAQHQ0d54HKxK3A/company-logo_100_100/0/1692661378925/paypal_logo?e=1710374400&v=beta&t=YM4-KULe0t5KCXl5HSVAhoJapuuWD-euZl1haBoywKo', title: 'Softwere Engineer', company: 'Paypal', time: '16 hours'
    },
    {
      id: 0, img: 'https://media.licdn.com/dms/image/C4D0BAQF6VxeKGI-lyg/company-logo_100_100/0/1632477690193/volvo_group_logo?e=1710374400&v=beta&t=hwmWsasl_xHbZaVtI8NHJLBA3LJ15Za5M07bnAsMsQE', title: '.Net Softwere Engineer', company: 'Volvo Group', time: '7 hours'
    },
    {
      id: 0, img: 'https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=1710374400&v=beta&t=bxZEYB5wmYxJjsCtgNmE5xetj5QYKM7cLSmotwt1SSQ', title: 'Softwere Engineer', company: 'Microsoft', time: '5 hours'
    },
  ];

  leftContent = [{ name: 'My jobs', icon: 'icofont-book-mark' }, { name: 'Job alerts', icon: 'icofont-alarm' },
  { name: 'Skill Assessments', icon: 'icofont-prescription' }, { name: 'Interview prep', icon: 'icofont-paper' },
  { name: 'Resume Builder', icon: 'icofont-paperclip' }, { name: 'Job seeker guidance', icon: 'icofont-youtube-play' },
  { name: 'Application settings', icon: 'icofont-ui-settings' },
  ];
}
