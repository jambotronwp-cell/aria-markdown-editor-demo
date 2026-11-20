import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JtMdEditorComponent, JtMdPreviewComponent, JtMdTool } from '@jambotron/aria-markdown-editor';

@Component({
  selector: 'demo-preview-example',
  imports: [JtMdEditorComponent, JtMdPreviewComponent],
  template: `
    <div class="pair">
      <div class="phone" aria-label="Phone width, 360px">
        <jt-md-editor [(value)]="text" [tools]="tools" />
      </div>
      <article class="page">
        <jt-md-preview [markdown]="text()" />
      </article>
    </div>
    <pre class="snippet">&lt;jt-md-editor [(value)]="text" [tools]="['bold', 'italic', 'link', '|', 'bullets', 'tasks', '|', 'math']" /&gt;
&lt;jt-md-preview [markdown]="text()" /&gt;</pre>
  `,
  styles: [`
    .pair { display: grid; grid-template-columns: 360px minmax(0, 1fr); gap: var(--jt-space-5); align-items: start; }
    .phone { width: 100%; max-width: 360px; --jt-md-editor-height: 320px; padding: var(--jt-space-3);
      border: 2px solid var(--jt-divider); border-radius: 28px; box-sizing: border-box; }
    .page { padding: var(--jt-space-4); border-radius: var(--jt-radius-md); border: 1px dashed var(--jt-divider); }
    @media (max-width: 760px) { .pair { grid-template-columns: 1fr; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewExampleComponent {
  protected readonly tools: JtMdTool[] = ['bold', 'italic', 'link', '|', 'bullets', 'tasks', '|', 'math'];
  protected readonly text = signal(`### Shopping list\n\n- [x] Coffee\n- [ ] **Milk**\n- [ ] Bread\n\nBudget: $\\approx 12$ €`);
}
