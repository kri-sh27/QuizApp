import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }


  //this method store the username to localstorage
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
