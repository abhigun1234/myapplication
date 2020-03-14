import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  data="hello"
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
clickMe()
{
  //alert('hello')
}
}
