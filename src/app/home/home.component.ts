import { ApiService } from 'src/apiservice';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companyData: any;
  profileData: any;
  showFiller = false;
  isLoading = true;
  commentLimit = 4;
  newsLimit = 5;

  news = [{ topic: '15 Big Ideas that will shape 2024', readers: 4740, createdAt: 2 },
  { topic: 'Pricing in focus for EV firms', readers: 1345, createdAt: 3 },
  { topic: 'The Sleep Company raises $22M', readers: 876, createdAt: 5 },
  { topic: 'FinTechs lead in AI adoption', readers: 98, createdAt: 7 },
  { topic: 'Chennai floods hit businesses', readers: 456, createdAt: 9 },
  { topic: '15 Big Ideas that will shape 2024', readers: 4740, createdAt: 2 },
  { topic: 'Pricing in focus for EV firms', readers: 1345, createdAt: 3 },
  { topic: 'The Sleep Company raises $22M', readers: 876, createdAt: 5 },
  { topic: 'FinTechs lead in AI adoption', readers: 98, createdAt: 7 },
  { topic: 'Chennai floods hit businesses', readers: 456, createdAt: 9 }];
  feeds = [
    {
      user: 'ReadyAssist', description: '24/7 Vehicle Care Company', createdAt: 3, followers: 78000, isComment : false,
      profile: 'https://media.licdn.com/dms/image/D4D0BAQEoc9Pv2xzJ1A/company-logo_100_100/0/1698294724540?e=1710374400&v=beta&t=UORLM1vQfbmRjI8sYSCQrn9JHXKh4PHaWrImdCO8AcY',
      content: 'Exciting News! 🚀 ReadyAssist is thrilled to announce our support as a Silver Partner at the 8th edition of the hashtag#ETAutoEVConclave on November 29-30 at Hyatt Regency, New Delhi.',
      image: 'https://media.licdn.com/dms/image/D5622AQG7bB7TN9IUWQ/feedshare-shrink_800/0/1701148710856?e=1704931200&v=beta&t=z6v-NJtmr33WWq_ZAC0JgzPN15XsoohS-p4xcJjWixo', likes: 4565, reposts: 450, comments:
        [{ user: 'Murali', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Awesome', image: '', likes: 12 },
        { user: 'Arun', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Great Work', image: '', likes: 5 },
        { user: 'Ankit', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Congratulations', image: '', likes: 15 },
        { user: 'Nagoo', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Keep rocking.', image: '', likes: 16 },
        { user: 'Haritha', role: 'Human Resource', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Great Work', image: '', likes: 5 },
        { user: 'Akshatha', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Congratulations', image: '', likes: 15 },
        { user: 'Praveen', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Keep rocking.', image: '', likes: 16 }]
    },
    {
      user: 'Microsoft', description: 'Software Development', createdAt: 4, followers: 2100000, isComment : false,
      profile: 'https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=1710374400&v=beta&t=bxZEYB5wmYxJjsCtgNmE5xetj5QYKM7cLSmotwt1SSQ',
      content: "Find your creative spark with November's edition of The Monthly Tech-In. ✨ This month, we explore how Microsoft Copilot is revolutionizing work for everyone from the 9-to-5ers to frontline workers. We also dive into AI lingo used in todays workplace and share a pop quiz for you to put your AI knowledge to the test. ",
      image: 'https://media.licdn.com/dms/image/D5612AQH9KdL5ut-FUA/article-cover_image-shrink_423_752/0/1700684289751?e=1707350400&v=beta&t=XY7Yc_ZC_lKcLkbU8NJ6z0fxfhhQ0o1TSdF-DIWahq8', likes: 4565, reposts: 900, comments:
        [{ user: 'Murali', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Awesome', image: '', likes: 12 },
        { user: 'Arun', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Great Work', image: '', likes: 5 },
        { user: 'Ankit', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Congratulations', image: '', likes: 15 }]
    },
    {
      user: 'GeeksforGeeks', description: 'Education', createdAt: 7, followers: 1630576, isComment : false,
      profile: 'https://media.licdn.com/dms/image/C4D0BAQHa212XwpTpRw/company-logo_100_100/0/1660626687953/geeksforgeeks_logo?e=1710374400&v=beta&t=ftJPWMK1zsbI0ZsFr5vFwn67yi1m8NRraOrndjHQGx8',
      content: "feeling moye moye",
      image: 'https://media.licdn.com/dms/image/D4D22AQFZwwvxRm9zjQ/feedshare-shrink_800/0/1701254190628?e=1704931200&v=beta&t=CmR94yP8BF2fKBZKuwy19Of3YGYRmj4FRbNeghAa-2Q', likes: 4565, reposts: 90, comments:
        [{ user: 'Murali', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Awesome', image: '', likes: 12 },
        { user: 'Arun', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Great Work', image: '', likes: 5 },
        { user: 'Ankit', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Congratulations', image: '', likes: 15 },
        { user: 'Nagoo', role: 'Software Engineer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Keep rocking.', image: '', likes: 16 }]
    },]
  constructor(public dialog: MatDialog,
    public api: ApiService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.users.subscribe((res: any) => {
      this.profileData = res[0];
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
    // this.getProfile();
    // this.api.Refresh.subscribe(response => {
    //   this.getDetails();
    // });
  }

  // getProfile() {
  //   this.api.getProfileDetails().subscribe((res) => {
  //     this.profileData = res;
  //     // console.log(res);
  //   });
  // }

  openPost(): void {
    this.dialog.open(UserDialogComponent, {
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

  viewComment(i: any){
    for (const feed of this.feeds) {
      feed.isComment = false;
    }
    this.feeds[i].isComment = true;
  }
}

// Dialogpage-Component

@Component({
  selector: 'app-home',
  templateUrl: './userDialog.component.html',
  styleUrls: ['./home.component.scss']
})
export class UserDialogComponent implements OnInit {

  companyData: any;
  userProfile: any;
  postForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    public api: ApiService,
    private readonly fb: FormBuilder,
    private dataService: DataService
  ) {
    this.postForm = this.fb.group({
      content: ['', Validators.required]
    });
   }

  onConfirmClick() {
    this.dialogRef.close();
    const payload = {
      content: this.postForm.get('content')?.value
    }
    // this.api.addCompany(payload).subscribe((res) => {
    //   // console.log(res);
    // })
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.dataService.users.subscribe((res: any) => {
      this.userProfile = res[0];
    });
  }
}
