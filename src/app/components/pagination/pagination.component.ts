import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  currentPage:number = 1;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onChangePage(pageNumber){
   
    this.appService.updatePageNumber(pageNumber);
    this.appService.pageChanged.subscribe(
      (page)=>{
       
        this.currentPage = page;
        
      }
    )
  }

}
