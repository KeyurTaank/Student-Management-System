import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent 
{
  public title : string;
  public search : string;

  constructor()
  {
    this.title = "My App";
    this.search = 'Test';
  }

  onSearch()
  {
    console.log('Click Working', this.search);
  }
}
