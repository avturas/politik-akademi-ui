import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/">
        <img
          src="assets/logo.svg"
          alt="Avturas Akademi Logo"
          class="navbar-logo"
        />
      </a>
    </mat-toolbar>
  `,
  styles: [
    `
      .cursor-pointer {
        cursor: pointer;
      }

      img {
        height: 36px;
        margin: auto;
      }
    `,
  ],
})
export class Navbar {}
