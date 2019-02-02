import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soulful',
  templateUrl: './soulful.component.html',
  styleUrls: ['./soulful.component.css']
})
export class SoulfulComponent implements OnInit {

  title = "Soulful Core!"
  heroes = ['antman', 'superman', 'hulk']
  constructor() { }

  ngOnInit() {
  }

}
