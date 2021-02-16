import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor() { }

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

  onAddButtonClicked(){
    //this.appService.getSearchData(this.textValue);
    console.log("Benim default değerim",this.textValue)
  }

  editProduct(show){
    console.log("Edited",show);
  }

  deleteProduct(show){
    console.log("Deleted",show);
  }
}
