import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-show-more-itens',
  templateUrl: './button-show-more-itens.component.html',
  styleUrl: './button-show-more-itens.component.css',
})
export class ButtonShowMoreItensComponent {
  @Input() isMoreThoughts: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
