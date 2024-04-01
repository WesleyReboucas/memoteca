import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrl: './delete-thought.component.css',
})
export class DeleteThoughtComponent {
  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchThoughtById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  deleteThought() {
    if (this.thought.id) {
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['/list-thoughts']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/list-thoughts']);
  }
}
