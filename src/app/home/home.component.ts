import { ApiService } from 'src/apiservice';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav')
  public sidenav!: MatSidenav;

  //variables
  companyData: any;
  profileData: any;

  ngOnInit(): void {
    this.getDetails();
    this.getProfile();
    this.api.Refresh.subscribe(response => {
      this.getDetails();
      
    })
  }

  getProfile() {
    this.api.getProfileDetails().subscribe((res) => {
      this.profileData = res;
      // console.log(res);
    });
  }

  showFiller = false;
  constructor(public dialog: MatDialog,
    public api: ApiService) {}

  openPost(): void {
    this.dialog.open(UserdialogComponent, {
      disableClose: false,
      width: '550px',
      height: '450px',
      position: { top: '4%' }
    });
  }
  getDetails() {
    this.api.getCompanyDetails().subscribe((res) => {
      this.companyData = res;
    });
  }
}

// Dialogpage-Component

@Component({
  selector: 'app-home',
  templateUrl: './userdialog.compnent.html',
  styleUrls: ['./home.component.scss']
})
export class UserdialogComponent implements OnInit {

  companyData: any;
  postForm: FormGroup = this.fb.group({
    compname: [''],
    count: [''],
    location: ['']
  });


  constructor(
    public dialogRef: MatDialogRef<UserdialogComponent>,
    public api: ApiService,
    private readonly fb: FormBuilder,
  ) { }

  onConfirmClick() {

    this.dialogRef.close();
    const payload = {
      name: this.postForm.get('compname')?.value,
      sub: this.postForm.get('count')?.value,
      source: this.postForm.get('location')?.value
    }
    this.api.addCompany(payload).subscribe((res) => {
      console.log(res);
    })

  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}

// Side-Nav-Component

