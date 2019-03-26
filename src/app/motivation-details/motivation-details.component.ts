import { Component, OnInit ,Input} from '@angular/core';
import {Motivation} from '../motivation'

@Component({
  selector: 'app-motivation-details',
  templateUrl: './motivation-details.component.html',
  styleUrls: ['./motivation-details.component.css']
})
export class MotivationDetailsComponent implements OnInit {

  @Input() motivation:Motivation;
  
  constructor() { }

  ngOnInit() {
  }

}