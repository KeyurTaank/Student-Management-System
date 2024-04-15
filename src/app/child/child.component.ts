import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() title: string = '';
  @Output() onCountChange : EventEmitter<number> = new EventEmitter<number>();

  public count : number = 0;
  increaseCount()
  {
    this.count = this.count + 1;
    this.onCountChange.emit(this.count);
    console.log(this.count);
  }
}
