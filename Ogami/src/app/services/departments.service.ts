import { Injectable } from '@angular/core';
import { Depart } from './depart';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  constructor() {}
  private depart: Depart[] = [
    { id: 1, name: 'option1' },
    { id: 2, name: 'option2' },
    { id: 3, name: 'option3' }
  ];

  getDepart(): Depart[] {
    return this.depart;
  }
}
