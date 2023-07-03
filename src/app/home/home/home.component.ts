import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from 'src/app/firebase/firebase-database.service';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm = '';
  data:[] = [];
  dataFromDb:any[]= [];

  constructor(private news: NewsService){}

  fetch(term: any){
    this.searchTerm = term;
  }

  onSubmit(){

    this.news.search(this.searchTerm).subscribe((value) => {
      this.data = value;
      console.log(this.data)
    });
    
  }


}
