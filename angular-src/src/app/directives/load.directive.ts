import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoad]'
})
export class LoadDirective {

  constructor(public viewContainerRef : ViewContainerRef) { }

}
