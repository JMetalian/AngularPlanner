import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router : Router) { }

  visibleSidebar5 = false;

  ngOnInit(): void {
    console.log(this.title)
  }

  handleLogout(){
    this.router.navigate(['']);
  }

  @Input()
  title;


}
