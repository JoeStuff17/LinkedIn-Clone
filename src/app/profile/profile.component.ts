import { Observable, Subscriber } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/apiservice';
import { DataService } from 'src/data-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  profileCards: any = [{
    title: 'Experience',
    data: [{
      title: 'Software Engineer',
      company: 'ReadyAssist - 24/7 Roadside Assistance · Full-time',
      logo: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/ra_logo.jpeg',
      started: 'Nov 2022',
      ended: 'Present',
      duration: '1 yr 2 mos',
      location: 'Bengaluru Karnataka India',
      skills: [{ name: 'MongoDB' }, { name: 'Tailwind CSS' }, { name: 'Angular' }, { name: 'NestJS' }, { name: 'MySQL' }]
    },
    {
      title: 'Teacher', company: 'vision trust international', logo: 'data:image/jpeg;base64,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', started: 'Jun 2016 ', ended: 'Nov 2022', duration: '6 yrs 6 mos', location: 'kovalam, Tamilnadu, India',
      skills: [{ name: 'LeaderShip' }]
    }]
  },
  {
    title: 'Education', data: [{
      title: 'Tamil Nadu Open University, Chennai',
      logo: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/tnou_logo.jpeg',
      company: 'Master of Computer Applications - MCA, Computer Science',
      started: 'Jun 2019', ended: 'Jun 2021', duration: '2 yr',
      skills: [{ name: 'DBMS' }, { name: 'SQL' }]
    },
    {
      title: 'Patrician College Of Arts And Science, Chennai',
      logo: 'data:image/jpeg;base64,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',
      company: 'Bachelor of Computer Applications - BCA',
      started: 'Jun 2015 ', ended: 'Apr 2018', duration: '3 yrs',
      skills: [{ name: 'Communication skills' }, { name: 'Punctuality' }]
    }]
  },
];

  constructor(public dialog: MatDialog,
    public api: ApiService,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    // this.getProfile();
    this.dataService.users.subscribe((res: any) => {
      this.userProfile = res[0];
    });
  }

  // getProfile() {
  //   this.api.getProfileDetails().subscribe((res) => {
  //     this.profileData = res;
  //   });
  // }

  openPost(): void {
    this.dialog.open(ProfileDialogComponent, {
      disableClose: false,
      width: '750px',
      height: '780px',
      position: { top: '4%' },
      data: this.userProfile
    });
  }

}


@Component({
  selector: 'app-profile',
  templateUrl: './profileDialog.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileDialogComponent implements OnInit {
  id: any;

  profileForm: FormGroup = this.fb.group({
    image: [''],
    profileName: [''],
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
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    public api: ApiService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // this.profileForm.patchValue((val: any)=>{
    //   val.profileName = this.api.getProfileDetails['name']
    // })
    // this.api.getProfileDetails().subscribe((res) => {

    //   // this.id = res[0].id;
    //   // console.log(this.id );
    //   this.profileForm.patchValue({
    //     profileName: res[0].name,
    //     dob: res[0].dob,
    //     phone: res[0].phone,
    //     email: res[0].email,
    //     qualification: res[0].Qualification,
    //     interest: res[0].interests,
    //     work: res[0].organization,
    //     skill: res[0].skills,
    //     location: res[0].location,
    //   });
    // });
    this.profileForm.patchValue({
      profileName: data['name'],
      dob: data.dob,
      phone: data.phone,
      email: data.email,
      qualification: data.qualification,
      interest: data.interests,
      work: data.organization,
      skill: data.skills,
      location: data.location,
    });
  }

  onConfirmClick() {
    // const payload = {
    //   name: this.profileForm.get('profileName')?.value,
    //   dob: this.profileForm.get('dob')?.value,
    //   phone: this.profileForm.get('phone')?.value,
    //   email: this.profileForm.get('email')?.value,
    //   Qualification: this.profileForm.get('qualification')?.value,
    //   interests: this.profileForm.get('interest')?.value,
    //   organization: this.profileForm.get('work')?.value,
    //   skills: this.profileForm.get('skill')?.value,
    //   location: this.profileForm.get('location')?.value,
    //   // id: this.id
    // }
    // this.api.updateProfile(payload).subscribe((msg) => {
    //   // console.log(msg);
    // });
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
      // console.log(d);
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

  // getProfile() {
  //   this.api.getProfileDetails().subscribe((res) => {
  //     this.profileData = res;
  //     // console.log(res);
  //   });
  // }

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


