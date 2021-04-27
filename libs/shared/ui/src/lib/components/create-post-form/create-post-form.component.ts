import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'diary-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss']
})
export class CreatePostFormComponent implements OnInit {
  @Output() reload: EventEmitter<any> = new EventEmitter();
  inputTitle: string;
  inputBody: string;

  constructor(private http: HttpClient) { }

  createPost(){
    this.http.post('api/posts', {title: this.inputTitle, body: this.inputBody, likes: 0, author: {id: 14}}).subscribe();
    this.inputTitle = "";
    this.inputBody = "";
    this.reload.emit();
  }

  ngOnInit(): void {
  }

}
