import { Component, Input } from '@angular/core';
import { ApiService } from 'src/apiservice';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public api: ApiService,
    ){}

  profileData: any;
  value = 'Clear me';
  msg: any;
  showFiller = false;
 
  ngOnInit(){
    this.getProfile();
    this.api.Refresh.subscribe(response=>{
      this.getProfile();
    })
  }
  getProfile() {
      
    this.api.getProfileDetails().subscribe((res) => {
      this.profileData = res;      
    });
  }
  // clickMenu() { 
  //   this.sideNavService.toggle();
  // }
}


