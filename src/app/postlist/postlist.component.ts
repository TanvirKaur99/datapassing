import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor() { }
  @Input() posts:Post[]=[];

  ngOnInit(): void {
  }
}
