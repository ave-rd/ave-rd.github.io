---
title: Sister projects
description: "AVE-RD has siblings. Other implementations of the same 'information about returns to education → schooling decisions' design — different countries, different funders, different research institutions, same operational logic."
eyebrow: "Sister projects · same design, different country"
layout: page
order: 9
hero-style: gradient
---

<p class="dropcap">
  AVE-RD is one node in a small family of related interventions. The
  design &mdash; cheap, scalable information about real returns to
  education, delivered through video in regular school hours &mdash;
  has been implemented in more than one country, by more than one
  research institution, with more than one US funder behind it. Both
  of the implementations on this page reached national policy
  adoption. That is the existence proof a ministry of education needs
  before it considers adapting AVE in its own country.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dd class="stat-strip__value">2</dd>
    <dt class="stat-strip__label">Countries with national rollout</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">2</dd>
    <dt class="stat-strip__label">US funders (USAID, USDoL)</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">2</dd>
    <dt class="stat-strip__label">Research institutions (J-PAL, IPA)</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">$0.05</dd>
    <dt class="stat-strip__label">Marginal cost per student (DFM)</dt>
  </div>
</dl>

{% for s in site.data.sister_projects.projects %}
<section class="signal-panel signal-panel--research reveal" id="{{ s.id }}" style="padding: 32px 24px;">
  <div class="eyebrow" aria-hidden="true">{{ s.flag }} &nbsp; {{ s.country }} · {{ s.short }}</div>
  <h2 style="margin: 12px 0 8px;">{{ s.name }}</h2>
  <p style="font-family:var(--font-serif,serif);font-style:italic;font-size:18px;line-height:1.5;color:var(--muted-foreground);margin:0 0 24px;max-width:60ch;">
    {{ s.relationship }}
  </p>

  <dl class="roster reveal" style="margin-top: 0; padding-top: 0; border-top: 0;">
    <div>
      <dt class="roster__name">Period<span class="roster__role">timeline</span></dt>
      <dd style="margin: 4px 0 0;">{{ s.period }}</dd>
    </div>
    <div>
      <dt class="roster__name">Funder<span class="roster__role">US side</span></dt>
      <dd style="margin: 4px 0 0;">{{ s.funder }}</dd>
    </div>
    <div>
      <dt class="roster__name">Research partner<span class="roster__role">implementation &amp; evaluation</span></dt>
      <dd style="margin: 4px 0 0;">{{ s.research_partner }}</dd>
    </div>
    <div>
      <dt class="roster__name">Government partner<span class="roster__role">delivery</span></dt>
      <dd style="margin: 4px 0 0;">{{ s.govt_partner }}</dd>
    </div>
  </dl>

  <p style="margin: 24px 0;">{{ s.summary }}</p>

  {% if s.headline_results %}
  <dl class="stat-strip" style="margin: 16px 0;">
    {% for r in s.headline_results %}
    <div class="stat-strip__item">
      <dd class="stat-strip__value">{{ r.figure }}</dd>
      <dt class="stat-strip__label">{{ r.label }}</dt>
    </div>
    {% endfor %}
  </dl>
  {% endif %}

  <p><strong>Scale-up.</strong> {{ s.scale_up }}</p>
  <p><strong>Why it matters.</strong> {{ s.why_it_matters }}</p>

  <ul class="person-card__links" style="margin-top: 16px;" aria-label="External links for {{ s.short }}">
    {% for link in s.links %}
    <li><a href="{{ link.url }}" rel="noopener">{{ link.label }}</a></li>
    {% endfor %}
  </ul>
</section>
{% endfor %}

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Replication architecture</div>
  <h2>What the two implementations share</h2>
  <p class="lede">
    The design is portable for a reason. Each implementation reuses
    five components and varies the rest to fit local context.
  </p>
</div>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>A wage-by-schooling-level dataset</h3>
      <p>
        Both implementations anchored their informative arm on real,
        local earnings data &mdash; not a generic "more school =
        more income" message. The credibility of the intervention
        depends on this.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>A telenovela-style video series</h3>
      <p>
        Same delivery mechanism in both countries. Eighth-grade or
        secondary characters working through the schooling-versus-work
        decision; designed to run inside a single class period with a
        discussion guide.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>A school-randomized RCT layer</h3>
      <p>
        Both implementations pre-registered an RCT before delivery.
        That layer is what produced the evidence base each ministry
        used to justify the policy adoption.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Delivery through the existing ministry</h3>
      <p>
        Neither pilot ran a parallel research-team field operation in
        schools. AVE-RD used MINERD's Department of Orientation and
        Psychology; DFM used MINEDU Per&uacute;'s MineduLAB and the
        secondary-education directorate. That is part of why both
        survived the end of their initial grants.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>An open replication kit</h3>
      <p>
        Instruments, code and de-identified data released under
        <span class="font-osf">CC&nbsp;BY&nbsp;4.0</span> or similar &mdash;
        which is part of why this page exists at all and why the next
        country's adaptation is an
        <em>engineering</em> exercise rather than a research one.
      </p>
    </div>
  </li>
</ol>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Adapting in your country</div>
  <h2>How a third country gets started</h2>
</div>

<p>
  The fastest path from "we have read about AVE and DFM" to "our
  ministry is screening the videos" is a short phone call with the
  AVE-RD team. We have done this twice; we can sketch what a
  six-month launch looks like in your country, and route you to the
  J-PAL or IPA office most experienced with the relevant context.
</p>

<p style="text-align:center;margin-top:24px">
  <a class="btn-cta" href="/briefs/for-ministers/">Read the ministers&rsquo; brief</a>
  <a class="btn-cta btn-cta--ghost" href="/projects/contact/" style="margin-left: 12px;">Talk to the team</a>
</p>
