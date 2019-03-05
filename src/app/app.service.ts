
import { Papa } from 'ngx-papaparse';
import { EventEmitter, Injectable } from '@angular/core';

const URL = "assets/CSV.csv"

@Injectable()
export class AppService {
   

    CSVdata = [];
    restaurantList = [];
    searchResult = [];
    currentPage:number = 1;
    itemsPerPage = 32;
    startItemNumber = 0;
    endItemNumber = 32;
    
    searchKey = new EventEmitter<string>();
    pageChanged = new EventEmitter<number>();
    listChanged = new EventEmitter<any[]>();

    CSVconfig = {
        chunk: (results, parser) => {
      
          this.CSVdata.push(...results.data)
        },
        header: true,
        download: true,
        complete: ()=> {
            
            this.restaurantList = this.formatCSVData(this.CSVdata.slice(this.startItemNumber,this.endItemNumber));
            this.listChanged.emit(this.restaurantList)
          
        }
      }

    constructor(private papa: Papa){
      this.getData();
    }

    getData(){
        
        this.papa.parse(URL,this.CSVconfig);
    }

    getRestaurantList(){
      return this.restaurantList;
    }

    updatePageNumber(pageNumber){
      
      this.currentPage =  +pageNumber;
     
      this.pageChanged.emit(this.currentPage);

      this.startItemNumber = this.itemsPerPage*(this.currentPage -1);
      this.endItemNumber = this.itemsPerPage*(this.currentPage);

      this.loadPaginatedItems();

    }

    loadPaginatedItems(){
      this.restaurantList = this.formatCSVData(this.CSVdata.slice(this.startItemNumber,this.endItemNumber));
      this.listChanged.emit(this.restaurantList)
    }

    sortByRatings(){
      
      this.CSVdata.sort(
        (el1, el2)=>{
          return el2.Rating - el1.Rating;
        }
      )

      this.loadPaginatedItems();
    }

    sortByReviews(){
      this.CSVdata.sort(
        (el1, el2)=>{
          return el2["Number of Reviews"] - el1["Number of Reviews"];
        }
      )

      this.loadPaginatedItems();
    }

    searchRestaurant(restaurant){
      // this.restaurantList =  this.CSVdata.filter(function(el) {
      //   return el.Name.toString().toLowerCase().includes(restaurant.toLowerCase());
      // })

      this.searchKey.emit(restaurant);
    
    }
    
  formatCSVData(data){
    return data.map((el)=>{
      if( el["Cuisine Style"].length > 0 && typeof el["Cuisine Style"] != 'object'){
        el["Cuisine Style"] = JSON.parse( el["Cuisine Style"].replace(/'/g,'"'))
      }
        return el;
    })
  } 
          
}
