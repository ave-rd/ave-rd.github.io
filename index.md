---
layout: page
title: Learning the value of education
description: "A school-randomized RCT testing how short videos shift Dominican students' beliefs about the returns to education — and their schooling decisions. Now in a long-run follow-up wave, 2025–2027."
eyebrow: "AVE · Dominican Republic · Information & schooling"
lang: en
alt_url: /es/
hero-style: map
hero-image: /img/hero-map.jpg
---

<p class="dropcap">
  AVE &mdash; <em>Aprendiendo el Valor de la Educaci&oacute;n</em> &mdash;
  is a large-scale randomized evaluation conducted in the Dominican
  Republic with the Ministry of Education. We test whether a brief,
  scalable information campaign &mdash; four short videos shown in the
  classroom &mdash; can shift students&rsquo; beliefs about the returns
  to education and, with them, the choice to stay in school. The first
  wave reached <span class="font-osf">600</span> public schools and
  <span class="font-osf">43,000</span> students. Following the
  evaluation, the intervention was adopted as government policy and is
  now implemented in <strong>every public school in the country</strong>.
  A <span class="font-osf">2025&ndash;2027</span> follow-up wave links
  the original cohort to administrative earnings records.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dd class="stat-strip__value">2.5&ndash;3pp</dd>
    <dt class="stat-strip__label">Reduction in dropout</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">0.05&ndash;0.13&sigma;</dd>
    <dt class="stat-strip__label">Lift in test scores</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">600</dd>
    <dt class="stat-strip__label">Public schools randomized</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">43,000</dd>
    <dt class="stat-strip__label">Students in panel</dt>
  </div>
</dl>

<div class="signal-panel signal-panel--research reveal" style="display:flex;flex-wrap:wrap;align-items:center;gap:16px 24px;">
  <span class="badge badge--status">Now national policy</span>
  <p style="margin:0;flex:1;min-width:240px;font-family:var(--font-serif, Newsreader, Georgia, serif);font-style:italic;font-size:17px;line-height:1.5;color:var(--display);">
    Following the evaluation, MINERD adopted the AVE intervention as
    standing policy. The four videos and the classroom protocol are now
    delivered in <strong>every public school in the Dominican Republic</strong>.
  </p>
</div>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Watch the intervention</div>
  <h2>Four episodes, fifteen minutes each</h2>
  <p class="lede">
    Eighth-grade characters working through a real decision: stay in
    school, or leave to work. The persuasive arm is qualitative; the
    informative arm adds wage statistics. The first episode is below;
    the rest are on the <a href="/projects/videos/">Videos page</a>.
  </p>
</div>

{% assign first_video = site.data.videos.videos | first %}

<article class="video-card reveal">
  <button
    type="button"
    class="video-card__media"
    data-video-id="{{ first_video.id }}"
    aria-label="Play: {{ first_video.title }}"
  >
    <img
      src="https://i.ytimg.com/vi/{{ first_video.id }}/hqdefault.jpg"
      alt=""
      loading="lazy"
      width="480" height="360"
    />
    <span class="video-card__play" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </span>
  </button>
  <div class="video-card__body">
    <div class="video-card__meta">
      <span>Episode <span class="font-osf">{{ first_video.episode }}</span></span>
      <span class="dot">&middot;</span>
      <span>{{ first_video.arm | capitalize }}</span>
      <span class="dot">&middot;</span>
      <span>{{ first_video.duration }}</span>
    </div>
    <h3 class="video-card__title">{{ first_video.title }}</h3>
    <p class="video-card__description">{{ first_video.description }}</p>
  </div>
</article>

<p style="text-align:center;margin-top:24px">
  <a class="partner-card__link" href="/projects/videos/">See all four episodes</a>
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">What we found</div>
  <h2>Four effects, replicated across the panel</h2>
</div>

<figure class="viz-card reveal">
  <span class="viz-card__eyebrow">Figure 1 · cumulative dropout</span>
  <h3 class="viz-card__title">Treatment and control schools track in 2015, then diverge.</h3>
  <p class="viz-card__lede">
    Cumulative dropout in grade-7&ndash;12 cohorts. The treatment effect emerges with a
    one-year lag and reaches roughly <span class="font-osf">3</span>&nbsp;pp by 2017.
  </p>
  <div class="viz-card__figure" aria-hidden="false">
    {% include viz/dropout-trend.svg %}
  </div>
  <p class="viz-card__caption">
    <strong>Note.</strong> Illustrative trajectory, scaled to the <span class="font-osf">2.5&ndash;3</span>&nbsp;pp average effect reported in Berry, Coffman, Morales &amp; Neilson (<span class="font-osf">2025</span>). Confidence band shown for the treatment series only. Source: <a href="/papers/AVE_working_paper_2025.pdf">AVE-RD working paper</a>.
  </p>
