import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BlogServiceService {
  url: string = 'http://localhost:3000/Posts';

  constructor(public httpService: HttpClient) {}


  savePost(post: Post):Observable<Post>  {
    return this.httpService.post(this.url, post);
  }

  fetchPosts(query): Observable<Array<Post>> {
    return this.httpService.get<Array<Post>>(`${this.url}?q=${query}`);
  }

  fetchPost(postId): Observable<Post> {
    return this.httpService.get(`${this.url}/${postId} `)
  }

  delete(post: Post): Observable<Post> {
    return this.httpService.delete(`${this.url}/${post.id}`);
  }
}
