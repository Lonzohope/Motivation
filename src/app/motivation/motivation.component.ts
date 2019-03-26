import { Component, OnInit } from '@angular/core';
import { Motivation } from '../motivation';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {

  motivation = [
    new Motivation(1,'Hold On Pain Ends','This means that no matter what you go through it will end'),
    new Motivation(2,'There is always light at the end of the tunnel','No matter what you go through things will work out at the end'),
    new Motivation(3, 'Work hard in silence and let your success be your noise','Always work hard and do not tell people what you do your success will'),
    new Motivation(4, 'Never give up on your dreams','Your dreams matter no matter what people will say about them'),
    new Motivation(5, 'God answers when you least expect it','God answers our prayers when we least expect Him to'),
  ]
constructor() { }
ngOnInit() {
}

}

