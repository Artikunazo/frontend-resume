import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalResume') modalResume!: ElementRef;

  public showDialog: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  downloadResume(): void{
    this.showDialog = true;
  }

}
