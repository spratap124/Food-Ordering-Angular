import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  restauranList = []
  searchKey: String;
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.restauranList = this.appService.getRestaurantList();

    this.appService.listChanged.subscribe(
      (list)=>{
        this.restauranList = list;
      }
    )

    this.appService.searchKey.subscribe(
      (search)=>{
        this.searchKey = search;
      }
    )
  }

}
