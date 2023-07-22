import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
   import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
   import { filter } from 'rxjs/operators';
   
@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  // private breadcrumb = new BehaviorSubject<string[]>([]);
  //    breadcrumb$ = this.breadcrumb.asObservable();
  //    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  //      this.router.events
  //        .pipe(filter((event) => event instanceof NavigationEnd))
  //        .subscribe(() => {
  //          const breadcrumbData = this.buildBreadcrumb(this.activatedRoute.root);
  //          this.breadcrumb.next(breadcrumbData);
  //        });
  //    }
    //  private buildBreadcrumb(
    //    route: ActivatedRoute,
    //    url: string = '',
    //    breadcrumbs: string[] = []
    //  ): string[] {
    //    if (route.routeConfig && route.routeConfig.data && route.routeConfig.data.breadcrumb) {
    //      const breadcrumbLabel = route.routeConfig.data.breadcrumb;
    //      const nextUrl = `${url}${route.routeConfig.path}/`;
    //      breadcrumbs.push(breadcrumbLabel);
    //      if (route.firstChild) {
    //        return this.buildBreadcrumb(route.firstChild, nextUrl, breadcrumbs);
    //      }
    //    }
    //    return breadcrumbs;
    //  }
}
