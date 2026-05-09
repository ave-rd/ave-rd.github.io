---
title: Press, voices and milestones
description: "AVE-RD in the press, in the words of partners and field staff, and on a single 2014–2027 timeline."
eyebrow: "Press · voices · milestones"
layout: page
order: 8
hero-style: gradient
---

<p class="dropcap">
  Three things together on one page: who has covered AVE-RD, what the
  partners and field officers say about it in their own words, and a
  single timeline that runs from the founding USAID grant in
  <span class="font-osf">2014</span> through the long-run results
  expected in <span class="font-osf">2027</span>.
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

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Voices</div>
  <h2>What the partners say</h2>
  <p class="lede">
    Quotes from the four institutional partners. Useful for funders
    looking for an external read on the program.
  </p>
</div>

<ul class="testimonial-grid reveal">
  {% for t in site.data.press.testimonials %}
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

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Timeline</div>
  <h2>From a 2014 grant to a 2027 long-run paper</h2>
  <p class="lede">
    Eight milestones. The current marker sits on the
    <span class="font-osf">2025</span> resumption of fieldwork.
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
