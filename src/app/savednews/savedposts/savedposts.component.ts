import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from 'src/app/firebase/firebase-database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-savedposts',
  templateUrl: './savedposts.component.html',
  styleUrls: ['./savedposts.component.css']
})
export class SavedpostsComponent implements OnChanges, OnInit{
  
  savedData:any[]= [];

  constructor(private firebase: FirebaseDatabaseService){}

  fetchDataFromDb(){

    this.firebase.getNews().subscribe((res) => {

      this.savedData = res;
      console.log(this.savedData)
    })

  }

  ngOnInit(): void {
    this.fetchDataFromDb();
  }

  ngOnChanges(): void{

    this.fetchDataFromDb();
    
  }
}
