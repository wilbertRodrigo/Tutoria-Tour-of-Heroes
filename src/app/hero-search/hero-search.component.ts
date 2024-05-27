import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  // Push a search term into the observable stream.
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }

  ngOnInit(): void {}

  enteredSearchValue: string = '';
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChange.emit(this.enteredSearchValue);
  }
}
