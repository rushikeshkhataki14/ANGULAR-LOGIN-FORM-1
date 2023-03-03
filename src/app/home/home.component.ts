import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formgroup: any;


  constructor( private router: Router) {

  }
  ngOnInit(): void {
    this.formgroup = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.compose([Validators.required,]))


    });
  }

  submit(data:any){
    if(data.username == "admin" && data.password == 1234){
      this.router.navigate(['user']);
    }
    else{
      alert("enter invalid username or password");
    }
  }


}

