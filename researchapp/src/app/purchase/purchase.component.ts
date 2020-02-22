import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResearchService } from '../research.service';
import { User } from '../user.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  UserForm:FormGroup;

 user:User[];
constructor(public dialogRef: MatDialogRef<PurchaseComponent>, @Inject(MAT_DIALOG_DATA)public data:any,private service:ResearchService){
  this.UserForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),

  email:new FormControl(null,Validators.required),

  })
}


saveData(){
  this.service.OrderData(this.UserForm.value).subscribe(x=>{
if(x.userResponse.message=="success"){
  window.location.reload();
  alert("Registeration Successful");
}
else{
  alert("Error");
}
    
})
}
  ngOnInit() {

    this.service.getAllData()
    .subscribe((data: User[]) => {
      this.user = data;
  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


 

}
