import { Component, OnInit } from '@angular/core';
import { PurchaseComponent } from '../purchase/purchase.component';
import { MatDialog } from '@angular/material/dialog';
import { JoinusComponent } from '../joinus/joinus.component';
import { BlogregisterationComponent } from '../blogregisteration/blogregisteration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PurchaseComponent , {
     
     
    });
  }
  opendialog(): void {
    const dialogRef = this.dialog.open(JoinusComponent , {
     
     
    });
  }
  opendialog2(): void {
    const dialogRef = this.dialog.open( BlogregisterationComponent  , {
     
     
    });
  }

}
