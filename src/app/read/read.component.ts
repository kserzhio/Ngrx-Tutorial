import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Tutorial} from "../models/tutorial.models";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import * as TutorialActions from './../actions/tutorial.actions'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.less']
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  constructor(private store:Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }
  delTutorial(index){
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
  ngOnInit() {
  }

}
