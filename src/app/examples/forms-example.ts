import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, FormField, required } from '@angular/forms/signals';
import { JtMdEditorComponent } from '@jambotron/aria-markdown-editor';

@Component({
  selector: 'demo-forms-example',
  imports: [JtMdEditorComponent, FormField, ReactiveFormsModule],
  template: `
    <div class="forms">
      <div>
        <h3>Signal Forms — <code>[formField]</code></h3>
        <label class="label" for="title">Title</label>
        <input id="title" class="jt-input" [formField]="post.title">
        <jt-md-editor class="small" [formField]="post.body" layout="tabs" placeholder="The body is required" />
        <p class="state">
          valid: <strong>{{ post().valid() }}</strong> · touched: <strong>{{ post.body().touched() }}</strong>
          @if (post.body().errors()[0]; as error) { · <span class="error">{{ error.message }}</span> }
        </p>
        <pre class="snippet">{{ json() }}</pre>
      </div>
      <div>
        <h3>Reactive forms — <code>[formControl]</code></h3>
        <jt-md-editor class="small" [formControl]="comment" layout="tabs" />
        <div class="row">
          <button type="button" class="jt-button jt-button--outlined" (click)="toggle()">{{ comment.disabled ? 'Enable' : 'Disable' }}</button>
          <button type="button" class="jt-button" (click)="comment.reset('**Reset** from code')">Set value from code</button>
        </div>
        <p class="state">valid: <strong>{{ comment.valid }}</strong> · length: <strong>{{ comment.value.length }}</strong></p>
      </div>
    </div>
  `,
  styles: [`
    .forms { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--jt-space-5); }
    h3 { margin: 0 0 var(--jt-space-3); font-size: var(--jt-fs-base); }
    .label { display: block; margin-bottom: var(--jt-space-1); color: var(--jt-text-muted); font-size: var(--jt-fs-sm); }
    .jt-input { margin-bottom: var(--jt-space-3); }
    .small { --jt-md-editor-height: 220px; }
    .state { margin: var(--jt-space-2) 0 0; color: var(--jt-text-muted); font-size: var(--jt-fs-sm); }
    .error { color: var(--jt-danger-text); }
    .row { margin-top: var(--jt-space-2); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsExampleComponent {
  private readonly model = signal({ title: 'Release notes', body: '' });
  protected readonly post = form(this.model, path => {
    required(path.body, { message: 'Write something' });
  });
  protected readonly json = () => JSON.stringify(this.model(), null, 2);

  protected readonly comment = new FormControl('Comments use the **same** editor.', { nonNullable: true, validators: Validators.required });

  protected toggle(): void {
    if (this.comment.disabled) {
      this.comment.enable();
    } else {
      this.comment.disable();
    }
  }
}
