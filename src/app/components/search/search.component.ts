import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }
  textValue = "";
  shows = [
    {
      "name" : "Netflix",
      "date" : "2020",
      "time" : "20:30"
    },
    {
      "name" : "ORF",
      "date" : "2020",
      "time" : "17:30"
    }
  ]

  onSearchButtonClicked(){
    //this.appService.getSearchData(this.textValue);
    console.log("Benim default değerim",this.textValue)
  }


}
