import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  @Input() cuisines: [];
  
  constructor() { }

  ngOnInit() {
  }

}
