import { Component, Input } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css',
})
export class ThoughtComponent {
  @Input() thought: Thought = {
    id: '',
    content: 'Default',
    author: 'Default',
    model: 'modelo1',
    favorite: false,
  };

  constructor(private service: ThoughtService) {}

  updateFavoriteIcon() {
    this.service.changeFavorite(this.thought).subscribe();
  }

  changeFavoriteIcon(): string {
    if (this.thought.favorite == false) {
      return 'inativo';
    }
    return 'ativo';
  }

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
