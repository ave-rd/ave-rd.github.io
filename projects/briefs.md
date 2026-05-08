---
title: Policy briefs
description: "Two-page briefs distilling AVE-RD's findings, the case for the follow-up wave, and the playbook for ministers of education adapting the program."
eyebrow: "Briefs · 3 issues"
layout: page
order: 4
lang: en
alt_url: /es/briefs/
hero-style: gradient
---

<p class="dropcap">
  Working papers are written for economists. The brief series is for
  everyone else: ministers of education weighing whether to adapt the
  intervention, foundation officers deciding whether to fund the follow-up,
  and J-PAL country teams looking for a one-shot summary of the AVE-RD
  evidence. Each brief is two pages, downloadable as a PDF, and indexed as
  a standalone HTML page so it shows up in search.
</p>

<ul class="brief-grid brief-grid--three reveal">
  {% for b in site.data.briefs.briefs %}
  <li>
    <article class="brief-card">
      <div class="brief-card__meta">
        <span class="brief-card__audience">{{ b.audience }}</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ b.pages }}</span>&nbsp;pages</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ b.date | date: "%b %Y" }}</span></span>
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

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">How to use these</div>
  <h2>Three briefs, three audiences</h2>
</div>

<p>
  The series is intentionally modular: a researcher need only read brief
  one; a funder reads two; a ministry reads three. Each is independent.
  The three together are the briefing pack we send to a new institutional
  partner.
</p>

<div class="signal-panel reveal">
  <div class="eyebrow">Permission to reuse</div>
  <p>
    The briefs are licensed CC&nbsp;BY&nbsp;4.0. Quote freely with
    attribution to the AVE-RD project. For translations and
    re-typesetting, please <a href="/projects/contact/">write to the
    team</a> so we can list your version on this page.
  </p>
</div>
