---
title: Style guide
description: "Tokens, type, and components for the AVE-RD design system (Iznik)."
eyebrow: "Internal · Iznik on AVE-RD"
layout: page
sitemap: false
---

<p class="dropcap">
  This page is the working reference for the AVE-RD design system. It documents
  every primitive used on the site &mdash; color tokens, type scale, spacing,
  components &mdash; so future maintainers can edit with confidence and so the
  visual language stays internally consistent.
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Color · five families</div>
  <h2>Iznik palette</h2>
  <p class="lede">
    Bole, cobalt, turquoise, parchment, ink. Five color families, sampled from
    16th-century Iznik pottery. All five are exposed as CSS custom properties
    and SCSS variables.
  </p>
</div>

<table>
  <thead>
    <tr><th>Family</th><th>500 anchor</th><th>Use</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bole</code></td>
      <td><span style="display:inline-block;width:96px;height:24px;border-radius:4px;background:var(--bole-500);vertical-align:middle"></span></td>
      <td>Editorial accent: eyebrows, numerals, emphasis, warning</td>
    </tr>
    <tr>
      <td><code>cobalt</code></td>
      <td><span style="display:inline-block;width:96px;height:24px;border-radius:4px;background:var(--cobalt-500);vertical-align:middle"></span></td>
      <td>Action affordance: links, primary buttons, focus ring</td>
    </tr>
    <tr>
      <td><code>turquoise</code></td>
      <td><span style="display:inline-block;width:96px;height:24px;border-radius:4px;background:var(--turquoise-500);vertical-align:middle"></span></td>
      <td>Research / success / verified state</td>
    </tr>
    <tr>
      <td><code>parchment</code></td>
      <td><span style="display:inline-block;width:96px;height:24px;border-radius:4px;background:var(--parchment-50);border:1px solid var(--border);vertical-align:middle"></span></td>
      <td>Page surface (50). Soft inset (100). Dashed dividers.</td>
    </tr>
    <tr>
      <td><code>ink</code></td>
      <td><span style="display:inline-block;width:96px;height:24px;border-radius:4px;background:var(--ink-700);vertical-align:middle"></span></td>
      <td>Body text, headings, table rules</td>
    </tr>
  </tbody>
</table>

<h3>Semantic tokens</h3>

<p>
  Components compose against these. Reach for raw <code>bole-*</code> /
  <code>cobalt-*</code> only for editorial accents (eyebrows, numerals).
</p>

<table>
  <thead>
    <tr><th>Token</th><th>Swatch</th><th>Where</th></tr>
  </thead>
  <tbody>
    <tr><td><code>--bg</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--bg);border:1px solid var(--border);vertical-align:middle"></span></td><td>Page surface (parchment-50)</td></tr>
    <tr><td><code>--bg-card</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--bg-card);border:1px solid var(--border);vertical-align:middle"></span></td><td>Raised cards</td></tr>
    <tr><td><code>--bg-alt</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--bg-alt);border:1px solid var(--border);vertical-align:middle"></span></td><td>Logo well, table row hover</td></tr>
    <tr><td><code>--foreground</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--foreground);vertical-align:middle"></span></td><td>Body text</td></tr>
    <tr><td><code>--muted-foreground</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--muted-foreground);vertical-align:middle"></span></td><td>Secondary text, lede</td></tr>
    <tr><td><code>--display</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--display);vertical-align:middle"></span></td><td>Headings</td></tr>
    <tr><td><code>--primary</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--primary);vertical-align:middle"></span></td><td>Action / link / focus</td></tr>
    <tr><td><code>--accent-editorial</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--accent-editorial);vertical-align:middle"></span></td><td>Eyebrows, numerals</td></tr>
    <tr><td><code>--accent-research</code></td><td><span style="display:inline-block;width:80px;height:24px;border-radius:4px;background:var(--accent-research);vertical-align:middle"></span></td><td>Research tag, success</td></tr>
  </tbody>
</table>

<p>
  All semantic tokens flip automatically under <code>prefers-color-scheme: dark</code>.
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Typography · two voices</div>
  <h2>Newsreader for naming, Instrument Sans for facts</h2>
</div>

<table>
  <thead>
    <tr><th>Class / token</th><th>Sample</th></tr>
  </thead>
  <tbody>
    <tr><td><code>$text-xs (11)</code> + <code>.eyebrow</code></td><td><span class="eyebrow">Eyebrow signature</span></td></tr>
    <tr><td><code>$text-sm (13)</code></td><td><span style="font-family:'Instrument Sans',sans-serif;font-size:13px">Footer copy, partner-card link</span></td></tr>
    <tr><td><code>$text-base (15)</code></td><td><span style="font-family:'Instrument Sans',sans-serif;font-size:15px">Tables, controls, metadata</span></td></tr>
    <tr><td><code>$text-md (17)</code></td><td><span style="font-family:'Instrument Sans',sans-serif;font-size:17px">Body prose</span></td></tr>
    <tr><td><code>$text-lg (20)</code> + <code>.lede</code></td><td><em style="font-family:Newsreader,serif;font-size:20px;color:var(--muted-foreground)">An italic Newsreader lede.</em></td></tr>
    <tr><td><code>$text-xl (28)</code> &mdash; h3</td><td><span style="font-family:Newsreader,serif;font-size:28px;font-weight:500">Card title</span></td></tr>
    <tr><td><code>$text-2xl (34)</code> &mdash; h2</td><td><span style="font-family:Newsreader,serif;font-size:34px;font-weight:500">Section title</span></td></tr>
    <tr><td><code>$text-3xl (44)</code> &mdash; h1</td><td><span style="font-family:Newsreader,serif;font-size:44px;font-weight:500">Page title</span></td></tr>
  </tbody>
