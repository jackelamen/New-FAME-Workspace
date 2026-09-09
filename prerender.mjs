/* Renders the app to static HTML at build time and injects it into dist/index.html.
   Crawlers and the first paint get real content; React hydrates on top of it. */
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'));

const html = readFileSync(resolve(root, 'dist/index.html'), 'utf-8');
const markup = render();

if (!html.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find the root container in dist/index.html');
}

writeFileSync(
  resolve(root, 'dist/index.html'),
  html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
);

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });
console.log('prerender: injected %d bytes of static markup', markup.length);
