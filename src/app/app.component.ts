import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  lists: any;

  ngOnInit() {
    this.lists = [
      { name: 'Prasad', age: 25, sal: 25000, desg: 'Software Developer' },
      { name: '', age: null, sal: null, desg: '' },
      { name: '', age: null, sal: null, desg: '' },
      { name: '', age: null, sal: null, desg: '' },
      { name: '', age: null, sal: null, desg: '' },
      { name: '', age: null, sal: null, desg: '' },
      { name: '', age: null, sal: null, desg: '' },
      { name: '', age: null, sal: null, desg: '' },
      { name: '', age: null, sal: null, desg: '' },
      { name: 'Sandeep', age: 65, sal: 65000, desg: 'Software Developer' }
    ]
  }

  submitListsData(){
    console.log('send this data to server ', this.lists);
  }

}
