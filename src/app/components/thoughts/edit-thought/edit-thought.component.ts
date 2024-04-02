import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css',
})
export class EditThoughtComponent {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchThoughtById(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: [thought.id],
        content: [
          thought.content,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        author: [
          thought.author,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        model: [thought.model],
      });
    });
  }

  editThought() {
    if (this.form.valid) {
      this.service.edit(this.form.value).subscribe(() => {
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

  cancelar() {
    this.router.navigate(['/list-thoughts']);
  }
}
