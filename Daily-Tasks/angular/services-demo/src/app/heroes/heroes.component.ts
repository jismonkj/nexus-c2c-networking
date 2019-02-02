import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgForm }  from '@angular/forms';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = new Hero();
  service = new DemoService();
  
  isRegistered = false;

  constructor() { 

  }

  ngOnInit() {
  }

  registration(){
    alert(this.hero.username);
  }

}
