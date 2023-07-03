import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {

  sortParam = '';
  @Input() rawData: any[]= [];
  @Output() processedData = new EventEmitter();

  sortData(value: string){

    if(value !== '' && value === 'Asc'){
      this.rawData = this.rawData.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
      this.processedData.emit(this.rawData);
    }else if(value !== '' && value === 'Desc'){
      this.rawData = this.rawData.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      this.processedData.emit(this.rawData)
    }
    
  }
  
}
