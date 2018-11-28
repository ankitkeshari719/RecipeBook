import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  title = 'Recipe Book';

  ngOnInit(){
    var config = {
      apiKey: "AIzaSyBb0SRGd2sGpRwbLTFz7gfg-KiQ_o06HTE",
      authDomain: "recipe-book-bfce8.firebaseapp.com",
      databaseURL: "https://recipe-book-bfce8.firebaseio.com",
      projectId: "recipe-book-bfce8",
      storageBucket: "recipe-book-bfce8.appspot.com",
      messagingSenderId: "624542628368"
    };
    firebase.initializeApp(config);
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBb0SRGd2sGpRwbLTFz7gfg-KiQ_o06HTE",
    //   authDomain: "recipe-book-bfce8.firebaseapp.com",
    // });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}

