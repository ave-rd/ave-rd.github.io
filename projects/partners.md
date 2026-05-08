---
title: Partners
description: "The four institutions that designed, funded and evaluated AVE-RD — with the named leads inside each one who carry the work."
eyebrow: "Partners · 4 institutions"
date: 2017-09-14T14:23:53+00:00
author: Gonzalo Oyanedel
layout: page
order: 5
lang: en
alt_url: /es/partners/
hero-style: gradient
---

<p class="dropcap">
  AVE-RD is the work of four institutions across two countries: a research
  lab, a national ministry, an evaluation agency, and an international
  donor. Each owned one part of the pipeline &mdash; design, delivery,
  measurement, funding &mdash; and the pilot reached
  <span class="font-osf">200,000</span> students because all four held
  their corner. The follow-up wave keeps the same partnership architecture,
  with a new emphasis on the evaluation agency's access to administrative
  earnings records.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dd class="stat-strip__value">4</dd>
    <dt class="stat-strip__label">Institutional partners</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">2</dd>
    <dt class="stat-strip__label">Countries (DR &amp; US)</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">18</dd>
    <dt class="stat-strip__label">Educational regions</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">10+</dd>
    <dt class="stat-strip__label">Years of partnership</dt>
  </div>
</dl>

{% for p in site.data.partner_leads.partners %}
<section class="partner-card reveal" id="{{ p.id }}" itemscope itemtype="https://schema.org/{{ p.schema_type }}">
  <meta itemprop="name" content="{{ p.name | strip_html }}" />
  <meta itemprop="url" content="{{ p.url }}" />
  <div class="partner-card__logo">
    <img src="{{ p.logo }}" alt="{{ p.short }} logo" loading="lazy" itemprop="logo" />
  </div>
  <div class="partner-card__body">
    <span class="badge badge--{{ p.role_badge }}">{{ p.role_label }}</span>
    <h3>{{ p.name }}</h3>
    <p itemprop="description">{{ p.description }}</p>

    {% if p.quote %}
    <blockquote class="pullquote">
      &ldquo;{{ p.quote.text }}&rdquo;
      <span class="pullquote__attrib">&mdash; {{ p.quote.attrib }}</span>
    </blockquote>
    {% endif %}

    {% if p.leads and p.leads.size > 0 %}
    <ul class="roster" aria-label="Named leads at {{ p.short }}">
      {% for lead in p.leads %}
      <li>
        <span class="roster__name">{{ lead.name }}<span class="roster__role">{{ lead.role }}</span></span>
      </li>
      {% endfor %}
    </ul>
    {% endif %}

    <p style="margin-top: 24px;">
      <a class="partner-card__link" href="{{ p.url }}" rel="noopener">Visit {{ p.short }}</a>
    </p>
  </div>
</section>
{% endfor %}

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Partnering with AVE-RD</div>
  <h2>What we look for in a new partner</h2>
  <p class="lede">
    The follow-up wave is open to additional research collaborators,
    replication teams, and donors. The relationship is structured around
    three deliverables.
  </p>
</div>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>Co-author on a paper or brief</h3>
      <p>
        Researchers join the writing team for a working paper or one of
        the planned <a href="/projects/briefs/">policy briefs</a>. Authorship
        order is set at the design-of-analysis stage, not at writing time.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Replicate the intervention in your country</h3>
      <p>
        Ministries and J-PAL regional offices can adapt the four videos,
        the discussion guide, and the survey panel to local labor-market
        data. We provide the kit and a six-month launch protocol.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Fund the long-run wave</h3>
      <p>
        Foundations and bilateral donors can support specific budget lines
        in the 2025&ndash;2027 follow-up: re-survey, administrative-data
        linkage, qualitative interviews, and the open replication kit.
        See <a href="/projects/follow-up/">Support the follow-up</a>.
      </p>
    </div>
  </li>
</ol>

<p style="text-align:center;margin-top:24px">
  <a class="partner-card__link" href="/projects/contact/">Write to the team</a>
</p>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {% for p in site.data.partner_leads.partners %}
    {
      "@type": "{{ p.schema_type }}",
      "@id": "{{ site.url }}/projects/partners/#{{ p.id }}",
      "name": "{{ p.name | strip_html }}",
      "alternateName": "{{ p.short }}",
      "url": "{{ p.url }}",
      "logo": "{{ site.url }}{{ p.logo }}",
      "description": "{{ p.description | strip_html | strip_newlines | truncate: 240 }}",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "{{ p.country }}"
      },
      "memberOf": {
        "@type": "ResearchProject",
        "@id": "{{ site.url }}/#project"
      }
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
</script>
