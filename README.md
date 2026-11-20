# aria-markdown-editor-demo

Live examples of [`@jambotron/aria-markdown-editor`](https://gitea.jambotron.com/jambotron_gang/-/packages/npm/@jambotron%2Faria-markdown-editor) —
a Markdown editor for Angular on Angular Aria:

1. **The editor** — toolbar, hotkeys, lists continued on Enter, formulas (KaTeX, lazy), tables, task lists, image paste / drop.
2. **In forms** — Signal Forms `[formField]` with validation, reactive `[formControl]` (disable, set value from code).
3. **Phone width and read-only pages** — tabs below 720px, your own toolbar, `<jt-md-preview>`.

Theme switch (auto / light / dark) and icons come from [`@jambotron/aria-components`](https://gitea.jambotron.com/jambotron_gang/-/packages/npm/@jambotron%2Faria-components).

## Run

```bash
npm ci                 # @jambotron scope comes from the Gitea npm registry (.npmrc), no token needed
npx ng serve           # http://localhost:4200
```

## Deploy on Jambotron

Upload the repository (ZIP) as a project, pick `docker-compose.yml` in the deploy wizard, give the `web` service a domain,
port `80`. The image builds the app (`node:22-bookworm-slim`) and serves it with nginx (`nginx:1.27`).

License: [MIT](LICENSE) © Jambotron.
