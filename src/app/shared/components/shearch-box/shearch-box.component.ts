import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-shearch-box',
  templateUrl: './shearch-box.component.html',
  styles: ``
})
export class ShearchBoxComponent {
  @Input()
  public placeHolder: string = ''
  @Output()
  public onValue = new EventEmitter<string>();

  emmitValue(value:string):void{
    this.onValue.emit(value);
  }

}
