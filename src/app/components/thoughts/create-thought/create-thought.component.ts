import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent {
  thought: Thought = {
    content: '',
    author: '',
    model: '',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  createThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    });
  }

  cancel() {
    this.router.navigate(['/list-thoughts']);
  }
}
