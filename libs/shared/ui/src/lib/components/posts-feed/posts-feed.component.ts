import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'diary-posts-feed',
  templateUrl: './posts-feed.component.html',
  styleUrls: ['./posts-feed.component.scss']
})
export class PostsFeedComponent implements OnInit {
  posts: Post[] =[
    {
      id: 1,
      title: 'First',
      date: 'today',
      body: 'Some information',
      author: 'Anna',
      likes: 0,
    },
    {
      id: 2,
      title: 'Second',
      date: 'today',
      body: 'Some information',
      author: 'Anna',
      likes: 5,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
