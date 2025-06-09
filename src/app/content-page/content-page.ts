import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ContentMeta } from '../services/content.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  async ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    const indexUrl =
      'https://raw.githubusercontent.com/avturas/politik-akademi-icerik/main/index.json';

    const index = await this.http.get<ContentMeta[]>(indexUrl).toPromise();

    const matched = index?.find((item) => item.slug === this.slug);

    if (matched) {
      this.markdownUrl = `https://raw.githubusercontent.com/avturas/politik-akademi-icerik/main/${matched.path}`;
    }
  }
}