</figure>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>The videos reduced dropout</h3>
      <p>
        Average reduction of <span class="font-osf">2.5&ndash;3</span>
        percentage points in dropout for students who saw either video.
        The effect appeared with a one-year lag &mdash; strongest in
        students who had seen a video the previous year.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Test scores rose, especially with statistics</h3>
      <p>
        Pruebas Nacionales scores improved by
        <span class="font-osf">0.05&ndash;0.06</span> SD in the informative
        arm, growing to <span class="font-osf">0.07&ndash;0.13</span> SD
        for students who saw the video twice. Effect was largest
        (<span class="font-osf">~0.10</span> SD) in the upper three deciles
        of baseline performance.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Beliefs about wage returns shifted</h3>
      <p>
        Pre-treatment, <span class="font-osf">42%</span> of boys did not
        expect any income difference between completing primary and
        completing secondary. The intervention narrowed that gap, and
        students whose beliefs updated were the ones who remained in
        school.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>The mechanism is not just information</h3>
      <p>
        Effect sizes exceed what a pure-information model predicts,
        suggesting the videos move identity, aspiration and peer
        perception in addition to factual beliefs about returns.
      </p>
    </div>
  </li>
</ol>

<p style="text-align:center">
  <a class="partner-card__link" href="/projects/about-ave-rd-2/">Read the methodology</a>
  &nbsp;&middot;&nbsp;
  <a class="partner-card__link" href="/briefs/what-worked/">Two-page brief</a>
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">The team</div>
  <h2>Four authors, one country team</h2>
  <p class="lede">
    The same investigators and field operation that ran the
    2015&ndash;2016 wave run the follow-up. Institutional memory is the
    cheapest research input we have.
  </p>
</div>

<ul class="person-grid person-grid--four reveal">
  {% for pi in site.data.researchers.pis %}
  <li>
    <article class="person-card">
      <div class="person-card__portrait{% unless pi.photo and pi.photo != "" %} person-card__portrait--initials{% endunless %}">
        {% if pi.photo and pi.photo != "" %}
        <img src="{{ pi.photo }}" alt="Portrait of {{ pi.name }}" loading="lazy" />
        {% else %}
        <span aria-hidden="true">{{ pi.initials }}</span>
        {% endif %}
      </div>
      <div class="person-card__body">
        <span class="person-card__role">{{ pi.role }}</span>
        <h3 class="person-card__name">{{ pi.name }}</h3>
        <p class="person-card__affiliation">{{ pi.affiliation }}</p>
        <ul class="person-card__links">
          <li><a href="/projects/researchers/#{{ pi.id }}">Read bio</a></li>
        </ul>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<p style="text-align:center;margin-top:8px">
  <a class="partner-card__link" href="/projects/researchers/">Meet the full team</a>
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">The partnership</div>
  <h2>Five institutions, two countries</h2>
  <p class="lede">
    A research lab, a national ministry, its evaluation arm, a Dominican
    education foundation, and an international donor. Each holds one
    corner of the pipeline.
  </p>
</div>

<ul class="brief-grid brief-grid--three reveal">
  {% for p in site.data.partner_leads.partners %}
  <li>
    <article class="partner-card" style="grid-template-columns: 1fr; padding: 24px;">
      <div class="partner-card__logo" style="min-height: 80px;">
        {% if p.logo and p.logo != "" %}
        <img src="{{ p.logo }}" alt="{{ p.short }} logo" loading="lazy" />
        {% else %}
        <span style="font-family:var(--font-serif,serif);font-weight:500;font-size:22px;color:var(--turquoise-700);">{{ p.short }}</span>
        {% endif %}
      </div>
      <div class="partner-card__body">
        <span class="badge badge--{{ p.role_badge }}">{{ p.role_label }}</span>
        <h3 style="margin-top: 12px;">{{ p.short }}</h3>
        <p style="font-size: 14px;">{{ p.description | strip_html | truncate: 160 }}</p>
        <a class="partner-card__link" href="/projects/partners/#{{ p.id }}">Learn more</a>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Policy briefs</div>
  <h2>Three two-page briefs, three audiences</h2>
  <p class="lede">
    Researchers, funders, and ministries each read a different version of
    the AVE-RD evidence. The briefs are the working summary.
  </p>
</div>

