import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

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

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service
      .list(this.currentPage, this.filter)
      .subscribe((thoughtListData) => {
        this.thoughtList = thoughtListData;
      });
  }

  searchThoughts() {
    this.currentPage = 1;
    this.isMoreThoughts = true;

    this.service
      .list(this.currentPage, this.filter)
      .subscribe((thoughtList) => {
        this.thoughtList = thoughtList;
      });
  }

  loadMoreThoughts() {
    this.service
      .list(++this.currentPage, this.filter)
      .subscribe((thoughtList) => {
        this.thoughtList.push(...thoughtList);
        if (!thoughtList.length) {
          this.isMoreThoughts = false;
        }
      });
  }
}
