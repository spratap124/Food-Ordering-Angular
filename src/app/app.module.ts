import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//external modules
import { PapaParseModule } from 'ngx-papaparse';

//components and services
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureComponent } from './components/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    SearchBoxComponent,
    ListContainerComponent,
    RestaurantItemComponent,
    CuisineComponent,
    RatingsComponent,
    PaginationComponent,
    FooterComponent,
    FeatureComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PapaParseModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})


export class AppModule {
  
 }
