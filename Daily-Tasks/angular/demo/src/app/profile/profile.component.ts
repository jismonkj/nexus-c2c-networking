import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any
  title = "Soulful Core!"
  show = false;
  showButtonText = "More"

  constructor() {
    this.user = {
      name: 'Jismon',
      phone: ['23489237948', '23472389789'],
      valid: true
    }
  }

  ngOnInit() {
  }

  showMore(){
    if(this.show==false){
      this.show = true;
      this.showButtonText = "Hide"
    }else{
      this.show = false;
      this.showButtonText = "More"
    }
  }

}
