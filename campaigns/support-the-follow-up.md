---
layout: page
title: "Endorse the AVE-RD long-run follow-up evaluation."
description: "An international pledge of support for the 2025–2027 long-run follow-up evaluation, addressed to foundations, bilateral and multilateral funders, and the long-run-RCT research community."
eyebrow: "Pledge · 2025–2027"
permalink: /campaigns/support-the-follow-up/
hero-style: gradient
lang: en
alt_url: /es/avale/
seo:
  type: WebPage
---

{% assign campaign = site.data.campaigns.campaigns | where: "id", "follow-up-pledge" | first %}
{% assign sigs = site.data.signatures.follow_up_pledge %}
{% assign sig_count = sigs | size %}

<p style="text-align:center;">
  <span class="signatory-counter" style="background:var(--bole-50);border-color:var(--bole-300);">
    <span class="signatory-counter__value" style="color:var(--bole-700);"><span class="font-osf">{{ sig_count }}</span></span>
    <span class="signatory-counter__label" style="color:var(--bole-700);">endorsers &middot; growing</span>
  </span>
</p>

<p class="dropcap">
  AVE-RD&rsquo;s first wave moved a schooling decision; the
  <span class="font-osf">2025&ndash;2027</span> follow-up tells us
  whether that decision moved <em>lives</em>. The project originated
  as a USAID
  <a href="https://www.usaid.gov/div">Development Innovation Ventures
  (DIV)</a> grant &mdash; an open-innovation programme that selects
  on the rigour of the evaluation a project can sustain &mdash;
  and grew into standing MINERD policy. This pledge is for
  foundations, bilateral and multilateral funders, and the long-run-RCT
  research community. Endorsing it signals that the project sits inside
  a recognised research priority &mdash; reproducible information
  interventions in education, measured at the cohort scale and
  followed into the labour market.
</p>

<aside class="letter-body reveal" aria-labelledby="pledge-heading">
  <span class="letter-body__recipient">To: {{ campaign.recipient_en }}</span>
  <h2 id="pledge-heading" style="margin-top:0;">The pledge</h2>

  <p>
    By signing this pledge, the undersigned commit to:
  </p>

  <ol class="numbered-list" style="margin:0 0 16px;">
    <li>
      <div>
        <h3>Recognise the AVE-RD long-run follow-up as a priority replication.</h3>
        <p>
          AVE-RD is the operational scale-up of the Jensen
          (<span class="font-osf">2010</span>,
          <em>QJE</em> <span class="font-osf">125(2)</span>) information&ndash;schooling
          design. Long-run measurement of that design is now an
          identified gap in the literature; the AVE-RD cohort is the
          best-positioned way to fill it.
        </p>
      </div>
    </li>
    <li>
      <div>
        <h3>Support the 2025&ndash;2027 cohort re-survey and TSS earnings linkage.</h3>
        <p>
          We treat the cohort re-survey, the IDEICE-brokered linkage
          to the Tesorer&iacute;a de la Seguridad Social earnings
          panel, and the open replication kit as legitimate budget
          lines for our institutions and our peer reviewers.
        </p>
      </div>
    </li>
    <li>
      <div>
        <h3>Treat the open replication kit as a reusable benchmark.</h3>
        <p>
          The forthcoming de-identified panel and Stata pipeline
          released under <span class="font-osf">CC&nbsp;BY&nbsp;4.0</span>
          should be the reference adaptation for similar interventions
          in other countries, alongside DFM&nbsp;Per&uacute;,
          DFM&nbsp;Chile, and DFM&nbsp;Colombia / ICFES-Bot.
        </p>
      </div>
    </li>
  </ol>

  <p style="margin-top: 16px;">
    Endorsement is not a financial commitment. It is a public
    statement that the long-run measurement matters to the field
    you represent.
  </p>
</aside>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Why endorse</div>
  <h2>Long-run measurement signals demand</h2>
</div>

<p>{{ campaign.why_en }}</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Endorsers</div>
  <h2><span class="font-osf">{{ sig_count }}</span> so far</h2>
  <p class="lede">
    Researcher signatures verified by affiliation domain or ORCID;
    foundation and policy signatures verified against institutional
    contact information.
  </p>
</div>

{% include signature-wall.html signatures=sigs lang="en" %}

{% include sign-form.html
   campaign_id=campaign.id
   recipient=site.data.campaigns.site_recipient_email
   repo=site.data.campaigns.github_repo
   gh_labels=campaign.github_issue_labels
   lang="en"
   title="Add your endorsement"
   lede="Researchers, J-PAL/IPA staff, foundation officers, multilateral programme leads. Eight fields and two ways to submit." %}

<div class="signal-panel signal-panel--research reveal">
  <div class="eyebrow">Sister campaign</div>
  <p>
    If you are a Dominican stakeholder &mdash; ministry official,
    school director, counsellor, parent, or alumni of the original
    cohort &mdash; the
    <a href="/campaigns/continue-the-policy/">open letter to
    MINERD</a> is the better fit. You can sign both if you wear two
    hats.
  </p>
</div>

<p style="text-align:center;margin-top:32px">
  <a class="btn-cta" href="#sign-form-follow-up-pledge-section">Add your endorsement</a>
  <a class="btn-cta btn-cta--ghost" href="/campaigns/support-the-follow-up/letter/" style="margin-left: 12px;">Printable pledge &amp; endorsers list</a>
  <a class="btn-cta btn-cta--ghost" href="/projects/follow-up/" style="margin-left: 12px;">Read the funder brief</a>
  <a class="btn-cta btn-cta--ghost" href="/es/avale/" style="margin-left: 12px;" hreflang="es">Versi&oacute;n en espa&ntilde;ol</a>
</p>
