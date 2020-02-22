import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../research.service';
import { User } from '../user.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  user:User[];

  constructor(private service:ResearchService) { }

  ngOnInit() {
    this.service.getAllBlogsData()
    .subscribe((data: User[]) => {
      this.user = data;
  });
  }

}
