import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostsFeedComponent } from './components/posts-feed/posts-feed.component';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import { FormsModule } from '@angular/forms';

export const sharedUiRoutes: Route[] = [
  {path: '', component: PostsFeedComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(sharedUiRoutes), FormsModule],
  declarations: [
    PostItemComponent,
    PostsFeedComponent,
    CreatePostFormComponent
  ],
})
export class SharedUiModule {}
