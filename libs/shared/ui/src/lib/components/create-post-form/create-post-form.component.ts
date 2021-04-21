import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'diary-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss']
})
export class CreatePostFormComponent implements OnInit {
  inputTitle: string;
  inputBody: string;


  constructor(private http: HttpClient) { }

  createPost(){
    this.http.post('api/posts', {title: this.inputTitle, body: this.inputBody}).subscribe();
    this.inputTitle = "";
    this.inputBody = "";
  }

  ngOnInit(): void {
  }

}
