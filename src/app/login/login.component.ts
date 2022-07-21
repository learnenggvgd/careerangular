import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "ashique";
  accounts="enter your account number";
  // using acno and pswd are used twoway binding 
  acno=''
  pswd=''
  uname=""
  
  //database-bank(account number,username,balance,password)
  // userDetail:any={
  //   1000 : {
  //     acno:1000,
  //     userName:'ashique',
  //     password:1000,
  //     balance:100000
  //   },
  //   1001 : {
  //     acno:1001,
  //     userName:'ajay',
  //     password:1002,
  //     balance:50000
  //   },
  //   1002 : {
  //     acno:1002,
  //     userName:'aswin',
  //     password:1002,
  //     balance:20000
  //   }
  // }


  constructor(private router:Router,private ds:ServiceService) { 
    console.log(this.acno);
    console.log(this.pswd);
    
  }

  ngOnInit(): void {
  }


//   // login
// login(){
//   alert(this.acno);
//   alert(this.pswd);

//   var acno = this.acno;
//   var pswd = this.pswd;

//   var userDetails = this.userDetail;

//   if(acno in userDetails){
//     if(pswd== userDetails[acno].password){
//       //if(pswd==userDetails[acno]["password"]{
//       alert("login success")
//       this.router.navigateByUrl('dashboard')
     
//     }
//     else{
//       alert("password incorrect")
//     }
//   }else{
//     alert("user doesnot exist");
//   }
// }

login(){
  alert("this from component login acno"+this.acno);
  alert("this from login pswd"+this.pswd);

  var acno = this.acno;
  var pswd = this.pswd;

  const result = this.ds.login(acno,pswd)

  if(result){
      alert("login success from login ")
      this.router.navigateByUrl('dashboard')
    }
}

register(){
  alert('register clicked from login component')

  var uname = this.uname
  var acno  = this.acno
  var pswd = this.pswd

  const result = this.ds.register(acno,uname,pswd)
  if(result){
    alert('successfully registered from login component')
    this.router.navigateByUrl('login')
  }
  else{
    alert('user already exist.. please log in from login component')
    this.router.navigateByUrl('login')
  }
}


}
