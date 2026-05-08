---
title: News and field updates
description: "Field-update posts, brief releases, and milestone announcements from the AVE-RD project."
eyebrow: "News · field updates"
layout: page
permalink: /news/
hero-style: gradient
---

<p class="dropcap">
  Short posts from the field operation in Santo Domingo: contact-tracing
  pilot read-outs, brief releases, partnership milestones, and
  occasional notes on what the cohort tells us. Subscribe via
  <a href="/feed.xml">RSS</a> or follow the project on the
  partner channels listed at the bottom of the page.
</p>

<ul class="news-grid reveal">
  {% assign sorted_news = site.news | sort: 'date' | reverse %}
  {% for post in sorted_news %}
  <li>
    <article class="news-card">
      <div class="news-card__meta">
        {% if post.category %}<span class="news-card__category">{{ post.category }}</span><span class="dot">&middot;</span>{% endif %}
        <time datetime="{{ post.date | date_to_xmlschema }}"><span class="font-osf">{{ post.date | date: "%B %-d, %Y" }}</span></time>
      </div>
      <h3 class="news-card__title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <p class="news-card__excerpt">{{ post.description }}</p>
      <div class="news-card__cta">
        <a href="{{ post.url }}">Read post</a>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="signal-panel signal-panel--research reveal">
  <div class="eyebrow">Stay in the loop</div>
  <p>
    Updates land roughly once a month during fieldwork and at brief
    releases otherwise. The <a href="/feed.xml">RSS feed</a> is the
    canonical source. For institutional announcements, follow
    <a href="https://www.povertyactionlab.org/lac" rel="noopener">J-PAL LAC</a>
    or the partner channels on the
    <a href="/projects/partners/">Partners</a> page.
  </p>
</div>
