# AVE-RD project TODO

Living backlog for the website. Items are grouped by what's blocking
them: most need real artifacts or copy from the team.

If you tackle one, delete the bullet (or open a PR with the change and
remove the bullet in the same PR).

---

## Needs real content from the team

### School coordinates → real map
- The homepage hero map (`_includes/dr-map.svg`) currently shows 30
  placeholder city pins. The Dropbox folder has lat/lng for every
  participating school.
- **Drop a CSV at `_data/schools.csv`** with at minimum `lat,lng`
  columns (and optionally `name`, `province`, `wave`). The SVG can
  then be regenerated to plot the real schools (599 in the 2015 wave,
  2,469 by 2016), probably as small dots with province cluster
  bubbles for legibility.

### PDFs → fix the Replication Kit page
- `/projects/download-videos-2/` lists three working papers with
  "PDF forthcoming" badges and a "Request the draft" link to Contact.
- **Drop the canonical PDFs into `papers/`** (filenames already
  documented in `papers/README.md`). The badges + Request links
  should then become real download buttons.
- Same for `instruments/` (survey questionnaires) and `figures/`
  (headline charts).

### Real BibTeX citation
- Homepage cite block + sister-projects cite blocks use a placeholder
  `@techreport{berry_coffman_morales_neilson_ave, ...}`.
- **Replace with the canonical citation** once the working paper has
  a settled venue/year. If unpublished, `@unpublished` form is fine
  for now.

### Real long-run follow-up copy
- The invented follow-up details (TSS/IDEICE earnings linkage,
  "pre-analysis plan registered", "first results 2026", fieldwork
  "resumed" in 18 regions, INICIA as lead funder, the 2025–2027
  window) were removed site-wide in the September 2026 accuracy pass.
  The site now says only that a long-run follow-up is planned, would
  link the original students to administrative earnings records, and
  is seeking funding.
- Two news posts are unpublished (`published: false`), not deleted:
  `_news/2025-09-15-fieldwork-resumes.md` and
  `_news/2026-01-20-tss-linkage-agreement.md`. Rewrite or delete.
- **Needs from the team:** confirmed status, timeline, earnings-data
  custodian, partners and funders, and pre-analysis-plan plans. Then
  fill in the homepage `#follow-up` block, `/projects/follow-up/`,
  `/briefs/why-follow-up/`, the "Now" entry in `_data/press.yml`, and
  the Spanish mirrors.

### Unverified claims still on the site
Found in the same accuracy pass (source of record: the 2017 endline
report, J-PAL LAC, USAID DIV award AID-F-14-00030). Confirm, source,
or remove each before funder reviews. Placeholder quotes, testimonials,
press items and seeded signature statements were already removed in
September 2026.
- **PI endorsements**: the four PI entries on the follow-up pledge
  (`_data/signatures.yml`) are still `verified: true # TODO: confirm`;
  see BACKLOG.md.
- **"Every public school in the country" / "now national policy"**:
  the endline documents only the 2017–2019 rollout plan (Table 8).
- **Beliefs and mechanism findings** (homepage, what-worked brief, ES
  home): "42% of boys expected no income difference", "students whose
  beliefs updated were the ones who stayed", "effects exceed a
  pure-information model". None of these is in the endline; cite the
  working paper or remove.
- **About-page stat strip**: 200,000 students reached, 300,000
  surveys, 2,700 officials (also "200,000" on the partners pages). The
  endline timeline shows about 44,500 (2015) and 265,000 (2016)
  students in treated schools and roughly 160,000 surveys; 2,700 has
  no source.
- **Dropout details**: "reductions across grades 7–12" (About) and
  "strongest in students re-exposed in the second wave" (what-worked).
  The significant effect is the one-year-lagged effect of 2015
  exposure (Table 5); same-year 2016 effects are not significant.
- **Dates**: briefs (Sept–Nov 2025) and the funder-brief news post
  (4 Nov 2025) are dated before the files existed (May 2026).
- **Sister projects**: "each implementation pre-registered an
  evaluation", DFM Chile figures (11,000+, ~50% completion, 5×
  awareness) and ICFES-Bot's 430,000/year were not checked.