<ul class="brief-grid brief-grid--three reveal">
  {% for b in site.data.briefs.briefs %}
  <li>
    <article class="brief-card">
      <div class="brief-card__meta">
        <span class="brief-card__audience">{{ b.audience }}</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ b.pages }}</span>&nbsp;pages</span>
      </div>
      <h3 class="brief-card__title">
        <a href="/briefs/{{ b.slug }}/">{{ b.title }}</a>
      </h3>
      <p class="brief-card__lede">{{ b.lede }}</p>
      <div class="brief-card__cta">
        <a href="/briefs/{{ b.slug }}/">Read brief</a>
        <span class="brief-card__cta-secondary"><a href="{{ b.pdf }}">PDF</a></span>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="fundraise-cta reveal" id="follow-up">
  <span class="fundraise-cta__eyebrow">Now in the field &middot; 2025&ndash;2027 follow-up wave</span>
  <h2 class="fundraise-cta__title">From a fifteen-minute video to <em>ten years of earnings</em>.</h2>
  <p class="fundraise-cta__lede">
    AVE is back in the field. The follow-up wave extends the original
    panel by a decade, links schooling outcomes to administrative earnings
    data, and tests whether the belief updates from
    <span class="font-osf">2015&ndash;2016</span> persist into early
    careers.
  </p>

  <dl class="fundraise-cta__pillars">
    <div class="fundraise-cta__pillar">
      <dt>Status</dt>
      <dd>Pre-analysis registered</dd>
      <p>Field operations resumed <span class="font-osf">2025</span>. First descriptive results expected <span class="font-osf">2026</span>.</p>
    </div>
    <div class="fundraise-cta__pillar">
      <dt>What it tests</dt>
      <dd>Long-run earnings</dd>
      <p>Cohort linked to the Tesorer&iacute;a de la Seguridad Social earnings panel via IDEICE.</p>
    </div>
    <div class="fundraise-cta__pillar">
      <dt>What it produces</dt>
      <dd>Open kit + brief series</dd>
      <p>De-identified panel, Stata pipeline, and three two-page briefs &mdash; all CC&nbsp;BY&nbsp;4.0.</p>
    </div>
  </dl>

  <div class="fundraise-cta__actions">
    <a class="btn-cta" href="/projects/follow-up/">Support the follow-up</a>
    <a class="btn-cta btn-cta--ghost" href="/briefs/why-follow-up/">Read the funder brief</a>
  </div>
</div>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Cite this work</div>
  <h2>How to reference AVE</h2>
</div>

<div class="signal-panel reveal">
  <div class="eyebrow">BibTeX</div>
<pre>@techreport{berry_coffman_morales_neilson_ave,
  author      = {Berry, James and Coffman, Lucas and
                 Morales, Daniel and Neilson, Christopher},
  title       = {Information and Dynamic Human Capital Accumulation},
  institution = {AVE-RD Project},
  year        = {2025},
  url         = {https://ave-rd.github.io/}
}</pre>
</div>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Read more</div>
  <h2>Around the site</h2>
</div>

<ul>
  <li><a href="/projects/about-ave-rd-2/">About the project</a> &mdash; methodology, sample, identification.</li>
  <li><a href="/projects/researchers/">The research team</a> &mdash; PIs, country team, and how to collaborate.</li>
  <li><a href="/projects/videos/">The intervention</a> &mdash; all four videos with arm and episode metadata.</li>
  <li><a href="/projects/briefs/">Policy briefs</a> &mdash; three two-page summaries for researchers, funders, and ministries.</li>
  <li><a href="/projects/download-videos-2/">Replication kit</a> &mdash; papers, instruments, code, data, and the procedure for using the videos in your own study.</li>
  <li><a href="/projects/partners/">Partners</a> &mdash; J-PAL LAC, MINERD, IDEICE, INICIA Educaci&oacute;n, USAID &mdash; with named leads inside each.</li>
  <li><a href="/projects/press/">Press, voices &amp; milestones</a> &mdash; coverage, testimonials, and the 2014&ndash;2027 timeline.</li>
  <li><a href="/news/">News &amp; field updates</a> &mdash; brief releases and field reports.</li>
  <li><a href="/projects/follow-up/">Support the follow-up</a> &mdash; the budget, the named contacts, and the partnership model.</li>
  <li><a href="/projects/gallery/">Photographs from the field</a>.</li>
</ul>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  "@id": "{{ site.url }}/#project",
  "name": "AVE-RD — Aprendiendo el Valor de la Educación",
  "alternateName": "Learning the Value of Education in the Dominican Republic",
  "url": "{{ site.url }}/",
  "description": "{{ page.description | strip_html }}",
  "inLanguage": ["en", "es"],
  "spatialCoverage": {
    "@type": "Country",
    "name": "Dominican Republic"
  },
  "about": [
    "Education economics",
    "School dropout",
    "Information frictions",
    "Randomized controlled trial",
    "Belief elicitation"
  ],
  "founder": [
    {% for pi in site.data.researchers.pis %}
    {
      "@type": "Person",
      "@id": "{{ site.url }}/projects/researchers/#{{ pi.id }}",
      "name": "{{ pi.name | strip_html }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ],
  "memberOf": [
    {% for p in site.data.partner_leads.partners %}
    {
      "@type": "{{ p.schema_type }}",
      "@id": "{{ site.url }}/projects/partners/#{{ p.id }}",
      "name": "{{ p.name | strip_html }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ],
  "funder": [
    {
      "@type": "GovernmentOrganization",
      "name": "USAID",
      "url": "https://www.usaid.gov/"
    },
    {
      "@type": "GovernmentOrganization",
      "name": "MINERD — Ministry of Education of the Dominican Republic",
      "url": "http://ministeriodeeducacion.gob.do/"
    },
    {
      "@type": "Organization",
      "name": "INICIA Educación",
      "url": "https://www.iniciaeducacion.org/"
    }
  ],
  "subjectOf": [
    {% for b in site.data.briefs.briefs %}
    {
      "@type": "ScholarlyArticle",
      "name": "{{ b.title | strip_html }}",
      "url": "{{ site.url }}/briefs/{{ b.slug }}/",
      "datePublished": "{{ b.date }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
</script>
