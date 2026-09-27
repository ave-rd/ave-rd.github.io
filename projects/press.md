---
title: Press and milestones
description: "AVE-RD in the press and on a single timeline from 2014."
eyebrow: "Press · milestones"
layout: page
order: 8
hero-style: gradient
---

<p class="dropcap">
  Two things together on one page: who has covered AVE-RD, and a
  single timeline that runs from the founding USAID grant in
  <span class="font-osf">2014</span> to the long-run follow-up now
  being planned.
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Coverage</div>
  <h2>In the press</h2>
  <p class="lede">
    A short selection of media coverage and partner write-ups. The
    bracketed entries are placeholders awaiting confirmed URLs &mdash;
    please <a href="/projects/contact/">flag any we&rsquo;ve missed</a>.
  </p>
</div>

<ul class="press-logos reveal" aria-label="Selected press coverage">
  {% for c in site.data.press.coverage %}
  <li>
    {% if c.url and c.url != "" and c.url != "#" %}
    <a href="{{ c.url }}" rel="noopener" title="{{ c.outlet }} &mdash; {{ c.title }}">{{ c.outlet }}</a>
    {% else %}
    <span title="{{ c.outlet }} &mdash; {{ c.title }} (link forthcoming)">{{ c.outlet }}</span>
    {% endif %}
  </li>
  {% endfor %}
</ul>

<div class="signal-panel reveal">
  <div class="eyebrow">Coverage detail</div>
  <ul class="signal-panel__list">
    {% for c in site.data.press.coverage %}
    <li>
      <strong>{{ c.outlet }}</strong> &middot; <span class="font-osf">{{ c.date | date: "%B %Y" }}</span><br />
      {% if c.url and c.url != "" and c.url != "#" %}
        <a href="{{ c.url }}" rel="noopener">{{ c.title }}</a>
      {% else %}
        <em>{{ c.title }}</em> <span class="badge badge--neutral">URL forthcoming</span>
      {% endif %}
      &mdash; <span class="signal-panel__note">{{ c.note }}</span>
    </li>
    {% endfor %}
  </ul>
</div>

{% comment %} Hidden until _data/press.yml has real, approved quotes.
   When it does, put "voices" back in the page title and intro. {% endcomment %}
{% assign testimonials = site.data.press.testimonials %}
{% if testimonials and testimonials.size > 0 %}
<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Voices</div>
  <h2>What the partners say</h2>
  <p class="lede">
    Quotes from institutional partners. Useful for funders looking for
    an external read on the program.
  </p>
</div>

<ul class="testimonial-grid reveal">
  {% for t in testimonials %}
  <li>
    <article class="testimonial-card" id="{{ t.id }}">
      <p class="testimonial-card__body">{{ t.quote }}</p>
      <div class="testimonial-card__attrib">
        <span class="testimonial-card__name">{{ t.name }}</span>
        <span class="testimonial-card__role">{{ t.role }}</span>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>
{% endif %}

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Timeline</div>
  <h2>From a 2014 grant to a long-run follow-up</h2>
  <p class="lede">
    The current marker sits on planning for the long-run follow-up.
  </p>
</div>

<ol class="timeline reveal">
  {% for m in site.data.press.timeline %}
  <li class="timeline__item--{{ m.state }}">
    <span class="timeline__date">{{ m.date }}</span>
    <h3 class="timeline__title">{{ m.title }}</h3>
    <p class="timeline__body">{{ m.body }}</p>
  </li>
  {% endfor %}
</ol>

<p style="text-align:center;margin-top:32px">
  <a class="btn-cta" href="/projects/follow-up/">Support the follow-up</a>
  <a class="btn-cta" href="/projects/contact/" style="margin-left: 12px;">Talk to the team</a>
</p>