- **Funder list** on `/projects/follow-up/` names USAID among
  bilateral donors; check this is still appropriate.

### Real video metadata
- `_data/videos.yml` has draft Spanish episode titles
  (e.g. "Pensar en el futuro") with `# TODO: confirm canonical title`
  comments. Each entry also has a draft description.
- **Confirm with the project records** — episode titles, the actual
  arm assignment per video (persuasive vs informative), durations,
  and one-line descriptions. The Videos page renders directly from
  this file.

### About page hero image
- `/projects/about-ave-rd-2/` is wired for `hero-style: townscape`,
  expecting a file at `img/hero-santo-domingo.jpg`. The file doesn't
  exist yet — the hero falls back to the scrim placeholder.
- **Generate via Midjourney** (prompt is in chat history) or pick an
  existing painterly image, save as `img/hero-santo-domingo.jpg`,
  ≤ 400 KB, ~2400 px wide, JPEG quality 82.

---

## I can do alone (next session)

### End-to-end audit
- The site now has 27 pages from three parallel work streams (Iznik
  redesign + map; content/SEO audit; signature campaigns). They
  haven't been audited together.
- Sweep for: voice consistency, navigation completeness, palette
  consistency (some new pages may use cobalt where turquoise is now
  the action color), broken links, broken images, accessibility.

### Headline-finding charts
- Homepage states `2.5–3pp dropout`, `0.05–0.13σ test scores` as
  numbers in the stat strip. Both now have coefficient plots built
  from the endline tables: dropout (Table 5) is homepage Figure 1
  (`_includes/viz/dropout-effects.svg`), and test scores (Table 6)
  are in the what-worked brief (`_includes/viz/forest-plot.svg`).
- **Left to do:** the homepage has no test-score figure yet (the
  brief's forest plot could be reused), and neither plot has been
  exported to `figures/` for the Replication Kit.

### Province-level deployment map
- Beyond the decorative homepage hero, build a more rigorous
  deployment map for the methodology section of `/projects/about/`.
  Same SVG primitives, but with province cluster bubbles sized by
  school count (once the CSV is in).

### Spanish mirror coherence
- Campaigns ship with full Spanish coverage; other newer pages
  (briefs, press, researchers, sister-projects) may not have
  Spanish counterparts yet. Worth a parity audit.

### Cobalt → turquoise sweep on new pages
- Turquoise is now the action color (was cobalt). Pages built before
  the swap may still reference `var(--cobalt-*)` where they meant
  "primary affordance." The audit task above would catch these.

---

## Backlog / nice-to-have

### Code & data access flow
- Currently "email the team" with an institution affiliation +
  IRB approval. A simple form (could be Tally or Google Form) might
  reduce friction and capture richer metadata.

### Press kit
- The `/projects/press/` page exists; consider adding a downloadable
  press kit (logos, headshots, one-pagers) as a zip in `papers/`.
- It is titled "Milestones" (with a matching footer link) until real
  coverage or quotes are added to `_data/press.yml`; rename it back
  to "Press…" then.

### News authoring guide
- The `news/` collection is set up. A short `news/README.md`
  explaining how to add a new news entry would help the team self-
  serve future updates.

### Analytics
- `_includes/analytics.html` is gated on `site.g-analytics` which is
  unset. If you want pageview tracking for fundraising/press
  outreach, add the GA4 ID to `_config.yml`.

### Sitemap / robots
- Both exist (`/sitemap.xml`, `/robots.txt`). Verify the sitemap
  excludes the styleguide page (it's `sitemap: false`) and includes
  every other public page after the recent additions.

### Image optimization
- `wp-content/uploads/2017/...` carries 12 MB of historical photos
  at multiple sizes. Could be pruned to just the sizes actually
  referenced, halving the repo.

---

## Style guide for this file

When you add an item:
1. Pick the right section (needs-content / I-can-do / backlog).
2. State the goal in one sentence at the top.
3. Optional: a "where" pointer (file path, page URL) so anyone
   (human or Claude) can resume the task without context.
