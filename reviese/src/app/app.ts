import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { RecipeForm } from './components/recipe-form/recipe-form';
import { Register } from './components/register/register';
import { FormArray } from './components/form-array/form-array';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,RecipeForm,Register,FormArray],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reviese');
}
