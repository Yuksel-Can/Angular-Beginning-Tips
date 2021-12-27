import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
//declare let alertify : any;
import { AlertifyService } from '../services/alertify.service';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient, 
    private activatedRoute: ActivatedRoute,
    private alertifyService:AlertifyService,
    private postService:PostService
    ) {}

  path: string = "https://jsonplaceholder.typicode.com/"

  posts: Post[] | undefined;
  users: User[] | undefined;
  filterText:string | undefined;

  today = new Date(2021,11,3);


  ngOnInit(): void {
    //this.getPost();
    this.getUsers();

    this.activatedRoute.params.subscribe(params => {

      //console.log(params["userid"])
      this.getPost(params["userid"]);

    })
  }

  getPost(userid: any) {

    this.postService.getPost(userid).subscribe(data=>{
      this.posts = data
    });
  }

  getUsers() {
    this.http.get<User[]>(this.path + "users").subscribe(response => {
      this.users = response;
    })
  }
  
  addToFavorites(post:Post){
    this.alertifyService.success("Added to favs : " + post.title)
  }
}
