import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ContentMeta } from '../services/content.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-content-page',
  templateUrl: './content-page.html',
  styleUrl: './content-page.scss',
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class ContentPage implements OnInit, OnDestroy {
  slug = '';
  markdownContent: string | null = null;
  readingTime: number | null = null;

  previousLesson: ContentMeta | null = null;
  nextLesson: ContentMeta | null = null;

  private contentIndex: ContentMeta[] = [];
  private readonly indexUrl =
    'https://avturas.github.io/politik-akademi-icerik/index.json';
  private routeSub: Subscription | undefined;

  isRead: boolean = false;
  private readonly READ_LESSONS_KEY = 'readLessons';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    try {
      this.contentIndex =
        (await this.http.get<ContentMeta[]>(this.indexUrl).toPromise()) || [];
    } catch (error) {
      console.error('Failed to load content index:', error);
    }

    this.routeSub = this.route.paramMap.subscribe((params) => {
      const newSlug = params.get('slug');
      if (newSlug) {
        this.slug = newSlug;
        this.loadContent(newSlug);
      }
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  async loadContent(slug: string) {
    if (this.contentIndex.length === 0) {
      console.error('Content index is empty.');
      return;
    }

    this.markdownContent = null;
    this.readingTime = null;
    this.previousLesson = null;
    this.nextLesson = null;
    this.checkReadStatus();

    this.cdr.detectChanges();

    const currentIndex = this.contentIndex.findIndex(
      (item) => item.slug === slug
    );

    if (currentIndex === -1) {
      console.error('Content not found for slug:', slug);
      return;
    }

    const matched = this.contentIndex[currentIndex];
    this.previousLesson = this.contentIndex[currentIndex - 1] || null;
    this.nextLesson = this.contentIndex[currentIndex + 1] || null;

    try {
      const markdownUrl = `https://avturas.github.io/politik-akademi-icerik/${matched.path}`;
      const content = await this.http
        .get(markdownUrl, { responseType: 'text' })
        .toPromise();

      if (content) {
        this.readingTime = this.calculateReadingTime(content);
        this.markdownContent = content;
        this.cdr.detectChanges();
      }
    } catch (error) {
      console.error('Error loading markdown content:', error);
    }
  }

  private calculateReadingTime(text: string): number {
    if (!text) {
      return 0;
    }
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
  }

  private getReadLessons(): { [slug: string]: string } {
    const readLessonsRaw = localStorage.getItem(this.READ_LESSONS_KEY);
    return readLessonsRaw ? JSON.parse(readLessonsRaw) : {};
  }

  checkReadStatus(): void {
    const readLessons = this.getReadLessons();
    this.isRead = !!readLessons[this.slug];
  }

  toggleReadStatus(): void {
    const readLessons = this.getReadLessons();

    if (this.isRead) {
      delete readLessons[this.slug];
      this.isRead = false;
    } else {
      readLessons[this.slug] = new Date().toISOString();
      this.isRead = true;
    }

    localStorage.setItem(this.READ_LESSONS_KEY, JSON.stringify(readLessons));

    this.cdr.detectChanges();
  }
}
