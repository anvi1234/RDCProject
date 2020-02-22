import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../research.service';
import { User } from '../user.model';

@Component({
  selector: 'app-constraints',
  templateUrl: './constraints.component.html',
  styleUrls: ['./constraints.component.css']
})
export class ConstraintsComponent implements OnInit {
  user:User[];
  

  constructor(private service:ResearchService) { }

  ngOnInit() {

    this.service.getAllConstraintsData()
    .subscribe((data: User[]) => {
      this.user = data;
  });
  }

}
