import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='your perfect banking partner'
  acnt='Enter your accout number'

  acno=''
  psw=''


  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1001,username:"ammu",password:123,balance:200000},
    1002:{acno:1002,username:"anu",password:123,balance:150000},
    1004:{acno:1002,username:"joel",password:123,balance:150000}
  }


  constructor() { }

  ngOnInit(): void {
  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    let userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]['password']){
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('user is not exist incurrent ac number')
    }
    // alert('login clicked')
  }
  acnoChange(event:any){
  
  this.acno= event.target.value
    
  }
  pswChange(event:any){
    this.psw=event.target.value
  }

}
