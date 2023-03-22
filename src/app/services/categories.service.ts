import { Injectable } from '@angular/core';
import {serviceData} from "../shared/data";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategories() {
    return serviceData.categories;
  }

  getCategory(id: string) {
    return serviceData.categories.find((cat) => cat.id.toString() == id);
  }
}
