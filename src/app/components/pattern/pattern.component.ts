import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent {

  @Input()
  image = ""
}
