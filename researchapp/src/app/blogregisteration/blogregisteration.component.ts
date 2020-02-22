import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResearchService } from '../research.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogregisteration',
  templateUrl: './blogregisteration.component.html',
  styleUrls: ['./blogregisteration.component.css']
})
export class BlogregisterationComponent implements OnInit {
  UserForm:FormGroup;

  constructor(public dialogRef: MatDialogRef<BlogregisterationComponent>, @Inject(MAT_DIALOG_DATA)public data:any,private service:ResearchService,private router:Router) {
    this.UserForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      
  
    email:new FormControl(null,Validators.required),
  
    })
   }

   saveeData(){
     console.log(this.UserForm.value);
   }

   saveData(){
    this.service.adddata(this.UserForm.value);

   
      
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  click(){
    this.router.navigate(['./adminblog']);
  }
  

 


 

  ngOnInit() {
  }

}
