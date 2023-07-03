import { Component,Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() processedData: any[]=[];
  @Input() bringData:any;
  @Input() removeData:any;


  constructor(){}

  addData(value: any){

    this.bringData(value);

  }

  deleteData(value: string){

    console.log(value)
    // this.removeData(value);

  }


}
