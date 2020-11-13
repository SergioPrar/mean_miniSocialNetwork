import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

    newPost = ""
    postInput = ""

    onAddPost(){
        this.newPost = this.postInput; 
    }

  constructor() { }

  ngOnInit(): void {
  }

}
