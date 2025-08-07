import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContentMeta {
  title: string;
  slug: string;
  module: string;
  category: string;
  path: string;
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  private indexUrl =
    'https://avturas.github.io/politik-akademi-icerik/index.json';

  constructor(private http: HttpClient) {}

  getIndex(): Observable<ContentMeta[]> {
    return this.http.get<ContentMeta[]>(this.indexUrl);
  }
}
