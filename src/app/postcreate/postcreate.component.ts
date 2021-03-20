import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import{ Post } from '../post/post.model';


@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {

  constructor() { }
//array of class Post type
  posts:Post={

         enteredTitle:'',
        enteredMsg:'',

  }
  //postCreated event is generated using <EventEmitter>

  @Output() postCreated=new EventEmitter<Post>();

  ngOnInit(): void {
  }

  onAddForm(form:NgForm){
console.log(form.value);
//new values entered by user are put in array of type class Post
const post:Post={

  enteredTitle:form.value.enteredTitle,
  enteredMsg:form.value.enteredMsg
}
 this.postCreated.emit(post);
 //using emit it will take the values in post array where user have enteredvalues along with it
  }

}
