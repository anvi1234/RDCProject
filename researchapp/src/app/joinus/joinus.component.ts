import { Component, OnInit, Inject } from '@angular/core';
import { ResearchService } from '../research.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {

  UserForm:FormGroup;

  constructor(public dialogRef: MatDialogRef<JoinusComponent>, @Inject(MAT_DIALOG_DATA)public data:any,private service:ResearchService) {
    this.UserForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      organisation:new FormControl(null,Validators.required),
    designation:new FormControl(null,Validators.required),
  
    email:new FormControl(null,Validators.required),
  
    })
   }

   saveeData(){
     console.log(this.UserForm.value);
   }

   saveData(){
    this.service.ConstraintsData(this.UserForm.value).subscribe(x=>{
      if(x.userResponse.message=="success"){
        window.location.reload();
        alert("data Upload successful");
      }

      else{
        alert("Error");
      }
   
      
  })
  }

  ngOnInit() {
  }

}
