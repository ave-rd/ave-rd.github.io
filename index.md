---
layout: page
title: Learning the value of education
description: "A school-randomized RCT testing how short videos shift Dominican students' beliefs about the returns to education — and their schooling decisions. A long-run follow-up is being planned."
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
  to education and, with them, the choice to stay in school. The
  evaluation randomized <span class="font-osf">599</span> public
  schools in <span class="font-osf">2015</span> and
  <span class="font-osf">2,469</span> in <span class="font-osf">2016</span>;
  its dropout analysis covers <span class="font-osf">428,400</span>
  students. Following the
  evaluation, the intervention was adopted as government policy and is
  now implemented in <strong>every public school in the country</strong>.
  A planned long-run follow-up would link the same students to
  administrative earnings records.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Reduction in dropout</dt>
    <dd class="stat-strip__value">2.5&ndash;3pp</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Lift in test scores</dt>
    <dd class="stat-strip__value">0.05&ndash;0.13&sigma;</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Public schools randomized by 2016</dt>
    <dd class="stat-strip__value">2,469</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Students in the dropout analysis</dt>
    <dd class="stat-strip__value">428,400</dd>
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
  <span class="viz-card__eyebrow">Figure 1 · dropout effects</span>
  <h3 class="viz-card__title">Effects on 2016&ndash;17 dropout, by video and the year it was shown.</h3>
  <p class="viz-card__lede">
    Videos shown in <span class="font-osf">2016</span>, a few months before the <span class="font-osf">2016&ndash;17</span> school year, had no significant effect. Videos shown in <span class="font-osf">2015</span> lowered dropout a year later, by <span class="font-osf">3.0</span>&nbsp;percentage points (informative) and <span class="font-osf">2.8</span>&nbsp;points (persuasive).
  </p>
  <div class="viz-card__figure" aria-hidden="false">
    {% include viz/dropout-effects.svg %}
  </div>
  <p class="viz-card__caption">
    <strong>Note.</strong> Probit estimates from a single regression of dropout in the <span class="font-osf">2016&ndash;17</span> school year on each school&rsquo;s video assignment in <span class="font-osf">2016</span> and in <span class="font-osf">2015</span>, with grade fixed effects (endline Table&nbsp;<span class="font-osf">5</span>, column&nbsp;<span class="font-osf">1</span>; N&nbsp;=&nbsp;<span class="font-osf">428,400</span>). Dropout means not being enrolled in <span class="font-osf">2016&ndash;17</span> after being enrolled the year before. Values are coefficients &times;&nbsp;<span class="font-osf">100</span>, in percentage points; negative values are reductions in dropout. Bars are <span class="font-osf">95</span>% confidence intervals, computed as &plusmn;<span class="font-osf">1.96</span> times the reported school-clustered standard errors. *** <em>p</em>&nbsp;&lt;&nbsp;<span class="font-osf">0.01</span>; hollow markers are not significant. OLS estimates (column&nbsp;<span class="font-osf">2</span>) are similar: &minus;<span class="font-osf">2.79</span> and &minus;<span class="font-osf">2.62</span>&nbsp;pp for the <span class="font-osf">2015</span> videos. The <span class="font-osf">2015</span> videos had no significant effect on <span class="font-osf">2015&ndash;16</span> dropout, the first year after they were shown (Table&nbsp;<span class="font-osf">4</span>). Source: J-PAL LAC, <a href="https://www.christopher-neilson.com/work/documents/AVE/AVE_USAID_EndlineReport.pdf" rel="noopener">Milestone 13 endline report</a> to USAID (<span class="font-osf">2017</span>), pp.&nbsp;<span class="font-osf">15&ndash;16</span>.
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
        On the <span class="font-osf">2016</span> eighth-grade Pruebas
        Nacionales, students who saw the informative video that year
        scored <span class="font-osf">0.065</span> SD higher, and those
        who had also seen it in <span class="font-osf">2015</span> scored
        <span class="font-osf">0.129</span> SD higher (both
        <em>p</em>&nbsp;&lt;&nbsp;<span class="font-osf">0.01</span>).
        The persuasive video raised scores by
        <span class="font-osf">0.052</span> and
        <span class="font-osf">0.077</span> SD
        (<em>p</em>&nbsp;&lt;&nbsp;<span class="font-osf">0.05</span>).
        Gains were larger in the upper part of the score distribution,
        especially with the informative video.
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
    The four investigators behind the 2015&ndash;2016 evaluation,
    working with a country team in Santo Domingo.
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

