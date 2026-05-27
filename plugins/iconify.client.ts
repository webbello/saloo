/**
 * Registers the <iconify-icon> custom element.
 *
 * The `iconify-icon` npm package auto-calls `customElements.define('iconify-icon', ...)`
 * as a side-effect of being imported.  This plugin replaces the CDN <script> tag that
 * was previously in nuxt.config.ts app.head — same behaviour, zero external request,
 * and the bundle is cached with the rest of the site assets.
 *
 * The `.client` suffix ensures this only runs in the browser (customElements is not
 * available on the server).  During SSR, <iconify-icon> elements are rendered as
 * inert custom elements and upgraded on hydration — identical to the previous CDN
 * behaviour.
 */
import 'iconify-icon'

export default defineNuxtPlugin(() => {
  // No runtime logic needed — the import above is the entire effect.
})
