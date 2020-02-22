import { Component, OnInit } from '@angular/core';
import { PurchaseComponent } from '../purchase/purchase.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../user.model';
import { ResearchService } from '../research.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  user:User[];
  searchText;

  constructor(public dialog: MatDialog,public service:ResearchService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PurchaseComponent , {
     
     
    });
  }
  ngOnInit() {
    this.service.getAllData()
    .subscribe((data: User[]) => {
      this.user = data;
  });
  }

item=[
  "Machine Learning",
"Cybersecurity",
"Artificial Intelligence",
"Blockchain Technology",
"Mobile Computing",
"Mobile Ad Hoc Networks",
"Wireless Sensor Networks",
"Mobile Wireless Networks",
"Vehicular Ad Hoc Networks",
"Data Mining",
"Cloud Computing",
"Semantic Web",
"Big Data",
"Web Mining",
"Network Security",
"Web Technology",
"Services",
"Internet of Things",
"Digital Forensics",

]

abc=[
  "anveshika","srivastava"
]

}
