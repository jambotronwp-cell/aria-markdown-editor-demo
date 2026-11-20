import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideJtMarkdown } from '@jambotron/aria-markdown-editor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // KaTeX — a lazy chunk, loaded on the first formula
    provideJtMarkdown({ katex: () => import('katex').then(m => m.default) })
  ]
};
