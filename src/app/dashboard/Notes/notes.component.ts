import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  isTrue = false;

  switchCondition;

  condition;
  condition1;

  constructor() { }

  ngOnInit() {
  }

}
