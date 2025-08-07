import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ContentMeta } from '../services/content.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-content-page',
  templateUrl: './content-page.html',
  styleUrl: './content-page.scss',
  imports: [CommonModule, RouterModule, MarkdownModule],
})
export class ContentPage implements OnInit {
  slug = '';
  markdownUrl = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    const indexUrl =
      'https://avturas.github.io/politik-akademi-icerik/index.json';

    const index = await this.http.get<ContentMeta[]>(indexUrl).toPromise();

    const matched = index?.find((item) => item.slug === this.slug);

    if (matched) {
      this.markdownUrl = `https://avturas.github.io/politik-akademi-icerik/${matched.path}`;
      this.cdr.detectChanges();
    }
  }
}
