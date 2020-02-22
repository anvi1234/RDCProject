import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResearchService } from '../research.service';

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.css']
})
export class AdminblogComponent implements OnInit {
  UserForm:FormGroup

  constructor(private service:ResearchService) { 
    this.UserForm=new FormGroup({
      topicname:new FormControl(null,Validators.required),
      description:new FormControl(null,Validators.required),
  
    })
   }
  

   saveData(){
    this.service.adddata(this.UserForm.value);
    let userInfo = JSON.parse(sessionStorage.getItem('totoList')); 
    this.service.BlogData(userInfo).subscribe(x => {
      
      if(x.userResponse.message=="success"){
        window.location.reload();
        alert("Uploaded successful");

      }
      else{
        alert("Error");

      }
    });
  
  }

  ngOnInit(){

  }
}
   

 


