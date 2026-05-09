---
layout: page
title: "Continue the AVE policy. Support the long-run evaluation."
description: "An open letter from Dominican stakeholders to MINERD requesting that the AVE intervention continue at full coverage and that the 2025–2027 long-run follow-up evaluation be supported."
eyebrow: "Open letter · Dominican Republic"
permalink: /campaigns/continue-the-policy/
hero-style: gradient
lang: en
alt_url: /es/sumate/
seo:
  type: WebPage
---

{% assign campaign = site.data.campaigns.campaigns | where: "id", "continue-policy" | first %}
{% assign sigs = site.data.signatures.continue_policy %}
{% assign sig_count = sigs | size %}

<p style="text-align:center;">
  <span class="signatory-counter" style="background:var(--turquoise-50);border-color:var(--turquoise-300);">
    <span class="signatory-counter__value" style="color:var(--turquoise-700);"><span class="font-osf">{{ sig_count }}</span></span>
    <span class="signatory-counter__label" style="color:var(--turquoise-700);">approved signatories &middot; growing</span>
  </span>
</p>

<p class="dropcap">
  After the <span class="font-osf">2014&ndash;2017</span> pilot
  evaluation, the AVE intervention &mdash; four short videos and a
  classroom protocol &mdash; was adopted as MINERD policy and is now
  delivered in <strong>every public school in the Dominican Republic</strong>.
  The <span class="font-osf">2025&ndash;2027</span> follow-up wave is
  what tells us whether the schooling effect translates into earnings.
  This letter, addressed to the Ministry, asks for two things:
  continuity of the policy, and support for the long-run evaluation.
</p>

<aside class="letter-body reveal" aria-labelledby="letter-heading">
  <span class="letter-body__recipient">To: {{ campaign.recipient_en }}</span>
  <h2 id="letter-heading" style="margin-top:0;">An open letter</h2>

  <p>
    The undersigned write in support of two related decisions facing
    the Ministry of Education in <span class="font-osf">2026</span>.
  </p>

  <p>
    <strong>First, continue the AVE intervention as standing policy.</strong>
    The 2014&ndash;2017 evaluation, conducted by J-PAL LAC and IDEICE,
    documented a <span class="font-osf">2.5&ndash;3</span>&nbsp;pp
    reduction in dropout, a <span class="font-osf">0.05&ndash;0.13</span>
    standard-deviation lift in Pruebas Nacionales scores, and a
    measurable shift in students&rsquo; beliefs about the wage returns
    to schooling. The intervention is cheap, deliverable through the
    existing Department of Orientation and Psychology network, and
    has now been national policy for several years. Removing it would
    discard a documented public-policy gain at no fiscal saving.
  </p>

  <p>
    <strong>Second, support the long-run follow-up evaluation.</strong>
    The original cohort is now
    <span class="font-osf">23&ndash;26</span> years old and reachable
    through MINERD enrolment records and the Tesorer&iacute;a de la
    Seguridad Social earnings panel. The follow-up wave converts the
    documented short-term effect into the first long-run earnings
    evidence on a video-based information campaign in Latin America
    &mdash; an output that ministries of education across the region
    will use as a benchmark.
  </p>

  <p>
    The country team that ran the 2015&ndash;2016 wave is the team
    running the follow-up. The data agreements are open. The
    pre-analysis plan is registered. The remaining input is
    institutional support from the Ministry. We add our names below.
  </p>
</aside>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Why we&rsquo;re writing</div>
  <h2>Continuity is the cheapest research input we have</h2>
</div>

<p>{{ campaign.why_en }}</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Signatories</div>
  <h2>{{ sig_count }} so far &mdash; grouped by tier</h2>
  <p class="lede">
    Each entry has been verified against an institutional contact,
    affiliation domain, or school code before publication. See the
    <a href="/projects/campaigns/">campaigns hub</a> for the
    verification process in detail.
  </p>
</div>

{% include signature-wall.html signatures=sigs lang="en" %}

{% include tally-embed.html
   form_id=campaign.tally_form_id
   title="Add your signature"
   lede="Five fields and a 280-character statement. We verify each entry before publication."
   lang="en" %}

<div class="signal-panel reveal">
  <div class="eyebrow">Sister campaign</div>
  <p>
    If you are an academic, J-PAL/IPA staff, foundation officer, or
    member of the international research community, the
    <a href="/campaigns/support-the-follow-up/">long-run follow-up
    pledge</a> is the better fit. You can sign both if you wear two
    hats.
  </p>
</div>

<p style="text-align:center;margin-top:32px">
  <a class="btn-cta" href="#tally-frame">Sign the letter</a>
  <a class="btn-cta btn-cta--ghost" href="/es/sumate/" style="margin-left: 12px;" hreflang="es">Versi&oacute;n en espa&ntilde;ol</a>
</p>
