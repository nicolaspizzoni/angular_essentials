import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

//Diretiva Estrutural
@Directive({
  selector: '[myFor]'
})

export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[] = []
  // @Input('myForUsando') texto: string

  //ViewContainerRef = Represents a container where one or more views can be attached to a component.
  //TemplateRef = Represents an embedded template that can be used to instantiate embedded views. To instantiate embedded views based on a template, use the ViewContainerRef method createEmbeddedView()
  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      //Criado dentro do container um template com valor implicito do number para cada repetição
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
  }

}
