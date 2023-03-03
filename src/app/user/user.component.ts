import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{



  constructor(private api:ApiService){}

  ngOnInit(): void {

  }
}
