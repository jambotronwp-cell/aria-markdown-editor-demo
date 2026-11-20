import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JtMdEditorComponent } from '@jambotron/aria-markdown-editor';

const ARTICLE = `# Deploy a Docker Compose project

Upload a **ZIP** or connect a Git repository — Jambotron builds it and gives the service a domain with HTTPS.

## Steps

1. Create a project
2. Pick \`docker-compose.yml\`
3. Give the \`web\` service a domain, port \`80\`

- [x] HTTPS from Let's Encrypt
- [x] Logs in the browser
- [ ] Your own domain — add a CNAME

| Plan | RAM | Price |
| --- | --- | --- |
| Free | 256 MB | 0 € |
| Pro | 2 GB | 9 € |

Average response time $\\bar{t} = \\frac{1}{n}\\sum_{i=1}^{n} t_i$, and for the curious:

$$
e^{i\\pi} + 1 = 0
$$

> Paste or drop an image into the text — it "uploads" here (in this demo, only in your browser).

\`\`\`yaml
services:
  web:
    image: nginx:1.27
\`\`\`
`;

@Component({
  selector: 'demo-full-example',
  imports: [JtMdEditorComponent],
  template: `
    <jt-md-editor [(value)]="text" [uploadImage]="upload" placeholder="Write Markdown…" />
    <pre class="snippet">&lt;jt-md-editor [(value)]="text" [uploadImage]="upload" /&gt;

upload = (file: File) =&gt; firstValueFrom(this.api.upload(file)); // → url or {{ '{' }} url, alt {{ '}' }}</pre>
  `,
  styles: [':host { display: block; --jt-md-editor-height: 560px; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullExampleComponent {
  protected readonly text = signal(ARTICLE);
  // A real app sends the file to its server; the demo keeps it in the browser and waits a bit to show the placeholder
  protected readonly upload = (file: File) =>
    new Promise<string>(resolve => setTimeout(() => resolve(URL.createObjectURL(file)), 900));
}
