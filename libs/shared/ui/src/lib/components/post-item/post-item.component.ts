import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';


@Component({
  selector: 'diary-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post
  constructor() { }

  ngOnInit(): void {
  }

}
