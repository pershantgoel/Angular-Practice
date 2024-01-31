import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostRoutingModule } from './posts.routes';

@NgModule({
  declarations: [
    // PostsComponent,
  ],
  imports: [
    PostRoutingModule
  ]
})
export class PostsModule { }
