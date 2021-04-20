import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
