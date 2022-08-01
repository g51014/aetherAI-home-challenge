import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPages } from "@utilities/maps/route.map";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public userPages = UserPages;

  ngOnInit(): void {
  }

  public navigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  public isActivated(url: string): boolean {
    return new RegExp(`${url}$`).test(this.router.url);
  }

}
