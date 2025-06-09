import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { provideRouter } from '@angular/router';

import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(), provideMarkdown()],
});
