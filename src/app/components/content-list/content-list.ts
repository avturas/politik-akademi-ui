import { Component, OnInit } from '@angular/core';
import { ContentService, ContentMeta } from '../../services/content.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  standalone: true,
  selector: 'app-content-list',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
  ],
  styleUrl: './content-list.scss',
  templateUrl: './content-list.html',
})
export class ContentList implements OnInit {
  contentList: ContentMeta[] = [];
  searchTerm: string = '';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService
      .getIndex()
      .subscribe((data) => (this.contentList = data));
  }

  get filteredContent(): ContentMeta[] {
    const term = this.searchTerm.toLowerCase();
    return this.contentList.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
    );
  }

  get groupedContent(): {
    category: string;
    modules: {
      module: string;
      items: ContentMeta[];
    }[];
  }[] {
    const term = this.searchTerm.toLowerCase();

    const filtered = this.contentList.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.module.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
    );

    const categoryMap = new Map<string, Map<string, ContentMeta[]>>();

    for (const item of filtered) {
      if (!categoryMap.has(item.category)) {
        categoryMap.set(item.category, new Map());
      }

      const moduleMap = categoryMap.get(item.category)!;

      if (!moduleMap.has(item.module)) {
        moduleMap.set(item.module, []);
      }

      moduleMap.get(item.module)!.push(item);
    }

    return Array.from(categoryMap.entries()).map(([category, modules]) => ({
      category,
      modules: Array.from(modules.entries()).map(([module, items]) => ({
        module,
        items,
      })),
    }));
  }
}
