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

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list(this.currentPage).subscribe((thoughtListData) => {
      this.thoughtList = thoughtListData;
    });
  }
}
