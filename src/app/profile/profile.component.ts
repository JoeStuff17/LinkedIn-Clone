import { Observable, Subscriber } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/apiservice';

export interface DialogData {
  p: any;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData: any;
  p: any;


  constructor(public dialog: MatDialog,
    public api: ApiService) { }

  ngOnInit(): void {
    this.api.Refresh.subscribe(response=>{
      this.getProfile();
    })
    this.getProfile();

  }
  getProfile() {
    this.api.getProfileDetails().subscribe((res) => {
      this.profileData = res;
    });
  }

  openPost(): void {
    this.dialog.open(ProfiledialogComponent, {
      disableClose: false,
      width: '750px',
      height: '780px',
      position: { top: '4%' }
    });
  }

}


@Component({
  selector: 'app-profile',
  templateUrl: './profiledialog.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfiledialogComponent implements OnInit {
  id: any;
  
  profileForm: FormGroup = this.fb.group({
    image: [''],
    profilename: [''],
    dob: [''],
    phone: [''],
    email: [''],
    qualification: [''],
    interest: [''],
    work: [''],
    skill: [''],
    location: ['']
  });
  profileData: any;

  constructor(
    public dialogRef: MatDialogRef<ProfiledialogComponent>,
    public api: ApiService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    // console.log(data);
    // this.profileForm.patchValue((val: any)=>{
    //   val.profilename = this.api.getProfileDetails['name']
    // })
    this.api.getProfileDetails().subscribe((res) => {
      
      // this.id = res[0].id;
      // console.log(this.id );
      this.profileForm.patchValue({
        profilename: res[0].name,
        dob: res[0].dob,
        phone: res[0].phone,
        email: res[0].email,
        qualification: res[0].Qualification,
        interest: res[0].interests,
        work: res[0].organization,
        skill: res[0].skills,
        location: res[0].location,
      });
    });
  }

  onConfirmClick() {
    const payload = {
      name: this.profileForm.get('profilename')?.value,
      dob: this.profileForm.get('dob')?.value,
      phone: this.profileForm.get('phone')?.value,
      email: this.profileForm.get('email')?.value,
      Qualification: this.profileForm.get('qualification')?.value,
      interests: this.profileForm.get('interest')?.value,
      organization: this.profileForm.get('work')?.value,
      skills: this.profileForm.get('skill')?.value,
      location: this.profileForm.get('location')?.value,
      // id: this.id
    }    
    this.api.updateProfile(payload).subscribe((msg) => {
      // console.log(msg);
    });
    this.dialogRef.close();
  }

  myImage!: Observable<any>;
  base64code!: any;
  
  onChange =($event : Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    // console.log(file)
    this.convertToBase64(file)
  }

  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>) =>{
      this.readFile(file,subscriber)
    })
    observable.subscribe((d) =>{
      console.log(d);
      this.myImage = d;
      this.base64code = d;
    });
    
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = ()=>{
      subscriber.next(filereader.result);
      subscriber.complete()
    }
    filereader.onerror = ()=>{
      subscriber.error()
      subscriber.complete()
    }
  }
  ngOnInit(): void {
  }

  getProfile() {
    this.api.getProfileDetails().subscribe((res) => {
      this.profileData = res;
      // console.log(res);
    });
  }

  public imagePath : any;
  imgURL: any;
 
  preview(files: any) {
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}


