import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  showView : string = "recipe"
  name = 'Angular 5';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC0WTuK9KDjr44DZBImKRqYLqZFVvV3YtY",
      authDomain: "ng-recipe-book-8810c.firebaseapp.com"
    })
  }

  selectedView(e){
    this.showView = e
  }
}
