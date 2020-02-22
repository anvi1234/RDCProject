import { Component, OnInit } from '@angular/core';
import { PurchaseComponent } from '../purchase/purchase.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PurchaseComponent , {
     
     
    });
  }


}
