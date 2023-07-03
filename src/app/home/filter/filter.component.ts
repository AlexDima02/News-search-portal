import { Component, Input, EventEmitter,Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnChanges {

  date={from: '', to: '', language: '', country: '', category: ''};
  @Input() rawData: any[]= [];
  @Output() processedData = new EventEmitter();

  getDateFrom(value: string){

    this.date.from = value;

  }

  getDateTo(value: string){

    this.date.to = value;

  }

  getLanguage(value: string){

    this.date.language = value;

  }

  getCountry(value: string){

    this.date.country = value;

  }
  getCategory(value: string){

    this.date.category = value;
    console.log(this.date)
  }
  onSubmit(){


    this.processedData.emit(this.rawData.filter((el) => {

      return new Date(el.publishedAt).getTime() <= new Date(this.date.to).getTime() &&  new Date(el.publishedAt).getTime() >= new Date(this.date.from).getTime()

    }));

  }

  ngOnChanges(): void {
    this.processedData.emit(this.rawData);
  }
  
}