</table>

<h3>OpenType utilities</h3>

<p>
  Old-style figures sit on the line: <span class="font-osf">In 2024 we shipped 1,234 records.</span><br />
  Lining figures loom: <span style="font-feature-settings:'lnum' 1">In 2024 we shipped 1,234 records.</span>
</p>

<p>
  Tabular figures align in columns: <span class="font-tnum">001<br />024<br />128</span>
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Spacing · 4 px grid</div>
  <h2>Eight steps</h2>
</div>

<table>
  <thead>
    <tr><th>Token</th><th>Value</th><th>Visual</th></tr>
  </thead>
  <tbody>
    <tr><td><code>$space-2</code></td><td>8 px</td><td><div style="height:8px;width:8px;background:var(--bole-500)"></div></td></tr>
    <tr><td><code>$space-3</code></td><td>12 px</td><td><div style="height:8px;width:12px;background:var(--bole-500)"></div></td></tr>
    <tr><td><code>$space-4</code></td><td>16 px</td><td><div style="height:8px;width:16px;background:var(--bole-500)"></div></td></tr>
    <tr><td><code>$space-6</code></td><td>24 px</td><td><div style="height:8px;width:24px;background:var(--bole-500)"></div></td></tr>
    <tr><td><code>$space-7</code></td><td>32 px</td><td><div style="height:8px;width:32px;background:var(--bole-500)"></div></td></tr>
    <tr><td><code>$space-8</code></td><td>48 px</td><td><div style="height:8px;width:48px;background:var(--bole-500)"></div></td></tr>
    <tr><td><code>$space-9</code></td><td>64 px</td><td><div style="height:8px;width:64px;background:var(--bole-500)"></div></td></tr>
    <tr><td><code>$space-10</code></td><td>96 px</td><td><div style="height:8px;width:96px;background:var(--bole-500)"></div></td></tr>
  </tbody>
</table>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Components · live samples</div>
  <h2>The Iznik component layer</h2>
</div>

<h3>Eyebrow</h3>
<p><span class="eyebrow eyebrow--rule">Section eyebrow with rule</span></p>
<p><span class="eyebrow">Section eyebrow without rule</span></p>

<h3>Badges (Iznik tag vocabulary)</h3>
<p>
  <span class="badge badge--cohort">Cohort <span class="font-osf">2024</span></span>
  <span class="badge badge--research">Research</span>
  <span class="badge badge--department">Department</span>
  <span class="badge badge--status">In residence</span>
  <span class="badge badge--emeritus">Emeritus</span>
  <span class="badge badge--success">Verified</span>
  <span class="badge badge--info">Info</span>
  <span class="badge badge--warning">Warning</span>
  <span class="badge badge--neutral">Neutral</span>
</p>

<h3>Stat strip</h3>
<dl class="stat-strip">
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Students reached</dt>
    <dd class="stat-strip__value">200,000</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Surveys collected</dt>
    <dd class="stat-strip__value">300,000</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Officials mobilized</dt>
    <dd class="stat-strip__value">2,700</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Annual batches</dt>
    <dd class="stat-strip__value">2</dd>
  </div>
</dl>

<h3>Numbered editorial list</h3>
<ol class="numbered-list">
  <li>
    <div>
      <h3>First effect</h3>
      <p>Body text describing the finding. The numeral is bole, set in old-style figures.</p>
    </div>
  </li>
  <li>
    <div>
      <h3>Second effect</h3>
      <p>The list is counter-reset; the bole numeral is generated by CSS, not hand-numbered.</p>
    </div>
  </li>
</ol>

<h3>Signal panel</h3>
<div class="signal-panel">
  <div class="eyebrow">Citation</div>
  <pre>@article{averd2024,
  title  = {The value of education in the Dominican Republic},
  year   = {2024},
  author = {AVE-RD project team}
}</pre>
</div>

<h3>Brand logo</h3>
<p><img class="brand-logo" src="/img/logos/logo_ave.jpg" alt="AVE-RD logo" loading="lazy" /></p>
<p>Size scales from 96&nbsp;px to 150&nbsp;px via <code>clamp(96px, 12vw, 150px)</code>.</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Six principles</div>
  <h2>How to compose against the system</h2>
</div>

<ol class="numbered-list">
  <li>
    <div><h3>One accent at a time</h3>
    <p>Bole and cobalt are both vivid. Pick one per region — bole for editorial, cobalt for action. Don&rsquo;t mix.</p></div>
  </li>
  <li>
    <div><h3>Parchment, not white</h3>
    <p>The page surface is parchment-50. White is reserved for raised cards. The warmth is the system&rsquo;s signature.</p></div>
  </li>
  <li>
    <div><h3>Serif for naming, sans for facts</h3>
    <p>Names of people, dissertations, works carry Newsreader. Metadata, controls, chrome carry Instrument Sans. Strict separation.</p></div>
  </li>
  <li>
    <div><h3>Tags carry classification, not decoration</h3>
    <p>Each badge variant encodes a meaning. Never reassign.</p></div>
  </li>
  <li>
    <div><h3>Density is a feature</h3>
    <p>Academic readers come to scan. Tighten rows. Whitespace lives at the edges of the page, not between rows.</p></div>
  </li>
  <li>
    <div><h3>Compose against semantic tokens</h3>
    <p>Use <code>--foreground</code>, <code>--primary</code>, <code>--border</code> inside components. Reach for raw palette only for editorial accents.</p></div>
  </li>
</ol>
