import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    localStorage.setItem("key","value")
   var data  =localStorage.getItem("key")
   sessionStorage.setItem("key1","value1")
   var session=sessionStorage.getItem("key1")
   console.log(session)
  }

}
