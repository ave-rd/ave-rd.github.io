---
title: Style Guide
description: "Design system reference: tokens, type, components"
layout: page
sitemap: false
---

This page is an internal reference for the AVE-RD design system. Every visual primitive used on the site appears here so changes to tokens or components can be reviewed in one place.

## Color tokens

<table>
  <thead>
    <tr><th>Token</th><th>Swatch</th><th>Used for</th></tr>
  </thead>
  <tbody>
    <tr><td><code>--accent</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--accent);vertical-align:middle"></span></td><td>Brand accent, link hover, focus outline, selection, skip link</td></tr>
    <tr><td><code>--accent-strong</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--accent-strong);vertical-align:middle"></span></td><td>Partner-card link hover</td></tr>
    <tr><td><code>--accent-soft</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--accent-soft);vertical-align:middle"></span></td><td>Blockquote border, tap highlight</td></tr>
    <tr><td><code>--ink</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--ink);vertical-align:middle"></span></td><td>Body text, default link, table header rule</td></tr>
    <tr><td><code>--muted</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--muted);vertical-align:middle"></span></td><td>Secondary text, copyright, blockquote</td></tr>
    <tr><td><code>--bg</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--bg);border:1px solid var(--border);vertical-align:middle"></span></td><td>Page background</td></tr>
    <tr><td><code>--bg-alt</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--bg-alt);border:1px solid var(--border);vertical-align:middle"></span></td><td>Card logo well, table row hover</td></tr>
    <tr><td><code>--border</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--border);vertical-align:middle"></span></td><td>Hairlines, card border</td></tr>
  </tbody>
</table>

All color tokens flip automatically under `prefers-color-scheme: dark`.

## Type scale

<table>
  <thead>
    <tr><th>Token</th><th>Size</th><th>Sample</th></tr>
  </thead>
  <tbody>
    <tr><td><code>$text-xs</code></td><td>12 px</td><td><span style="font-family:'Open Sans',sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:1px">Navbar label</span></td></tr>
    <tr><td><code>$text-sm</code></td><td>14 px</td><td><span style="font-family:'Open Sans',sans-serif;font-size:14px">Footer copyright, partner-card link</span></td></tr>
    <tr><td><code>$text-base</code></td><td>18 px</td><td><span style="font-family:'Open Sans',sans-serif;font-size:18px">Tables, smaller UI text</span></td></tr>
    <tr><td><code>$text-md</code></td><td>20 px</td><td><span style="font-family:'Lora',serif;font-size:20px">Body prose (Lora at this size)</span></td></tr>
    <tr><td><code>$text-lg</code></td><td>24 px</td><td><span style="font-family:'Open Sans',sans-serif;font-size:24px;font-weight:300">Hero subheading</span></td></tr>
    <tr><td><code>$text-2xl</code></td><td>50 px</td><td><span style="font-family:'Open Sans',sans-serif;font-size:50px;font-weight:800">Hero h1</span></td></tr>
    <tr><td><code>$text-3xl</code></td><td>80 px</td><td><span style="font-family:'Open Sans',sans-serif;font-size:80px;font-weight:800">Hero h1 ≥ 768 px</span></td></tr>
  </tbody>
</table>

## Spacing scale (8 px base)

<table>
  <thead>
    <tr><th>Token</th><th>Value</th><th>Visual</th></tr>
  </thead>
  <tbody>
    <tr><td><code>$space-1</code></td><td>4 px</td><td><div style="height:8px;width:4px;background:var(--accent)"></div></td></tr>
    <tr><td><code>$space-2</code></td><td>8 px</td><td><div style="height:8px;width:8px;background:var(--accent)"></div></td></tr>
    <tr><td><code>$space-3</code></td><td>16 px</td><td><div style="height:8px;width:16px;background:var(--accent)"></div></td></tr>
    <tr><td><code>$space-4</code></td><td>24 px</td><td><div style="height:8px;width:24px;background:var(--accent)"></div></td></tr>
    <tr><td><code>$space-5</code></td><td>32 px</td><td><div style="height:8px;width:32px;background:var(--accent)"></div></td></tr>
    <tr><td><code>$space-6</code></td><td>48 px</td><td><div style="height:8px;width:48px;background:var(--accent)"></div></td></tr>
    <tr><td><code>$space-7</code></td><td>64 px</td><td><div style="height:8px;width:64px;background:var(--accent)"></div></td></tr>
    <tr><td><code>$space-8</code></td><td>96 px</td><td><div style="height:8px;width:96px;background:var(--accent)"></div></td></tr>
  </tbody>
</table>

## Headings

# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4

## Prose

This is a paragraph at body size. **Bold** and _italic_ flow inline, and a [link](#) uses `--ink` by default and flips to `--accent` on hover.

> A blockquote uses `--muted` text with an `--accent-soft` border on the left.

* Bulleted item one
* Bulleted item two
* Bulleted item three

1. Ordered item one
2. Ordered item two
3. Ordered item three

## Brand logo

<img class="brand-logo" src="/img/logos/logo_ave.jpg" alt="AVE-RD logo" loading="lazy" />

Size scales from 96 px to 150 px via `clamp(96px, 12vw, 150px)`.

## Partner card

<section class="partner-card">
  <div class="partner-card__logo">
    <img src="/img/logos/logo_ave.jpg" alt="Sample partner logo" loading="lazy" />
  </div>
  <div class="partner-card__body">
    <p>Body copy describing the partner. Uses Lora at body size with relaxed line-height. Links inside the body are styled like prose; the call-to-action below is the branded variant.</p>
    <a class="partner-card__link" href="#">Visit example.org</a>
  </div>
</section>

## Photo gallery

<ul class="photo-gallery">
  <li><a href="#"><img src="/wp-content/uploads/2017/09/30890738422_6f6579e483_z-300x200.jpg" alt="Sample photo" loading="lazy" /></a></li>
  <li><a href="#"><img src="/wp-content/uploads/2017/09/31019754516_ff7690d52d_z-300x200.jpg" alt="Sample photo" loading="lazy" /></a></li>
  <li><a href="#"><img src="/wp-content/uploads/2017/09/31033191935_7bdfdc6880_z-300x200.jpg" alt="Sample photo" loading="lazy" /></a></li>
  <li><a href="#"><img src="/wp-content/uploads/2017/09/31055449305_9c0fb8e8d0_z-300x200.jpg" alt="Sample photo" loading="lazy" /></a></li>
</ul>

## Table

| Column A | Column B | Column C |
|----------|----------|----------|
| Cell one | Cell two | Cell three |
| Cell four | Cell five | Cell six |
| Cell seven | Cell eight | Cell nine |

## Skip link

Press <kbd>Tab</kbd> from the address bar — the first focus stop is the "Skip to content" link in the upper-left corner, which uses `--accent` and is keyboard-only visible.
