import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from "@angular/router"
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { RouteData } from './routeData';

@Component ({
  selector : "app-header",
  templateUrl : "header.component.html",
  styleUrls : ["header.component.scss" ]
})

export class HeaderComponent implements OnInit {

  routeData$: Observable<RouteData>;
  constructor(private router:Router, private activatedRoute : ActivatedRoute) {
    this.routeData$ = router.events.pipe(
      filter(routeEvent => routeEvent instanceof NavigationEnd),
      map(() => activatedRoute),
      map(activatedRoute => activatedRoute.firstChild),
      switchMap(firstChild => firstChild.data),
      map((data: RouteData) => data)
      );
  }

  ngOnInit(){}

}


