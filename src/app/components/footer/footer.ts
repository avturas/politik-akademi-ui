import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {
  isDismissed(): boolean {
    return localStorage.getItem('footerDismissed') === 'true';
  }

  dismissFooter(): void {
    localStorage.setItem('footerDismissed', 'true');
  }
}
