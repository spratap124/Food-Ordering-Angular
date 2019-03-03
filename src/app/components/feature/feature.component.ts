import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  sortByRatings(){
    this.appService.sortByRatings()
  }

  sortByReviews(){
    this.appService.sortByReviews()
  }

}
