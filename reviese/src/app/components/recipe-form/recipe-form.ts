import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.css'
})
export class RecipeForm {

  private fb = inject(FormBuilder);

  recipeForm = this.fb.group({

    title: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    category: [
      '',
      Validators.required
    ],

    description: [
      '',
      Validators.required
    ],

    author: this.fb.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]

    })

  });

  submitForm() {

    if (this.recipeForm.invalid) {
      this.recipeForm.markAllAsTouched();
      return;
    }

    console.log(this.recipeForm.value);
  }
}