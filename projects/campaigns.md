---
title: Add your voice
description: "Two parallel signature campaigns: a Dominican-facing open letter asking that the AVE policy continue, and an international pledge endorsing the long-run follow-up evaluation."
eyebrow: "Campaigns · 2 letters, 4 tiers"
layout: page
order: 7
lang: en
hero-style: gradient
seo:
  type: WebPage
---

<p class="dropcap">
  AVE-RD is in the hands of two audiences right now. Dominican
  ministers, regional coordinators, school directors and parents
  decide whether the program continues at full coverage. Foundations,
  bilateral donors, multilaterals and the international research
  community decide whether the long-run follow-up evaluation gets
  funded. Both decisions move on social proof. This page is where
  that proof lives.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Open letters</dt>
    <dd class="stat-strip__value">2</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Signatory tiers</dt>
    <dd class="stat-strip__value">4</dd>
  </div>
  {% assign continue_count = site.data.signatures.continue_policy | size %}
  {% assign pledge_count = site.data.signatures.follow_up_pledge | size %}
  {% assign total_count = continue_count | plus: pledge_count %}
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Approved signatories</dt>
    <dd class="stat-strip__value"><span class="font-osf">{{ total_count }}</span></dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Languages</dt>
    <dd class="stat-strip__value">EN&nbsp;·&nbsp;ES</dd>
  </div>
</dl>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Pick the campaign that fits</div>
  <h2>Two letters, two audiences</h2>
  <p class="lede">
    Each campaign asks a specific recipient for a specific decision.
    Sign the one that matches your role &mdash; or both, if you wear
    two hats.
  </p>
</div>

<ul class="brief-grid reveal">
  {% for c in site.data.campaigns.campaigns %}
  {% if c.id == 'continue-policy' %}
    {% assign sigs = site.data.signatures.continue_policy %}
  {% else %}
    {% assign sigs = site.data.signatures.follow_up_pledge %}
  {% endif %}
  <li>
    <article class="brief-card">
      <div class="brief-card__meta">
        <span class="brief-card__audience">{{ c.flag }} &nbsp; {{ c.audience }}</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ sigs | size }}</span>&nbsp;signatories</span>
      </div>
      <h3 class="brief-card__title">
        <a href="/campaigns/{{ c.slug }}/">{{ c.title_en }}</a>
      </h3>
      <p class="brief-card__lede">
        Addressed to: {{ c.recipient_en }}.
      </p>
      <div class="brief-card__cta">
        <a href="/campaigns/{{ c.slug }}/">Read &amp; sign</a>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">How signatures are handled</div>
  <h2>Verification, privacy, what we publish</h2>
</div>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>You submit through the campaign-page form</h3>
      <p>
        Each campaign embeds a Tally form. We collect your name,
        role, institution, country, an optional 280-character
        statement, and a contact email (used only to verify your
        identity).
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>The project office verifies</h3>
      <p>
        Policymaker and educator signatures are verified against
        institutional contact information; researcher signatures
        are verified by affiliation domain or ORCID; community
        signatures (parents, alumni, students) pass a captcha and a
        light moderation check. We do not publish any entry until
        we are reasonably confident the signatory is who they say
        they are.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Approved signatures appear on the campaign page</h3>
      <p>
        We publish your name, role, institution, country, and the
        statement you wrote. Your email address is never published
        and never shared. You can ask us to remove your signature
        at any time by writing to the
        <a href="/projects/contact/">project office</a>.
      </p>
    </div>
  </li>
</ol>

<div class="signal-panel reveal">
  <div class="eyebrow">A note for under-18 signatories</div>
  <p>
    If you are an AVE-RD alumni or current student under 18, please
    ask a parent or guardian to co-sign. We do not publish minors&rsquo;
    signatures without parental consent.
  </p>
</div>

<p style="text-align:center;margin-top:32px">
  <a class="btn-cta" href="/campaigns/continue-the-policy/">Continue the policy &middot; Open letter</a>
  <a class="btn-cta btn-cta--ghost" href="/campaigns/support-the-follow-up/" style="margin-left: 12px;">Endorse the follow-up &middot; Pledge</a>
</p>
