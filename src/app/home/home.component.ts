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
      user: 'ReadyAssist', description: '24/7 Vehicle Care Company', createdAt: 3, followers: 78000, isComment: false,
      profile: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/ra_logo.jpeg',
      content: 'Exciting News! 🚀 ReadyAssist is thrilled to announce our support as a Silver Partner at the 8th edition of the hashtag#ETAutoEVConclave on November 29-30 at Hyatt Regency, New Delhi.',
      image: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/ra_post.jpeg', likes: 9565, isLiked: false, reposts: 450, comments:
        [{ user: 'Murali', role: 'Angular Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpJka9DNXQ-HUbU5I0YUjbsWRvKuhoA3pxFtTBDSngb02FAzdoGLUoUiD91orJPPtT1Q&usqp=CAU', content: 'Awesome', image: '', likes: 12, isLiked: false },
        { user: 'Arun', role: 'Web Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3IdlkJ17gfJzYce6qsBmaE2Vt22V9HwMTw&usqp=CAU', content: 'Great Work', image: '', likes: 5, isLiked: false },
        { user: 'Akshatha', role: 'Human Resource', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVaYCtrXlbqrWBuXvFqzTAGM6MP3wk2aCcw&usqp=CAU', content: 'Congratulations', image: '', likes: 15, isLiked: false },
        { user: 'Nagoo', role: 'Full Stack developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBee4FB4BYDUBQCZjMzZLpAtOqr5mzN2J5Kw&usqp=CAU', content: 'Keep rocking.', image: '', likes: 16, isLiked: false },
        { user: 'Haritha', role: 'Back-End Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTXTE3FBqvPGLwVwasuF4iHYpSa01U9YkfA&usqp=CAU', content: 'Great Work', image: '', likes: 5, isLiked: false },
        { user: 'Ankit', role: 'Full stack Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2vxPkuzbr1hLMDYq8GQg2cJ7EuFax8-Zwg&usqp=CAU', content: 'Congratulations', image: '', likes: 15, isLiked: false },
        { user: 'Praveen', role: 'Flutter Developer', createdAt: 7, profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', content: 'Keep rocking.', image: '', likes: 16, isLiked: false }]
    },
    {
      user: 'Microsoft', description: 'Software Development', createdAt: 4, followers: 2100000, isComment: false,
      profile: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/ms.png',
      content: "Find your creative spark with November's edition of The Monthly Tech-In. ✨ This month, we explore how Microsoft Copilot is revolutionizing work for everyone from the 9-to-5ers to frontline workers. We also dive into AI lingo used in todays workplace and share a pop quiz for you to put your AI knowledge to the test. ",
      image: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/ms_post.png', likes: 1289, isLiked: false, reposts: 900, comments:
        [{ user: 'Murali', role: 'Angular Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpJka9DNXQ-HUbU5I0YUjbsWRvKuhoA3pxFtTBDSngb02FAzdoGLUoUiD91orJPPtT1Q&usqp=CAU', content: 'Awesome', image: '', likes: 12, isLiked: false },
        { user: 'Arun', role: 'Web Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3IdlkJ17gfJzYce6qsBmaE2Vt22V9HwMTw&usqp=CAU', content: 'Great Work', image: '', likes: 5, isLiked: false },
        { user: 'Ankit', role: 'Full stack Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVaYCtrXlbqrWBuXvFqzTAGM6MP3wk2aCcw&usqp=CAU', content: 'Congratulations', image: '', likes: 15, isLiked: false }]
    },
    {
      user: 'GeeksforGeeks', description: 'Education', createdAt: 7, followers: 1630576, isComment: false,
      profile: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/geeksforgeeks.jpeg',
      content: "feeling moye moye",
      image: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/gg_post.jpeg', likes: 879, isLiked: false, reposts: 90, comments:
        [{ user: 'Murali', role: 'Angular Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpJka9DNXQ-HUbU5I0YUjbsWRvKuhoA3pxFtTBDSngb02FAzdoGLUoUiD91orJPPtT1Q&usqp=CAU', content: 'Awesome', image: '', likes: 12, isLiked: false },
        { user: 'Arun', role: 'Web Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3IdlkJ17gfJzYce6qsBmaE2Vt22V9HwMTw&usqp=CAU', content: 'Great Work', image: '', likes: 5, isLiked: false },
        { user: 'Ankit', role: 'Full stack Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVaYCtrXlbqrWBuXvFqzTAGM6MP3wk2aCcw&usqp=CAU', content: 'Congratulations', image: '', likes: 15, isLiked: false },
        { user: 'Nagoo', role: 'Full stack Developer', createdAt: 7, profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBee4FB4BYDUBQCZjMzZLpAtOqr5mzN2J5Kw&usqp=CAU', content: 'Keep rocking.', image: '', likes: 16, isLiked: false }]
    },];
  sortItems = [{ name: 'top', isSelect: true }, { name: 'recent', isSelect: false }];
  postInfoItems = [{ name: 'Save', logo: 'icofont-book-mark' }, { name: 'Copy link yo post', logo: 'icofont-link' }, { name: 'Embed this post', logo: 'icofont-tag' }, { name: "I don't want to see this", logo: 'icofont-eye-blocked' }, { name: 'Report post', logo: 'icofont-flag' }];
  likeItems = ['text-blue-500 icofont-like', 'text-green-500 fa-solid fa-hands-clapping', 'text-red-500 icofont-heart', 'text-yellow-500 icofont-light-bulb', 'text-sky-500 icofont-simple-smile']

  constructor(
    public dialog: MatDialog,
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

  viewComment(i: any) {
    for (const feed of this.feeds) {
      feed.isComment = false;
    }
    this.feeds[i].isComment = true;
  }

  feedLike(i: number) {
    this.feeds[i]['isLiked'] = this.feeds[i]['isLiked'] ? false : true;
  }

  commentLike(fi: number, ci: number) {
    this.feeds[fi]['comments'][ci]['isLiked'] = this.feeds[fi]['comments'][ci]['isLiked'] ? false : true;
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
