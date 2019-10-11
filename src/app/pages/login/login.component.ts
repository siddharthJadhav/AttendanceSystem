import { Component, OnInit } from '@angular/core';
import { LoginObject } from './login.model';
import { NetworkService } from '../../shared/service/network.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginObject = {
    emial: null,
    pass: null,
  };

  constructor(
    private httpServ: NetworkService
  ) { }

  ngOnInit() {
  }

  /**
   * Login function
   *
   * @param {LoginObject} loginParams loginparams which contains email, pass and remember
   * @memberof LoginComponent
   */
  login(loginParams: LoginObject): void {
    console.log('loginParams : ', loginParams);
    const url = '/assets/json/login.json';
    this.httpServ.get(url).subscribe( res => {
      console.log('response : ', res);
    }, error => {
      console.log('error : ', error);
    });
  }

}