<ul class="brief-grid reveal">
  {% for p in site.data.partner_leads.partners %}
  <li>
    <article class="partner-card partner-card--compact">
      <div class="partner-card__logo">
        {% if p.logo and p.logo != "" %}
        <img src="{{ p.logo }}" alt="{{ p.short }} logo" loading="lazy" />
        {% else %}
        <span class="partner-card__logo-text">{{ p.short }}</span>
        {% endif %}
      </div>
      <div class="partner-card__body">
        <span class="badge badge--{{ p.role_badge }}">{{ p.role_label }}</span>
        <h3>{{ p.short }}</h3>
        <p>{{ p.description | strip_html | truncate: 160 }}</p>
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
        {% if b.pdf_ready %}
        <span class="brief-card__cta-secondary"><a href="{{ b.pdf }}">PDF</a></span>
        {% else %}
        <span class="brief-card__cta-secondary"><span class="badge badge--neutral">PDF forthcoming</span></span>
        {% endif %}
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="fundraise-cta reveal" id="follow-up">
  <span class="fundraise-cta__eyebrow">In preparation &middot; long-run follow-up</span>
  <h2 class="fundraise-cta__title">From a fifteen-minute video to <em>earnings a decade later</em>.</h2>
  <p class="fundraise-cta__lede">
    The planned follow-up would return to the students in the original
    evaluation about a decade on, link them to administrative earnings
    records, and test whether the effects measured in
    <span class="font-osf">2015&ndash;2016</span> carry into early
    careers.
  </p>

  <dl class="fundraise-cta__pillars">
    <div class="fundraise-cta__pillar">
      <dt>Status</dt>
      <dd>In preparation</dd>
      <p>The timeline and partners will be posted here once they are confirmed.</p>
    </div>
    <div class="fundraise-cta__pillar">
      <dt>What it tests</dt>
      <dd>Long-run earnings</dd>
      <p>Students from the original evaluation linked to administrative earnings records.</p>
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
  <div class="eyebrow eyebrow--rule">Add your voice</div>
  <h2>Two open letters, two audiences</h2>
  <p class="lede">
    Signatures are the social proof that ministers and funders move
    on. We&rsquo;re collecting on two parallel campaigns: continuity
    of the Dominican policy, and endorsement of the long-run
    follow-up evaluation.
  </p>
</div>

{% assign continue_count = site.data.signatures.continue_policy | size %}
{% assign pledge_count = site.data.signatures.follow_up_pledge | size %}

<ul class="brief-grid reveal">
  <li>
    <article class="brief-card">
      <div class="brief-card__meta">
        <span class="brief-card__audience">🇩🇴 &nbsp; Dominican stakeholders</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ continue_count }}</span>&nbsp;signatories</span>
      </div>
      <h3 class="brief-card__title">
        <a href="/campaigns/continue-the-policy/">Continue the AVE policy</a>
      </h3>
      <p class="brief-card__lede">
        Open letter to MINERD asking that the AVE intervention
        continue at full coverage and that the follow-up evaluation
        be supported. For ministry officials, school directors,
        counsellors, parents, and alumni.
      </p>
      <div class="brief-card__cta">
        <a href="/campaigns/continue-the-policy/">Read &amp; sign</a>
      </div>
    </article>
  </li>
  <li>
    <article class="brief-card">
      <div class="brief-card__meta">
        <span class="brief-card__audience">🌐 &nbsp; International research community</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ pledge_count }}</span>&nbsp;endorsers</span>
      </div>
      <h3 class="brief-card__title">
        <a href="/campaigns/support-the-follow-up/">Endorse the long-run follow-up</a>
      </h3>
      <p class="brief-card__lede">
        Pledge for foundations, bilateral donors, multilaterals, and
        the long-run-RCT research community to recognise the
        long-run follow-up as a priority replication.
      </p>
      <div class="brief-card__cta">
        <a href="/campaigns/support-the-follow-up/">Read &amp; endorse</a>
      </div>
    </article>
  </li>
</ul>

<p style="text-align:center;margin-top:8px">
  <a class="partner-card__link" href="/projects/campaigns/">How signatures are verified</a>
</p>

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
  <li><a href="/projects/sister-projects/">Sister projects</a> &mdash; DFM Per&uacute;, DFM Chile, DFM Colombia / ICFES-Bot and the ConsiliumBots origin story.</li>
  <li><a href="/projects/campaigns/">Add your voice</a> &mdash; two open letters: continue the Dominican policy, and endorse the long-run follow-up.</li>
  <li><a href="/projects/press/">Milestones</a> &mdash; the project timeline, from the 2014 grant to the planned follow-up.</li>
  <li><a href="/news/">News</a> &mdash; brief releases and project updates.</li>
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
