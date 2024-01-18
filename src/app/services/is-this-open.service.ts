import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsThisOpenService {
  public isFilterOpen = false;
  constructor() {}
}
