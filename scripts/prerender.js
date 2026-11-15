// Injects the server-rendered app into dist/index.html so the page has real content before JS loads.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist/index.html')
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

// Absolute site address for canonical and link-preview tags. Netlify sets URL during builds
// (it becomes the custom domain once one is added); SITE_URL overrides it.
const siteUrl = (process.env.SITE_URL || process.env.URL || 'https://vineethk.netlify.app').replace(/\/$/, '')

const html = (await readFile(dist, 'utf8')).replaceAll('%SITE_URL%', siteUrl)
if (!html.includes('<div id="root"></div>')) throw new Error('Root placeholder not found in dist/index.html')
await writeFile(dist, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
await rm('dist-ssr', { recursive: true, force: true })
console.log(`✓ prerendered dist/index.html for ${siteUrl}`)
