import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrl: './thoughts-list.component.css',
})
export class ThoughtsListComponent {
  thoughtList: Thought[] = [];
  currentPage = 1;
  isMoreThoughts: boolean = true;
  filter: string = '';
  favorites: boolean = false;
  favoriteList: Thought[] = [];

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtListData) => {
        this.thoughtList = thoughtListData;
      });
  }

  reloadComponent() {
    this.favorites = false;
    this.currentPage = 1;
    this.router.navigate([this.router.url]);
  }

  searchThoughts() {
    this.currentPage = 1;
    this.isMoreThoughts = true;

    this.service
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtList) => {
        this.thoughtList = thoughtList;
      });
  }

  listFavorites() {
    this.isMoreThoughts = true;
    this.favorites = true;
    this.currentPage = 1;
    this.service
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtListFavorites) => {
        this.thoughtList = thoughtListFavorites;
        this.favoriteList = thoughtListFavorites;
      });
  }

  loadMoreThoughts() {
    this.service
      .list(++this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtList) => {
        this.thoughtList.push(...thoughtList);
        if (!thoughtList.length) {
          this.isMoreThoughts = false;
        }
      });
  }
}
