import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export default class DashboardComponent {
  public itemsMenu = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path && !route.path.includes(':'));

  constructor() {}
}
