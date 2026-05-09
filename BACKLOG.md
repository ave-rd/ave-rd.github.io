# AVE-RD signature campaigns — backlog

Living to-do list for the signature-campaigns work
(branch `claude/signature-campaigns`, PR #8). Items grouped by
whether they block public launch or can ship later.

---

## Pre-launch blockers

These should be resolved before the project office makes either
campaign public, because they affect credibility on first contact.

### Seed the signature walls with real founders

Both campaigns currently render with placeholder entries that are
clearly marked. Before launch, replace them with verified, real
names. The placeholders document the schema; treat them as a
template, not as content.

- `_data/signatures.yml` → `continue_policy`:
  - Carmen Maura Taveras — confirm `verified: true` is correct
    (entry exists, flagged `# TODO: confirm before launch`).
  - "Director, DOP" — replace with the actual Director of the
    Dirección de Orientación y Psicología.
  - "School Director — placeholder" — replace with one or more
    real public-secondary school directors who have agreed to be
    public.
  - "Alumni signatory — placeholder" — replace with at least one
    AVE-RD alumni who has agreed to be public (parental consent
    required if under 18).
- `_data/signatures.yml` → `follow_up_pledge`:
  - James Berry, Lucas C. Coffman, Daniel Morales, Christopher
    A. Neilson — confirm the four PIs have approved being listed
    publicly with the `verified: true` flag. All four are
    currently `# TODO: confirm`.

Target: 5–10 founding signatures per campaign before launch.
Empty walls kill momentum more than any form-quality issue.

### Set real letter delivery dates and recipient names

The four printable letters (`/es/sumate/carta/`,
`/es/avale/carta/`, and the two English mirrors) are dated
**9 May 2026** and addressed to the generic
"Honourable Minister of Education." Before the project office
prints + delivers a copy, update the corresponding frontmatter:

- `letter_date` — set to actual delivery date.
- `letter_recipient` — fill in the actual minister's name and
  any honorifics they prefer, plus the current MINERD address if
  it has changed from "Av. Máximo Gómez No. 2."

For the funder pledge (`/es/avale/carta/` and English mirror),
the recipient is intentionally a class ("foundations, bilateral
and multilateral funders…") so the date is the only thing that
needs updating per delivery.

### Verify partner logo strategy for the letterhead

The carta currently uses only the AVE-RD logo
(`/img/logos/logo_ave.jpg`) and renders partner attribution as
text in the footer ("AVE-RD es una iniciativa conjunta de
J-PAL LAC · MINERD · IDEICE · INICIA Educación · USAID").

If the project office wants partner logos rendered as a strip
under the AVE-RD letterhead instead, the work is:

1. Get high-resolution PNG/SVG logos from each partner with
   written permission to use on this letter.
2. Drop them in `/img/logos/` (`jpal.png`, `minerd.png`,
   `ideice.png`, `inicia.png`, `usaid.png`).
3. Update `_layouts/letter.html` to render a logo strip below
   `.letter-document__rule`, and add corresponding SCSS in
   `.letter-document__partner-logos` (does not exist yet).

The current text-only treatment matches what most Dominican
formal correspondence actually does, so this is optional rather
than required.

---

## Post-launch backlog

Items that improve the campaign over time but are not gating.

### Privacy-respecting analytics

Without a tag we cannot tell whether the form is converting or
how visitors land on the campaign pages. Recommended:

- **GoatCounter** or **Plausible** — both privacy-respecting, no
  cookie banner, GDPR-clean.
- Drop the tag in `_includes/analytics.html` (file already exists
  and is included from `_layouts/default.html`; currently empty
  or placeholder — verify).
- Track at minimum: pageviews per campaign, scroll depth on the
  letter body, click-through on each of the three submit buttons
  (`data-action="email"`, `"github"`, `"copy"`).

### Short share slugs

For posters, WhatsApp messages, and verbal communication, the
permalinks `/campaigns/continue-the-policy/` and
`/es/sumate/` are long.

- Add `/firma` → redirect to `/es/sumate/`
- Add `/sign` → redirect to `/campaigns/continue-the-policy/`
- Add `/firma/qr` or include a QR code on the printable letter
  that resolves to the digital signature page (closes the
  digital ↔ physical loop, since Dominican stakeholders
  communicate heavily via WhatsApp).

Implementation: Jekyll redirects via the
`jekyll-redirect-from` plugin (already in the Gemfile? check)
or a small static page with a `<meta http-equiv="refresh">`.

### WhatsApp share button

Dominican-facing campaigns get most of their lift through
WhatsApp, not email or social. Add a "Compartir por WhatsApp"
CTA on each campaign page that opens
`https://wa.me/?text=<encoded-pre-filled-message>` with the
campaign URL pre-filled.

### Email-domain auto-verification hint

When a signature email arrives from a `.gob.do`, `.edu.do`,
`.harvard.edu`, J-PAL/IPA domain, ORCID-linked institution,
etc., the project team can auto-promote rather than verify by
hand. Document the whitelist in `_data/signatures.yml` header
or in a separate `_data/verification_domains.yml`. Fully manual
for now; a future automation pass can read this.

### Spanish coverage for the rest of the site

The campaign flow is fully bilingual now, but several
project-info pages still have no Spanish counterpart:

- `/projects/about-ave-rd-2/` → `/es/sobre-ave/` (or similar)
- `/projects/researchers/` → `/es/investigadores/`
- `/projects/videos/` → `/es/videos/`
- `/projects/press/` → `/es/prensa/`
- `/projects/sister-projects/` → `/es/proyectos-hermanos/`
- `/projects/contact/` → `/es/contacto/`
- `/projects/gallery/` → `/es/galeria/`

Lower priority than the campaign flow but a real gap.

### Tier-wording clarification

The four signature tiers are
*Policymakers / Researchers / Educators / Community*
(`Funcionarios / Investigadores / Educadores / Comunidad` in ES).
A few edge cases will hesitate over which to pick:

- J-PAL or IPA country-office staff: researcher or policymaker?
- USAID/IDB programme officers: researcher or policymaker?
- Implementers (NGO operations leads): policymaker or community?

Consider adding a one-line hint under each radio button, or a
"not sure?" tooltip that explains the boundary.

### Mobile + accessibility audit

Spot-checked layout in code, not in a real browser at small
sizes or with assistive tech. Before public launch:

- Test sign form on iOS Safari, Android Chrome, low-end
  Chromebook (corporate-locked mailto behaviour is the most
  likely to break).
- Screen-reader pass on the form (NVDA / VoiceOver).
- Keyboard navigation through tier radios and submit row.
- Colour contrast on the `.sign-form__field--error` state.
- Print preview (File → Print) on the four letter pages, both
  in Chrome and in Firefox — page-break behaviour can differ.

### OpenGraph / Twitter card images for ES pages

The new Spanish pages (`/es/avale/`, `/es/voz/`,
`/es/sumate/carta/`, `/es/avale/carta/`) inherit the site
default OG image. Custom social-card images for each campaign
would lift CTR on share.

### Time-bounded ask

Open-ended campaigns convert worse than time-bounded ones.
Consider adding an explicit deadline to each:

- `continue-policy`: "We aim to deliver this letter to the
  Minister by **September 1, 2026**, with at least 50
  signatures across the four tiers."
- `follow-up-pledge`: "We aim to publish this pledge with
  initial endorsers by **June 30, 2026**, in time for the
  2025–2027 follow-up's first wave."

The numbers should be set by the project office, not invented.

### Founding-signatures featured row

Once the seed signatures are in place, consider rendering the
first 3–5 verified, "founder-tagged" entries in a featured row
above the tier breakdown. Schema work: add `featured: true` to
the YAML entry, update `_includes/signature-wall.html` to pull
those out into a `.signature-wall__featured` block above the
tiered grid.

---

## Operational notes

Things the project team should know about how the campaigns
work in production. Not to-dos — just context for whoever
maintains them.

### Submission pipeline

Visitor fills the on-page form. On submit they pick:

- **Email** → opens their mail client with all fields pre-filled
  to `proyecto.ave.rd@gmail.com`. The structured body has one
  `Field: value` pair per line.
- **GitHub Issue** → opens a pre-filled issue in
  `ave-rd/ave-rd.github.io` labelled `signature` +
  the campaign id. Each signature becomes its own auditable
  record.
- **Copy to clipboard** → puts the structured signature on the
  clipboard for users whose system doesn't open mailto links
  (locked Chromebooks, kiosks, webmail-only setups).

### Spam guards

Two guards run before any submit fires:

1. Hidden honeypot field (`name="website"`). Real users never
   see it; bots fill it. If non-empty, submit silently no-ops.
2. Minimum dwell time of 3 seconds. Submits firing within 3s
   of page load are silently dropped — bots are fast, real
   users filling 8 fields take well over that.

Both checks fail closed (silent no-op, no error to the user)
to avoid leaking what the guard is.

### Verification ladder

Tier-specific verification:

- **Policymakers / educators**: institutional contact (a phone
  call or email to the office) — never publish based only on
  the form-supplied email.
- **Researchers**: affiliation domain or ORCID. A `@harvard.edu`
  or `@worldbank.org` address is sufficient evidence of
  identity for someone with that name + role.
- **Community (parents, alumni, students)**: reply to the
  contact email + light moderation check. Under-18s require
  parental consent (parent co-signs).

### Adding a verified signature

Two paths, both end up in `_data/signatures.yml`:

1. **GitHub web UI** — open the file, paste the entry, commit
   straight to `main`. Site rebuilds automatically.
2. **Claude Code session** — forward the verification email to
   a Claude session. The agent appends the entry, commits, and
   pushes.

Schema is documented in the comment block at the top of
`_data/signatures.yml`.

### Removing a signature

If a signatory asks to be removed, delete their entry from
`_data/signatures.yml`. The signature wall and the printable
letter both pull from this file, so the site rebuild will
remove them from both views in one commit.

---

_Last updated: 2026-05-09. Update this file as items ship,
fail, or get re-prioritised._
