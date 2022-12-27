import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/apiservice';
import { UserdialogComponent } from '../home/home.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public api: ApiService,
    public dialog: MatDialog
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
  openPost(): void {
    this.dialog.open(UserdialogComponent, {
      disableClose: false,
      width: '375px',
      height: '667px'
    });
  }
}


