import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  path: string = "https://jsonplaceholder.typicode.com/"

  posts: Post[] | undefined;
  users: User[] | undefined;


  ngOnInit(): void {
    this.getPost();
    this.getUsers();
  }

  getPost() {
    this.http.get<Post[]>(this.path+"posts").subscribe(response => {
      this.posts = response;
    })
  }

  getUsers() {
    this.http.get<User[]>(this.path+"users").subscribe(response => {
      this.users = response;
    })
  }
}
