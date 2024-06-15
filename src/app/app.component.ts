import { Component } from '@angular/core';
import { DataService } from 'src/data-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clone';
  profile = [{
    name: 'Jothi Raj D',
    phone: '1234567890',
    pwd: 'test@123',
    email: 'test@gmail.com',
    qualification: 'MCA',
    profile: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/IMG_20211102_152122-1.jpg',
    bgImage: 'https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/jo_bg.jpeg',
    role: 'Software Engineer',
    organization: 'ReadyAssist',
    followers: '2890',
    followings: '20',
    location: 'Bengaluru, Karnataka, India',
    addImage: "https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/bit_add.svg"
  },
  { name: 'Murali K', phone: '0987654321', pwd: 'test@321', email: 'test@gmail.com', qualification: 'BE', profile: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg', bgImage: 'https://i.pinimg.com/originals/e9/cb/9c/e9cb9cdbc8fcf90a1c182f1e365e723d.jpg', role: 'Software Engineer', organization: 'ReadyAssist', followers: '900', followings: '2987' },];

  constructor(
    private dataService: DataService
  ) {
    this.dataService.users.next(this.profile);
  }

}
