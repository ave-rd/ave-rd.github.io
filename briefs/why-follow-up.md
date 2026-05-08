---
layout: page
title: "Why a long-run follow-up: from schooling to earnings"
description: "The economic case for tracking AVE-RD's original 43,000-student cohort ten years on, with budget lines for the 2025–2027 follow-up wave."
eyebrow: "Brief 02 · For funders"
permalink: /briefs/why-follow-up/
hero-style: gradient
brief_audience: "Funders and principals"
brief_pages: 2
brief_date: "2025-10-15"
brief_pdf: "/briefs/AVE-RD_brief_why-follow-up.pdf"
---

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">In one paragraph</div>
  <h2>The case for the follow-up</h2>
</div>

<p>
  AVE-RD's first wave moved schooling decisions. The follow-up tells us
  whether those decisions moved <em>lives</em>. In <span class="font-osf">2025</span>
  the original cohort is now <span class="font-osf">23&ndash;26</span>
  years old &mdash; old enough to be on the labor market, old enough to be
  in the Dominican social security earnings panel, and young enough that
  intervening on schooling decisions a decade ago should still register in
  observable outcomes today. The follow-up wave links the cohort to those
  records, re-surveys a subsample for qualitative depth, and produces the
  first long-run evidence on a video-based information intervention in
  Latin America.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dd class="stat-strip__value">~10</dd>
    <dt class="stat-strip__label">Years since first wave</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">43,000</dd>
    <dt class="stat-strip__label">Cohort to re-survey</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">3</dd>
    <dt class="stat-strip__label">Year field plan</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">$TBD</dd>
    <dt class="stat-strip__label">Total budget · USD</dt>
  </div>
</dl>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">What a one-percentage-point dropout reduction is worth</div>
  <h2>Back-of-envelope economics</h2>
</div>

<p>
  Dominican earnings data show a wage premium of roughly
  <span class="font-osf">X</span>&nbsp;% for completed secondary
  schooling versus dropouts (placeholder &mdash; replace with the
  TSS-derived figure). At cohort scale
  (<span class="font-osf">43,000</span> students, of whom roughly
  <span class="font-osf">Y</span> are at the dropout margin),
  a <span class="font-osf">2.5</span>&nbsp;pp dropout reduction sustained
  through to secondary completion implies present-discounted lifetime
  earnings of approximately
  <span class="font-osf">Z</span> per affected student. The
  follow-up converts those projections into observed earnings.
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Budget lines</div>
  <h2>What funding unlocks</h2>
</div>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>Cohort re-survey (<span class="font-osf">n</span> households, panel attrition modelled)</h3>
      <p>
        Field operation, contact tracing for migrants, mixed-mode (CATI +
        in-person) instrument. Drives the qualitative depth of the
        long-run findings.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Administrative-data linkage</h3>
      <p>
        Tesorer&iacute;a de la Seguridad Social earnings records
        cross-walked to the AVE-RD panel under a use agreement. IDEICE is
        the data-handling partner; covers the legal, IRB, and
        infrastructure costs of the linkage.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Open replication kit</h3>
      <p>
        Cleans, packages, and publishes the de-identified panel + analysis
        code so that other countries can adapt the design without
        rebuilding the pipeline.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Three policy briefs and a working paper</h3>
      <p>
        The brief series at <a href="/projects/briefs/">/briefs</a> plus
        the long-run working paper. Aimed at ministries, J-PAL country
        offices, and bilateral funders considering similar interventions.
      </p>
    </div>
  </li>
</ol>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Why now</div>
  <h2>Three reasons the timing is unusually good</h2>
</div>

<ul>
  <li><strong>The cohort is reachable.</strong> Most of the original 43,000 are still in the country and recoverable through the MINERD enrolment trail and TSS. Each additional year of delay raises tracking cost.</li>
  <li><strong>The administrative pipeline is open.</strong> IDEICE has secured the access agreements that let us link AVE-RD to TSS without re-consenting the cohort. That window is not permanent.</li>
  <li><strong>The country team is intact.</strong> The same MINERD officials and J-PAL LAC researchers who ran the 2015&ndash;2016 wave are running the follow-up. Institutional memory is the cheapest research input we have, and only this round can rely on it.</li>
</ul>

<p style="text-align:center;margin-top:32px">
  <a class="btn-cta" href="/projects/follow-up/">See the follow-up plan</a>
  <a class="btn-cta" href="{{ page.brief_pdf }}" style="margin-left: 12px;">Download brief (PDF)</a>
</p>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "{{ page.title }}",
  "description": "{{ page.description }}",
  "author": [
    { "@type": "Person", "name": "James Berry" },
    { "@type": "Person", "name": "Lucas C. Coffman" },
    { "@type": "Person", "name": "Daniel Morales" },
    { "@type": "Person", "name": "Christopher A. Neilson" }
  ],
  "datePublished": "{{ page.brief_date }}",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "url": "{{ site.url }}{{ page.url }}",
  "encoding": {
    "@type": "MediaObject",
    "encodingFormat": "application/pdf",
    "contentUrl": "{{ site.url }}{{ page.brief_pdf }}"
  },
  "isPartOf": {
    "@type": "ResearchProject",
    "@id": "{{ site.url }}/#project",
    "name": "AVE-RD"
  },
  "keywords": "long-run RCT follow-up, schooling and earnings, fundraising, education impact evaluation, Dominican Republic"
}
</script>
