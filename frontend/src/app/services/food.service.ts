import { Injectable } from '@angular/core';
import { Food } from "src/app/shares/Model/Food"
import { Tag } from '../shares/Model/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shares/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private Http:HttpClient) { }

  getAll():Observable<Food[]>{
    return this.Http.get<Food[]>(FOODS_URL);
  }


  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.Http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }
  getFoodById(foodId:string):Observable<Food>{
    return this.Http.get<Food>(FOOD_BY_ID_URL)
  }
 

  getAllTags(): Observable<Tag[]> {
    return this.Http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
      this.getAll() :
      this.Http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }
}
