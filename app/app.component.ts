import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe App</h1>


    <div *ngFor= "let recipe of allRecipes">
      <ul>
        <h1 class='jumbotron'>{{recipe.title}}</h1>
          <p> <strong> Ingredients: </strong> </p>
            <ol>
              <li [class]="goodness(recipe)" *ngFor= "let hummus of recipe.ingredients">{{hummus}}</li>
            </ol>
            <hr>
            <p><strong> Directions: </strong></p>
            <ol>
              <li (click)='isItGood(recipe)' *ngFor="let haneen of recipe.directions">{{haneen}}</li>
            </ol>
          <br>
          <button (click)="editTask()">Edit!</button>
        </ul>
      </div>
  </div>
  `
})

export class AppComponent {

  allRecipes: Recipe [] =[
    new Recipe('Cookies', ['flour', 'butter', 'sugar'], ['mix all ingredients together', 'bake the cookies'], 9),
    new Recipe('Hummus', ['chickpea', 'tahini', 'olive oil', 'garlic', 'lemon juice'], ['empty into container', 'blend it up', 'hide behind a curtain','devour'], 12),
    new Recipe('Bagels', ['flour', 'sugar', 'patience'], ['kneed dough together', 'let sit in fridge over night', 'boil for 60 seconds', 'toss em in the oven', 'cream cheese and enjoy!'], 7)
  ]
  
  goodness(recipe: Recipe) {
    if (recipe.goodness < 9) {
      return 'bg-danger';
    } else if (recipe.goodness < 10) {
      return 'bg-warning';
    } else {
      return 'bg-info';
    }
  }

  editTask(){
    alert("You just requested to edit the Recipe");
  }

  isItGood(entireRecipeObject: Recipe) {
    alert(entireRecipeObject.yummy);
  }
  payAttention() {
    alert('You should be cooking!');
  }
}

export class Recipe{
  public yummy: boolean = true;
  constructor(public title: string, public ingredients: string[], public directions: string [], public goodness: number){}

}
