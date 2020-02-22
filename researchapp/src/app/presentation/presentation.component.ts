import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { PurchaseComponent } from '../purchase/purchase.component';
import { ResearchService } from '../research.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

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
