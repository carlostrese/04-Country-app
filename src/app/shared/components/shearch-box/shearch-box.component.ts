import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscribable, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-shearch-box',
  templateUrl: './shearch-box.component.html',
  styles: ``
})
export class ShearchBoxComponent implements OnInit, OnDestroy {


  private deboucer:Subject<string>= new Subject<string>();
  private debouncerSuscription?: Subscription;
  @Input()
  public placeHolder: string = ''
  @Output()
  public onValue = new EventEmitter<string>();
  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription= this.deboucer
    .pipe(
      debounceTime(1000, )
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    });
  }
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emmitValue(value:string):void{
    this.onValue.emit(value);
  }

  onkeyPrees(searchTerm: string){
    this.deboucer.next(searchTerm);
  }


}
