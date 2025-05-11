import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderStateService {
  private showInputsSubject = new BehaviorSubject<boolean>(true);
  private isTemasRouteSubject = new BehaviorSubject<boolean>(false);
  private isProfesionalesRouteSubject = new BehaviorSubject<boolean>(false);

  showInputs$ = this.showInputsSubject.asObservable();
  isTemasRoute$ = this.isTemasRouteSubject.asObservable();
  isProfesionalesRoute$ = this.isProfesionalesRouteSubject.asObservable();

  setShowInputs(value: boolean) {
    this.showInputsSubject.next(value);
  }

  setIsTemasRoute(value: boolean) {
    this.isTemasRouteSubject.next(value);
  }

  setIsProfesionalesRoute(value: boolean) {
    this.isProfesionalesRouteSubject.next(value);
  }
}
