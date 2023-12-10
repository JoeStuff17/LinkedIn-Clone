import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/apiservice';
import { UserDialogComponent } from '../home/home.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public api: ApiService,
    public dialog: MatDialog
  ) { }
  myMenu = [{ name: 'home', icon: 'icofont-home', link: '/home', isSelect: true },
  { name: 'my network', icon: 'icofont-group', link: '/network', isSelect: false },
  { name: 'jobs', icon: 'icofont-bag-alt ', link: '/jobs', isSelect: false },
  { name: 'messaging', icon: 'icofont-comment', link: '/messaging', isSelect: false },
  { name: 'notifications', icon: 'icofont-alarm', link: '/notification', isSelect: false },
  ];
  profileData: any;
  value = 'Clear me';
  msg: any;
  showFiller = false;

  ngOnInit() {
    // this.getProfile();
    // this.api.Refresh.subscribe(response=>{
    //   this.getProfile();
    // })
  }

  // getProfile() {
  //   this.api.getProfileDetails().subscribe((res) => {
  //     this.profileData = res;
  //   });
  // }

  openPost(): void {
    this.dialog.open(UserDialogComponent, {
      disableClose: false,
      width: '375px',
      height: '667px'
    });
  }
}
