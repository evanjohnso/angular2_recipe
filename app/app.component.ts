import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe App</h1>

    <ul>
      <li *ngFor= "let recipe of allRecipes">{{recipe.title}}
      <p> <strong> Ingredients: </strong> </p>
        <ol>
          <li *ngFor= "let hummus of recipe.ingredients">{{hummus}}</li>
        </ol>
        <hr>
        <p><strong> Directions: </strong></p>
        <ol>
          <li *ngFor="let haneen of recipe.directions">{{haneen}}</li>
        </ol>
      </li>
      <br>
    </ul>
  </div>
  `
})

export class AppComponent {

  allRecipes: Recipe [] =[
    new Recipe('Cookies', ['flour', 'butter', 'sugar'], ['mix all ingredients together', 'bake the cookies']),
    new Recipe('Hummus', ['chickpea', 'tahini', 'olive oil', 'garlic', 'lemon juice'], ['empty into container', 'blend it up', 'hide behind a curtain','devour']),
    new Recipe('Bagels', ['flour', 'sugar', 'patience'], ['kneed dough together', 'let sit in fridge over night', 'boil for 60 seconds', 'toss em in the oven', 'cream cheese and enjoy!'])
  ]
}

export class Recipe{
  constructor(public title: string, public ingredients: string[], public directions: string []){}

}
