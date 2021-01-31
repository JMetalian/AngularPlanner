import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  textValue = "";
  providers = [
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

  selectedProvider : any;

  onAddButtonClicked(){
    //this.appService.getSearchData(this.textValue);
    console.log("Bana tıklandı")
  }

}
