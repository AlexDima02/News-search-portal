import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FirebaseDatabaseService } from 'src/app/firebase/firebase-database.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnChanges {
  @Input() data= [];
  originalData:any = [];
  savedData: any[] = [];
  itemStatus = false;

  constructor(private firebase: FirebaseDatabaseService){}

  getData(value: []){

    this.originalData = value;
  
    console.log(this.originalData)

  }


  addData = (value: any) => {
    this.firebase.addNews(value).then((res:any) => {


        this.itemStatus = !this.itemStatus
        this.fetchDataFromDb();
        setTimeout(() => {
          this.itemStatus = !this.itemStatus  
        }, 2000);        
        

    });
  }

  deleteData(value: string){

    this.firebase.deleteNews(value).then(() => {

      this.fetchDataFromDb();

    });

  }

  fetchDataFromDb(){

    this.firebase.getNews().subscribe((res) => {

      this.savedData = res;
      console.log(this.savedData)
    })

  }

  ngOnChanges(){

    this.fetchDataFromDb();

  }

}
