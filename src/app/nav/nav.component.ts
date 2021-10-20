import { Component } from '@angular/core';
import { BlogServiceService } from 'src/Service/blog-service.service';
import { Post } from '../model/post';

@Component({
  selector: 'blg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})

export class NavComponent {

  post: Post;
  postList;
  query: string = '';
  constructor(public postService: BlogServiceService) {}

  ngOnInit(): void {
    this.updateList();
  }

  updateList() {
    this.postList = this.postService.fetchPosts(this.query);
  }

  del(post: Post) {
    this.postService.delete(post);
    this.updateList();
  }
}
