import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { PROFILES } from './mock-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfiles(): Profile {
    // alert(`get Profile Object`);
    console.log(`*** getProfiles() is called ***`);
    return PROFILES;
  }
}
