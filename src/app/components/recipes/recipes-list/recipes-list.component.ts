import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  recipes:Recipes[] = [
    new Recipes('A test','simply test','https://img.taste.com.au/6ppGDG6D/w643-h428-cfill-q90/taste/2019/02/healthy-tuna-mornay-153401-1.jpg')
  ];
  constructor(){
    
  }

  ngOnInit(): void {
    
  }
  }

  

