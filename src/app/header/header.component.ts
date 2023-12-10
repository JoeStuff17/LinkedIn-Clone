import { Component, Input } from '@angular/core';
import { ApiService } from 'src/apiservice';
import { DataService } from 'src/data-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public api: ApiService,
    private dataService: DataService,
  ) { }

  profileData: any;
  value = 'Clear me';
  msg: any;
  showFiller = false;
  myMenu = [{ name: 'home', icon: 'icofont-home', link: '/home', isSelect: true },
  { name: 'my network', icon: 'icofont-group', link: '/network', isSelect: false },
  { name: 'jobs', icon: 'icofont-bag-alt ', link: '/jobs', isSelect: false },
  { name: 'messaging', icon: 'icofont-comment', link: '/messaging', isSelect: false },
  { name: 'notifications', icon: 'icofont-alarm', link: '/notification', isSelect: false },
  ];

  ngOnInit() {
    this.dataService.users.subscribe((res: any) => {
      this.profileData = res[0];
    });
    // this.api.Refresh.subscribe(response => {
    //   this.getProfile();
    // })
  }

  // getProfile() {
  //   this.api.getProfileDetails().subscribe((res) => {
  //     this.profileData = res;
  //   });
  // }

  menuRouter(menu: any) {
    for (const m of this.myMenu) {
      m.isSelect = false;
    }
    const obj = this.myMenu.filter((e: any) => e.name === menu.name);
    obj[0].isSelect = true;
  }

  goTo(){
    window.open('https://www.linkedin.com/in/jothi-raj-d/', '_blank');
  }
}


