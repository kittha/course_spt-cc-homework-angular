import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  profiles: Profile;
  skills: string[];

  constructor(private profileService: ProfileService) { 
    this.skills = [];
  }

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
    // console.log(this.profiles);
    this.skills = this.profiles.skills;
    // console.log(this.skills);
  }

}
