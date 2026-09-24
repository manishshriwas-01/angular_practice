import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { RecipeForm } from './components/recipe-form/recipe-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,RecipeForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reviese');
}
