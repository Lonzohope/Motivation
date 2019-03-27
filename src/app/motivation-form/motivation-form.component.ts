import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Motivation } from '../motivation';

@Component({
  selector: 'app-motivation-form',
  templateUrl: './motivation-form.component.html',
  styleUrls: ['./motivation-form.component.css']
})
export class MotivationFormComponent implements OnInit {
   newMotivation=new Motivation(0,"","",new Date());
   @Output() addMotivation=new EventEmitter<Motivation>();
    
   submitMotivation(){
       this.addMotivation.emit(this.newMotivation);

   }
  constructor() { }

  ngOnInit() {
  }

}
