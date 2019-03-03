import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  search = ""
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  searchRestaurant(){
    this.appService.searchRestaurant(this.search);
  }

}
