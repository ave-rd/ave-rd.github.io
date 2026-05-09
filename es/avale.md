---
layout: page
title: "Avale la evaluación de seguimiento a largo plazo AVE-RD."
description: "Aval internacional de apoyo a la evaluación de seguimiento 2025–2027, dirigido a fundaciones, donantes bilaterales y multilaterales, y a la comunidad de investigación en RCT de largo plazo."
eyebrow: "Compromiso · 2025–2027"
permalink: /es/avale/
hero-style: gradient
lang: es
alt_url: /campaigns/support-the-follow-up/
order: 9
seo:
  type: WebPage
---

{% assign campaign = site.data.campaigns.campaigns | where: "id", "follow-up-pledge" | first %}
{% assign sigs = site.data.signatures.follow_up_pledge %}
{% assign sig_count = sigs | size %}

<p style="text-align:center;">
  <span class="signatory-counter" style="background:var(--bole-50);border-color:var(--bole-300);">
    <span class="signatory-counter__value" style="color:var(--bole-700);"><span class="font-osf">{{ sig_count }}</span></span>
    <span class="signatory-counter__label" style="color:var(--bole-700);">avales &middot; sumando</span>
  </span>
</p>

<p class="dropcap">
  La primera ola de AVE-RD movi&oacute; una decisi&oacute;n
  escolar; el seguimiento <span class="font-osf">2025&ndash;2027</span>
  nos dice si esa decisi&oacute;n movi&oacute; <em>vidas</em>. Este
  aval est&aacute; dirigido a fundaciones, donantes bilaterales y
  multilaterales, y a la comunidad de investigaci&oacute;n en RCT
  de largo plazo. Avalarlo se&ntilde;ala que el proyecto se
  inscribe en una prioridad de investigaci&oacute;n reconocida
  &mdash; intervenciones informativas reproducibles en
  educaci&oacute;n, medidas a escala de cohorte y seguidas hasta el
  mercado laboral.
</p>

<aside class="letter-body reveal" aria-labelledby="pledge-heading">
  <span class="letter-body__recipient">A: {{ campaign.recipient_es }}</span>
  <h2 id="pledge-heading" style="margin-top:0;">El compromiso</h2>

  <p>
    Al firmar este aval, los abajo firmantes nos comprometemos a:
  </p>

  <ol class="numbered-list" style="margin:0 0 16px;">
    <li>
      <div>
        <h3>Reconocer el seguimiento de largo plazo de AVE-RD como replicaci&oacute;n prioritaria.</h3>
        <p>
          AVE-RD es la implementaci&oacute;n a escala del dise&ntilde;o
          informaci&oacute;n&ndash;escolaridad de Jensen
          (<span class="font-osf">2010</span>,
          <em>QJE</em> <span class="font-osf">125(2)</span>). La
          medici&oacute;n de largo plazo de ese dise&ntilde;o es hoy una
          brecha identificada en la literatura; la cohorte AVE-RD es la
          mejor posicionada para cerrarla.
        </p>
      </div>
    </li>
    <li>
      <div>
        <h3>Apoyar la re-encuesta de cohorte 2025&ndash;2027 y la vinculaci&oacute;n con la TSS.</h3>
        <p>
          Tratamos la re-encuesta de cohorte, la vinculaci&oacute;n
          intermediada por IDEICE con el panel de ingresos de la
          Tesorer&iacute;a de la Seguridad Social, y el kit de
          replicaci&oacute;n abierta como l&iacute;neas
          presupuestarias leg&iacute;timas para nuestras instituciones
          y para nuestros revisores pares.
        </p>
      </div>
    </li>
    <li>
      <div>
        <h3>Tratar el kit de replicaci&oacute;n abierta como referente reutilizable.</h3>
        <p>
          El panel anonimizado y la cadena de procesamiento en Stata
          que se publicar&aacute;n bajo
          <span class="font-osf">CC&nbsp;BY&nbsp;4.0</span> deber&iacute;an
          ser la adaptaci&oacute;n de referencia para intervenciones
          similares en otros pa&iacute;ses, junto con DFM&nbsp;Per&uacute;,
          DFM&nbsp;Chile y DFM&nbsp;Colombia / ICFES-Bot.
        </p>
      </div>
    </li>
  </ol>

  <p style="margin-top: 16px;">
    El aval no constituye un compromiso financiero. Es una
    declaraci&oacute;n p&uacute;blica de que la medici&oacute;n de
    largo plazo importa al campo que usted representa.
  </p>
</aside>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Por qu&eacute; avalar</div>
  <h2>La medici&oacute;n de largo plazo se&ntilde;ala demanda</h2>
</div>

<p>{{ campaign.why_es }}</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Avales</div>
  <h2><span class="font-osf">{{ sig_count }}</span> hasta hoy</h2>
  <p class="lede">
    Las firmas de investigadores se verifican por dominio de
    afiliaci&oacute;n u ORCID; las firmas de fundaciones y de
    funcionarios se verifican contra contacto institucional.
  </p>
</div>

{% include signature-wall.html signatures=sigs lang="es" %}

{% include sign-form.html
   campaign_id=campaign.id
   recipient=site.data.campaigns.site_recipient_email
   repo=site.data.campaigns.github_repo
   gh_labels=campaign.github_issue_labels
   lang="es"
   title="Sume su aval"
   lede="Para investigadores, personal de J-PAL/IPA, oficiales de fundaciones y l&iacute;deres de programas multilaterales. Ocho campos y dos formas de enviar." %}

<div class="signal-panel signal-panel--research reveal">
  <div class="eyebrow">Campa&ntilde;a hermana</div>
  <p>
    Si usted es un actor dominicano &mdash; funcionario del
    ministerio, director de escuela, orientador, padre/madre, o
    egresado/a de la cohorte original &mdash; la
    <a href="/es/sumate/">carta abierta al MINERD</a> es la
    mejor opci&oacute;n. Puede firmar ambas si tiene los dos roles.
  </p>
</div>

<p style="text-align:center;margin-top:32px">
  <a class="btn-cta" href="#sign-form-follow-up-pledge-section">Sumar mi aval</a>
  <a class="btn-cta btn-cta--ghost" href="/es/avale/carta/" style="margin-left: 12px;">Versi&oacute;n imprimible</a>
  <a class="btn-cta btn-cta--ghost" href="/campaigns/support-the-follow-up/" style="margin-left: 12px;" hreflang="en">English version</a>
</p>
