---
layout: page
title: "What worked: four replicated effects from AVE-RD"
description: "Two-page summary of the dropout, test-score, belief-shift and mechanism findings from AVE-RD's 2015–2016 wave."
eyebrow: "Brief 01 · For researchers"
permalink: /briefs/what-worked/
hero-style: gradient
brief_audience: "Researchers and evaluators"
brief_pages: 2
brief_date: "2025-09-01"
brief_pdf: "/briefs/AVE-RD_brief_what-worked.pdf"
brief_pdf_ready: false
---

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Dropout reduction</dt>
    <dd class="stat-strip__value">2.5&ndash;3pp</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Test-score lift</dt>
    <dd class="stat-strip__value">0.05&ndash;0.13&sigma;</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Boys with no expected wage premium pre-treatment</dt>
    <dd class="stat-strip__value">42%</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Public schools randomized</dt>
    <dd class="stat-strip__value">600</dd>
  </div>
</dl>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">In one paragraph</div>
  <h2>The headline result</h2>
</div>

<p>
  AVE-RD is a school-randomized RCT of a four-episode classroom video
  series in 600 Dominican public schools. The intervention reduced dropout
  by <span class="font-osf">2.5&ndash;3</span> percentage points, lifted
  Pruebas Nacionales test scores by
  <span class="font-osf">0.05&ndash;0.13</span> standard deviations
  (largest in the informative arm and in students who saw the videos
  twice), and shifted students' beliefs about the wage returns to
  secondary education. Effect sizes are larger than a pure-information
  model predicts, suggesting persuasion, identity, or peer-perception
  channels operate alongside Bayesian belief updating.
</p>

<figure class="viz-card reveal">
  <span class="viz-card__eyebrow">Figure 1 · test-score effects</span>
  <h3 class="viz-card__title">Standardized effect sizes &mdash; informative arm, twice-treated, top deciles.</h3>
  <p class="viz-card__lede">
    Three slices of the panel, three intervals, all excluding zero. The largest effect is in twice-treated students.
  </p>
  <div class="viz-card__figure">
    {% include viz/forest-plot.svg %}
  </div>
  <p class="viz-card__caption">
    <strong>Note.</strong> Effect sizes in standard deviations of the Pruebas Nacionales score, with <span class="font-osf">95</span>%&nbsp;confidence intervals. The twice-treated point estimate is at <span class="font-osf">0.10&sigma;</span> with a wider CI than the informative-arm baseline. Drawn from headline numbers in Berry, Coffman, Morales &amp; Neilson (<span class="font-osf">2025</span>).
  </p>
</figure>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Four replicated effects</div>
  <h2>Effect sizes and where they show up</h2>
</div>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>Dropout (primary outcome)</h3>
      <p>
        <strong>Effect:</strong>
        &minus;<span class="font-osf">2.5</span> to
        &minus;<span class="font-osf">3.0</span> percentage points,
        statistically significant at the school level. Strongest in
        students re-exposed in the second wave.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Test scores (Pruebas Nacionales)</h3>
      <p>
        <strong>Effect:</strong>
        +<span class="font-osf">0.05</span>&ndash;<span class="font-osf">0.06</span>
        SD in the informative arm, growing to
        <span class="font-osf">0.07</span>&ndash;<span class="font-osf">0.13</span>
        SD in twice-treated students. Largest gains
        (<span class="font-osf">~0.10</span> SD) in the upper three
        baseline-performance deciles.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Belief updates</h3>
      <p>
        <strong>Effect:</strong> the share of boys expecting
        <em>no</em> wage premium between primary and secondary completion
        fell substantially from a baseline of <span class="font-osf">42%</span>;
        belief-update magnitude predicts subsequent enrolment within the
        treatment group.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Mechanism</h3>
      <p>
        <strong>Implication:</strong> a calibrated information-only model
        under-predicts both the size and the dynamics of the dropout
        response. The remainder is consistent with persuasion or
        identity-based channels &mdash; the design specifically separates
        these by including a persuasive arm without statistics.
      </p>
    </div>
  </li>
</ol>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Design at a glance</div>
  <h2>What was randomized, and what wasn't</h2>
</div>

<p>
  Treatment was assigned at the school level. Within treated schools,
  classrooms were assigned to either the persuasive arm (qualitative
  framing) or the informative arm (qualitative framing plus wage-by-grade
  statistics). Outcomes are measured from administrative records
  (enrolment, Pruebas Nacionales) and from the project's annual student
  survey. The cohort is the universe of grade-7 and grade-8 students in
  the 600 schools at baseline (n &asymp;
  <span class="font-osf">43,000</span>).
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">For replicators</div>
  <h2>Three things to know before adapting</h2>
</div>

<ul>
  <li><strong>Wage data first.</strong> The informative arm's effect depends on credible local wage-by-schooling-level statistics. Without them, only the persuasive arm is feasible.</li>
  <li><strong>Implementation fidelity matters.</strong> The 2.5&ndash;3pp dropout effect is a population-level estimate; school-level take-up varies. Run the implementation-evidence checks built into the survey.</li>
  <li><strong>Two-wave dosing.</strong> Effects are larger when the cohort is re-exposed a year later. Replications targeting one-shot designs should expect smaller magnitudes.</li>
</ul>

<p style="text-align:center;margin-top:32px">
  {% if page.brief_pdf_ready %}
  <a class="btn-cta" href="{{ page.brief_pdf }}">Download brief (PDF)</a>
  {% else %}
  <span class="badge badge--neutral" style="font-size:13px;padding:8px 14px;">PDF forthcoming &mdash; HTML version above is canonical for now</span>
  {% endif %}
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
  "keywords": "AVE-RD, Aprendiendo el Valor de la Educacion, school dropout, Dominican Republic, RCT, education economics"
}
</script>
