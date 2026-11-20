import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JtThemeToggleComponent } from '@jambotron/aria-components';
import { FormsExampleComponent } from './examples/forms-example';
import { FullExampleComponent } from './examples/full-example';
import { PreviewExampleComponent } from './examples/preview-example';

@Component({
  selector: 'app-root',
  imports: [JtThemeToggleComponent, FullExampleComponent, FormsExampleComponent, PreviewExampleComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
}
