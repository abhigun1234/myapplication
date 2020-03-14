import { Component, OnInit } from '@angular/core';
import {MyService} from '..//my.service'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  userData
  constructor(public myService:MyService) { }

  ngOnInit() {
  }

  fetchUser()
  {
   this.myService.fetchGithubUserDetails().subscribe(res=>{

    console.log(res)
    this.userData=res
   })

  }

}
