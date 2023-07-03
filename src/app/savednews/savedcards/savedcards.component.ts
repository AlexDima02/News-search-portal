import { Component, Input } from '@angular/core';
import { FirebaseDatabaseService } from 'src/app/firebase/firebase-database.service';

@Component({
  selector: 'app-savedcards',
  templateUrl: './savedcards.component.html',
  styleUrls: ['./savedcards.component.css']
})
export class SavedcardsComponent {
    @Input() savedData:any[]= [];
    
    constructor(private firebase: FirebaseDatabaseService){}

    deleteCard(id:string){

      this.firebase.deleteNews(id);

    }

}
