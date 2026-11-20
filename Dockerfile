# 1. Build the Angular app. Debian images, not Alpine: Alpine binaries die with "Bus error" on some Jambotron VMs.
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npx ng build --configuration=production

# 2. Serve the static files
FROM nginx:1.27
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/aria-markdown-editor-demo/browser /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD curl -fsS http://localhost/ >/dev/null || exit 1
