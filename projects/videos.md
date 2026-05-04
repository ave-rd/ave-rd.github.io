---
title: The intervention
description: "The four short videos shown to AVE-RD students in 7th and 8th grade classrooms across the Dominican Republic."
eyebrow: "Videos · 4 episodes"
layout: page
order: 3
---

<p class="dropcap">
  AVE-RD's intervention is a series of short videos &mdash; eighth-grade
  characters considering future schooling decisions, the wage returns to
  more education, the cost and feasibility of higher study. Each episode
  runs about fifteen minutes, designed to be shown in a single class period
  with a discussion guide and accompanying classroom poster.
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Two arms</div>
  <h2>Persuasive and Informative</h2>
  <p class="lede">
    Two video tracks were tested. The persuasive arm framed the choice
    qualitatively through the characters&rsquo; perspective. The informative
    arm added segments with quantitative wage data by schooling level.
  </p>
</div>

<p>
  The full series is hosted on the project's
  <a href="{{ site.data.videos.playlist_url }}">YouTube playlist</a>.
  Click any thumbnail to play in place &mdash; the embed loads only on click,
  so no third-party tracking until you ask for it.
</p>

<ul class="video-grid reveal">
  {% for v in site.data.videos.videos %}
  <li>
    <article class="video-card">
      <button
        type="button"
        class="video-card__media"
        data-video-id="{{ v.id }}"
        aria-label="Play: {{ v.title }}"
      >
        <img
          src="https://i.ytimg.com/vi/{{ v.id }}/hqdefault.jpg"
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
          <span>Episode <span class="font-osf">{{ v.episode }}</span></span>
          <span class="dot">&middot;</span>
          <span>{{ v.arm | capitalize }}</span>
          <span class="dot">&middot;</span>
          <span>{{ v.duration }}</span>
        </div>
        <h3 class="video-card__title">{{ v.title }}</h3>
        <p class="video-card__description">{{ v.description }}</p>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">For replication</div>
  <h2>Use the videos in your own study</h2>
  <p class="lede">
    The series, the discussion guides, and the survey instruments are
    available to research and evaluation institutions under a use agreement.
    Email the team and describe the intended use.
  </p>
</div>

<p>
  See <a href="/projects/download-videos-2/">Request the videos</a> for the
  full procedure, or jump straight to <a href="/projects/contact/">Contact</a>
  to write to the project office.
</p>
