import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      content: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      author: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      model: ['modelo1'],
    });
  }

  createThought() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/list-thoughts']);
      });
    } else {
      alert('Dados incorretos, verifique os dados inseridos.');
    }
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }

  cancel() {
    this.router.navigate(['/list-thoughts']);
  }
}
