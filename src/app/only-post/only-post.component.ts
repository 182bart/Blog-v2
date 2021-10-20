import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { BlogServiceService } from 'src/Service/blog-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blg-only-post',
  templateUrl: './only-post.component.html',
  styleUrls: ['./only-post.component.scss'],
})

export class OnlyPostComponent implements OnInit {
  post: Post = {
    title: 'Błąd',
    text: 'Brak postu lub błąd Serwera.',
  };

  constructor(
    public postService: BlogServiceService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const PostId = this.activatedRoute.snapshot.params.id;

    this.postService
      .fetchPost(PostId).subscribe( post=>{this.post=post});
  }
}
