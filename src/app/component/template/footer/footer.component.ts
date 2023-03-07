import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  
}

//Diretiva de Atributo

// @Directive({
//   selector: '[appRed]',
// })
// export class FooterStyleRed {
//   constructor(el: ElementRef){
//     el.nativeElement.style.color = "#ff0000"
//   }
// }

