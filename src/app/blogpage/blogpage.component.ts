import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../types/BlogPost';

@Component({
    selector: 'app-blogpage',
    templateUrl: './blogpage.component.html',
    styleUrls: ['./blogpage.component.css'],
    standalone: false
})

export class BlogpageComponent implements OnInit {

  blogPosts: BlogPost[];
  constructor() { }

  ngOnInit() {
    this.getLatestBlogPosts();
  }

  getLatestBlogPosts() {
    this.blogPosts = new Array<BlogPost>();
  }
}
