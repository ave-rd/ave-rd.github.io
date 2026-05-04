---
layout: page
title: Learning the value of education
description: "A school-randomized RCT testing how short videos shift Dominican students' beliefs about the returns to education — and their schooling decisions."
eyebrow: "AVE · Dominican Republic"
---

<p class="dropcap">
  AVE &mdash; <em>Aprendiendo el Valor de la Educación</em> &mdash; is a
  large-scale randomized evaluation conducted in the Dominican Republic
  with the Ministry of Education. We test whether a brief, scalable
  information campaign &mdash; four short videos shown in the classroom &mdash;
  can shift students&rsquo; beliefs about the returns to education and,
  with them, the choice to stay in school. The first wave reached
  <span class="font-osf">600</span> public schools and <span class="font-osf">43,000</span>
  students. A new follow-up wave is now in the field.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dd class="stat-strip__value">2.5&ndash;3pp</dd>
    <dt class="stat-strip__label">Reduction in dropout</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">0.05&ndash;0.13σ</dd>
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
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Now</div>
  <h2>2025&ndash;2027 follow-up wave</h2>
  <p class="lede">
    AVE is back in the field. The follow-up wave extends the original
    panel by ten years, links the schooling outcomes to administrative
    earnings data, and tests whether the belief updates from
    <span class="font-osf">2015&ndash;2016</span> persist into early
    careers.
  </p>
</div>

<div class="signal-panel reveal">
  <div class="eyebrow">In the field</div>
  <p>
    <strong>Research questions.</strong>
    Do the dropout and test-score effects from the original wave translate
    into measurable labor-market outcomes a decade later? How durable are
    the belief shifts? Do they propagate to siblings or peers?
  </p>
  <p>
    <strong>Design.</strong>
    Re-survey of the original cohort, linked to MINERD enrollment records
    and the Tesorer&iacute;a de la Seguridad Social earnings panel.
    A new RCT layer tests an updated video catalog with current
    labor-market data.
  </p>
  <p>
    <strong>Status.</strong>
    Pre-analysis plan registered. Field operations resumed
    <span class="font-osf">2025</span>. First descriptive results expected
    <span class="font-osf">2026</span>.
  </p>
  <p>
    <strong>Partner with us.</strong>
    Researchers, ministries, and donors interested in adapting AVE for
    other contexts &mdash; please <a href="/projects/contact/">write to the
    team</a>.
  </p>
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
  <li><a href="/projects/videos/">The intervention</a> &mdash; all four videos with arm and episode metadata.</li>
  <li><a href="/projects/download-videos-2/">Replication kit</a> &mdash; papers, instruments, code, data, and the procedure for using the videos in your own study.</li>
  <li><a href="/projects/partners/">Partners</a> &mdash; J-PAL LAC, MINERD, IDEICE, USAID.</li>
  <li><a href="/projects/gallery/">Photographs from the field</a>.</li>
</ul>
