import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  routes: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.routes.push(activatedRoute.snapshot);
    console.log(this.routes);
  }
}
