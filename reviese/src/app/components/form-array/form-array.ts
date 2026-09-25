import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.html',
  styleUrl: './form-array.css',
})
export class FormArray {
  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    phones: this.fb.array([
      this.fb.control('')
    ])
  });
  get phones() {
    return this.userForm.controls.phones;
  }
  addPhone() {
    this.phones.push(
      this.fb.control('')
    );
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }
}
