import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paleta',
  templateUrl: './paleta.component.html',
  styleUrls: ['./paleta.component.css']
})
export class PaletaComponent {

  @Input()
  cor1:string = "#B2ADCA"

  @Input()
  cor2:string = "#F6C6D4"

  @Input()
  cor3:string = "#52557E"

  @Input()
  cor4:string = "#A490A9"

  @Input()
  cor5:string = "#7B7B9C"
}
