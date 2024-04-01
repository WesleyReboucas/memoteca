import { Component, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css',
})
export class ThoughtComponent {
  @Input() thoughts: Thought = {
    id: 0,
    content: 'Default',
    author: 'Default',
    model: 'modelo1',
  };

  widthThought(): string {
    if (this.thoughts.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
