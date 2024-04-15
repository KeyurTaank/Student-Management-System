import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  public childTitle : string = 'Child Title';
  public childCount : number = 0;

  childCounter(count : number)
  {
    console.log('inside parent', count);
    this.childCount = count;
  }
}
