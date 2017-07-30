import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'angular2-cookie/core';
import { ApiService } from './../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    user: ''
  }
  constructor(private _apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

}
