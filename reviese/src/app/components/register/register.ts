import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { passwordMatchValidator } from '../../validators/password-match.validator'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private fb = inject(FormBuilder);

  registerForm = this.fb.nonNullable.group({

    personal: this.fb.nonNullable.group({

      firstName: [
        '',
        Validators.required
      ],

      lastName: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/)
        ]
      ]

    }),

    account: this.fb.nonNullable.group(
      {

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8)
          ]
        ],

        confirmPassword: [
          '',
          Validators.required
        ]

      },
      {
        validators: passwordMatchValidator
      }
    ),

    address: this.fb.nonNullable.group({

      city: [
        '',
        Validators.required
      ],

      state: [
        '',
        Validators.required
      ],

      pincode: [
        '',
        Validators.required
      ]

    }),

    skills: this.fb.array([])
  });


  userData = {

    personal: {
      firstName: 'Manish',
      lastName: 'Shriwas',
      email: 'manish@example.com',
      phone: '9876543210'
    },

    address: {
      city: 'Kanpur',
      state: 'Uttar Pradesh',
      pincode: '208001'
    },

    skills: [
      'Angular',
      'TypeScript',
      'Node.js'
    ]

  };


  get skills() {
    return this.registerForm.controls.skills;
  }


  addSkill() {

    this.skills.push(
      this.fb.control(
        '',
        Validators.required
      )
    );

  }


  removeSkill(index: number) {

    this.skills.removeAt(index);

  }


  editUser() {

    this.registerForm.patchValue({

      personal: this.userData.personal,

      address: this.userData.address

    });


    this.skills.clear();


    this.userData.skills.forEach(skill => {

      this.skills.push(
        this.fb.control(
          skill,
          Validators.required
        )
      );

    });

  }


  submit() {

    if (this.registerForm.invalid) {

      this.registerForm.markAllAsTouched();

      return;
    }


    console.log(
      this.registerForm.getRawValue()
    );

  }

}