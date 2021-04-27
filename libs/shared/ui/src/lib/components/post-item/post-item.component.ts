import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'diary-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Output() reload: EventEmitter<any> = new EventEmitter();
  @Input() post: Post
  constructor( private http: HttpClient) { }

 addLike(){
    this.http.put<Post>(`/api/posts/${this.post.id}`, {id: Number(this.post.id), likes: this.post.likes, title:this.post.title, body:this.post.body, author: this.post.author, date: this.post.date}).subscribe((p) => {this.post = p});
 }

 deletePost(){
    this.http.delete(`/api/posts/${this.post.id}`).subscribe();
    this.reload.emit();
 }

  ngOnInit(): void {
  }

}
