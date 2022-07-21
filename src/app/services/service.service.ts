import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userDetail:any={
    1000 : {
      acno:1000,
      userName:'ashique',
      password:1000,
      balance:100000
    },
    1001 : {
      acno:1001,
      userName:'ajay',
      password:1002,
      balance:50000
    },
    1002 : {
      acno:1002,
      userName:'aswin',
      password:1002,
      balance:20000
    },
    2000 : {
      acno:2000,
      userName:'aswin',
      password:2000,
      balance:20000
    }
  }


  constructor() {
    console.log(this.userDetail)
   }

  // register 
  register(acno:any,userName:any,password:any){
    let userDetail= this.userDetail
    if(acno in userDetail){
      console.log(userDetail);
      console.log("service registration already found")
      return false
    }
    else{
      userDetail[acno]={
        acno,
        userName,
        password,
        balance:0
      }
      console.log(userDetail);
      console.log("service registration is successful")
      return true
    }
  }


  login(acno:any,pswd:any){
    alert("this from dataservice acno"+acno);
    alert("this from dataservice password"+pswd);
  
  
    var userDetails = this.userDetail;
  
    if(acno in userDetails){
      if(pswd== userDetails[acno].password){
        //if(pswd==userDetails[acno]["password"]{
        alert("login success from data service ")
        console.log(userDetails);
        return true
      }
      else{
        alert("password incorrect from data service")
        console.log(userDetails);
        return false
      }
    }else{
      alert("user doesnot exist from data service");
      console.log(userDetails);
      return false
    }
    
  }
}
