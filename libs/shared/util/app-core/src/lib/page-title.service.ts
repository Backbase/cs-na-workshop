import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title,
    private readonly router: Router,
  ) {}

  run() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          let lastRouteWithTitle = route;

          while (route.firstChild) {
            if (this.getTitle(route)) {
              lastRouteWithTitle = route;
            }

            route = route.firstChild;
          }

          return this.getTitle(route) ? route : lastRouteWithTitle;
        }),
        filter((route: ActivatedRoute) => route.outlet === 'primary'),
        map((route: ActivatedRoute) => this.getTitle(route)),
        filter((title): title is any => title !== undefined),
        map((title: any) => (title instanceof Function ? title() : title)),
      )
      .subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
  }

  private getTitle(route: ActivatedRoute): string | undefined {
    const routeData = route.snapshot.data;
    return routeData?.title;
  }
}
