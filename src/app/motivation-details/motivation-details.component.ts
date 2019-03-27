import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {Motivation} from '../motivation'

@Component({
  selector: 'app-motivation-details',
  templateUrl: './motivation-details.component.html',
  styleUrls: ['./motivation-details.component.css']
})
export class MotivationDetailsComponent implements OnInit {
  @Input() motivation:Motivation;
  @Output() isComplete= new EventEmitter<boolean>();

  motivationDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit() {
  }

}