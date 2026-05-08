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
  education, delivered in regular school hours &mdash; has been
  implemented in <strong>four countries</strong> by <strong>three
  research institutions</strong> with at least <strong>two US
  funders</strong> behind it. Two of the four implementations are now
  national policy. The two younger siblings have moved away from
  televised video towards digital platforms and personalised
  WhatsApp chatbots &mdash; same information story, different
  delivery surface. For a ministry of education weighing whether to
  adapt AVE in its own country, this is the existence proof that the
  design travels.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dd class="stat-strip__value">4</dd>
    <dt class="stat-strip__label">Countries with an implementation</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">2</dd>
    <dt class="stat-strip__label">At national-policy scale</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">3</dd>
    <dt class="stat-strip__label">Research institutions (J-PAL, IPA, ConsiliumBots)</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">$0.05</dd>
    <dt class="stat-strip__label">Marginal cost per student (DFM Per&uacute;)</dt>
  </div>
</dl>

{% for s in site.data.sister_projects.projects %}
<section class="signal-panel signal-panel--research reveal" id="{{ s.id }}" style="padding: 32px 24px;">
  <div class="eyebrow" aria-hidden="true">{{ s.flag }} &nbsp; {{ s.country }} &middot; {{ s.short }}</div>
  <h2 style="margin: 12px 0 8px;">{{ s.name }}</h2>
  {% if s.generation %}
  <p style="margin: 0 0 12px;">
    <span class="badge badge--neutral">{{ s.generation }}</span>
  </p>
  {% endif %}
  <p style="font-family:var(--font-serif,serif);font-style:italic;font-size:18px;line-height:1.5;color:var(--muted-foreground);margin:0 0 24px;max-width:60ch;">
    {{ s.relationship }}
  </p>

  <dl class="roster reveal" style="margin-top: 0; padding-top: 0; border-top: 0;">
    <div>
      <dt class="roster__name">Period<span class="roster__role">timeline</span></dt>
      <dd style="margin: 4px 0 0;">{{ s.period }}</dd>
    </div>
    <div>
      <dt class="roster__name">Funder<span class="roster__role">primary</span></dt>
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

  {% if s.site_url and s.site_url != "" %}
  <p style="margin-top: 16px;">
    <a class="partner-card__link" href="{{ s.site_url }}" rel="noopener">Project site &rarr;</a>
  </p>
  {% else %}
  <p style="margin-top: 16px; font-size: 13px; color: var(--muted-foreground);">
    No stand-alone project site yet &mdash;
    <a href="/projects/contact/">tell us</a> if you would like to help us spin one up.
  </p>
  {% endif %}

  <ul class="person-card__links" style="margin-top: 16px;" aria-label="External links for {{ s.short }}">
    {% for link in s.links %}
    <li><a href="{{ link.url }}" rel="noopener">{{ link.label }}</a></li>
    {% endfor %}
  </ul>
</section>
{% endfor %}

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">From video to chatbot</div>
  <h2>ConsiliumBots and the next generation</h2>
  <p class="lede">
    The two younger siblings (DFM Chile and DFM Colombia / ICFES-Bot)
    are run out of <a href="https://www.consiliumbots.com/" rel="noopener">ConsiliumBots</a>,
    a technology nonprofit founded explicitly on the AVE-RD line of
    research.
  </p>
</div>

<p>
  ConsiliumBots was built on the premise that AVE-RD's finding &mdash;
  that information about returns to education shifts schooling
  decisions &mdash; could be amplified by the new ability to deliver
  that information at scale, personalised to the student, through
  channels students already use. Where AVE-RD relies on a counsellor
  to play a video in class, ICFES-Bot meets a high-school senior on
  WhatsApp and walks them through the financing options for the
  specific programme they are considering, in real time. The
  intellectual debt is direct.
</p>

<div class="signal-panel reveal">
  <div class="eyebrow">Researchers and policy partners</div>
  <p>
    The ConsiliumBots research portfolio is a collaboration between
    <strong>Michael Kremer</strong>, <strong>Jaime Saavedra</strong>,
    <strong>Eric Bettinger</strong>, <strong>Christian Posso</strong>,
    and the AVE-RD team, with policy leadership from
    <strong>M&oacute;nica Espina</strong> at ICFES on the Colombia work
    and J-PAL Santiago on the Chile platform.
  </p>
</div>

<p>
  The four researchers above have anchored a body of work in
  Colombia &mdash; on scholarships, conditional cash transfers,
  vocational training, and now personalised information &mdash; that
  has supplied much of the empirical motivation for ICFES-Bot. The
  policy work runs through ICFES (the Instituto Colombiano para la
  Evaluaci&oacute;n de la Educaci&oacute;n), the public agency that
  administers Colombia's national exams.
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Replication architecture</div>
  <h2>What the four implementations share</h2>
  <p class="lede">
    The design is portable for a reason. Each implementation reuses a
    short list of components and varies the delivery surface to fit
    local context.
  </p>
</div>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>A wage-by-schooling-level dataset</h3>
      <p>
        Every implementation anchors its informative arm on real,
        local earnings data &mdash; not a generic "more school =
        more income" message. The credibility of the intervention
        depends on this.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>A delivery channel students already use</h3>
      <p>
        Telenovela video in DR and Per&uacute;; an interactive web
        platform in Chile; WhatsApp in Colombia. The design is
        agnostic about the surface &mdash; what matters is that the
        ministry can deploy it through existing infrastructure rather
        than parallel research-team field staff.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>A school- or student-randomized RCT layer</h3>
      <p>
        Each implementation pre-registered an evaluation. That layer
        is what produced the evidence base each ministry used to
        justify the policy adoption.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Delivery through the existing ministry</h3>
      <p>
        AVE-RD via MINERD's Department of Orientation and Psychology;
        DFM Per&uacute; via MINEDU's MineduLAB; DFM Chile via Mineduc
        Chile; DFM Colombia via ICFES and ICETEX. Operational
        ownership stays with the ministry &mdash; that is part of why
        all four survived the end of their initial grants.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>An open replication kit</h3>
      <p>
        Instruments, code and de-identified data released under
        <span class="font-osf">CC&nbsp;BY&nbsp;4.0</span> or similar.
        That is part of why this page exists at all and why the next
        country's adaptation is an <em>engineering</em> exercise
        rather than a research one.
      </p>
    </div>
  </li>
</ol>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Adapting in your country</div>
  <h2>How a fifth country gets started</h2>
</div>

<p>
  The fastest path from "we have read about AVE, DFM Per&uacute;, DFM
  Chile and ICFES-Bot" to "our ministry is running the program" is a
  short phone call with the AVE-RD team. We can sketch what a
  six-month launch looks like in your country, and route you to the
  J-PAL, IPA, or ConsiliumBots office most experienced with the
  relevant context and delivery surface.
</p>

<p style="text-align:center;margin-top:24px">
  <a class="btn-cta" href="/briefs/for-ministers/">Read the ministers&rsquo; brief</a>
  <a class="btn-cta btn-cta--ghost" href="/projects/contact/" style="margin-left: 12px;">Talk to the team</a>
</p>
