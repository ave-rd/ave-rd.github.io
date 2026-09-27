---
layout: page
title: "Continuemos la política AVE. Apoyemos la evaluación a largo plazo."
description: "Carta abierta de actores dominicanos al MINERD pidiendo que la intervención AVE continúe a cobertura completa y que la evaluación de seguimiento de largo plazo reciba apoyo institucional."
eyebrow: "Carta abierta · República Dominicana"
permalink: /es/sumate/
hero-style: gradient
lang: es
alt_url: /campaigns/continue-the-policy/
order: 8
seo:
  type: WebPage
---

{% assign campaign = site.data.campaigns.campaigns | where: "id", "continue-policy" | first %}
{% assign sigs = site.data.signatures.continue_policy %}
{% assign sig_count = sigs | size %}

<p style="text-align:center;">
  <span class="signatory-counter" style="background:var(--turquoise-50);border-color:var(--turquoise-300);">
    <span class="signatory-counter__value" style="color:var(--turquoise-700);"><span class="font-osf">{{ sig_count }}</span></span>
    <span class="signatory-counter__label" style="color:var(--turquoise-700);">firmas verificadas &middot; sumando</span>
  </span>
</p>

<p class="dropcap">
  Tras la evaluaci&oacute;n del piloto
  <span class="font-osf">2014&ndash;2017</span>, la intervenci&oacute;n
  AVE &mdash; cuatro videos cortos y un protocolo de aula &mdash; fue
  adoptada como pol&iacute;tica del MINERD y se entrega hoy en
  <strong>todas las escuelas p&uacute;blicas del pa&iacute;s</strong>.
  El seguimiento de largo plazo previsto es el que nos dir&iacute;a si
  el efecto escolar se traduce en ingresos.
  Esta carta, dirigida al Ministerio, pide dos cosas: continuidad de
  la pol&iacute;tica, y apoyo a la evaluaci&oacute;n de largo plazo.
</p>

<aside class="letter-body reveal" aria-labelledby="letter-heading">
  <span class="letter-body__recipient">Para: {{ campaign.recipient_es }}</span>
  <h2 id="letter-heading" style="margin-top:0;">Carta abierta</h2>

  <p>
    Los abajo firmantes escribimos en apoyo a dos decisiones
    relacionadas que enfrenta el Ministerio de Educaci&oacute;n en
    <span class="font-osf">2026</span>.
  </p>

  <p>
    <strong>Primero, continuar la intervenci&oacute;n AVE como
    pol&iacute;tica permanente.</strong> La evaluaci&oacute;n
    2014&ndash;2017, conducida por J-PAL LAC e IDEICE, document&oacute;
    una reducci&oacute;n de
    <span class="font-osf">2.5&ndash;3</span>&nbsp;puntos
    porcentuales en la deserci&oacute;n, un aumento de
    <span class="font-osf">0.05&ndash;0.13</span> desviaciones
    est&aacute;ndar en las Pruebas Nacionales, y un cambio medible
    en las creencias de los estudiantes sobre los retornos salariales
    de la educaci&oacute;n. La intervenci&oacute;n es de bajo costo,
    se entrega a trav&eacute;s de la red existente de la
    Direcci&oacute;n de Orientaci&oacute;n y Psicolog&iacute;a, y
    lleva varios a&ntilde;os como pol&iacute;tica nacional.
    Suspenderla descartar&iacute;a una ganancia de pol&iacute;tica
    p&uacute;blica documentada sin ahorro fiscal alguno.
  </p>

  <p>
    <strong>Segundo, apoyar la evaluaci&oacute;n de seguimiento de
    largo plazo.</strong> Los estudiantes de la evaluaci&oacute;n
    original superan hoy los veinte a&ntilde;os, edad suficiente para
    que los registros administrativos de ingresos muestren si el efecto
    escolar lleg&oacute; al mercado laboral. El seguimiento
    convertir&iacute;a el efecto escolar de corto plazo en la primera
    evidencia de largo plazo
    sobre una campa&ntilde;a informativa basada en video en
    Am&eacute;rica Latina &mdash; un resultado que los ministerios
    de educaci&oacute;n de la regi&oacute;n usar&aacute;n como
    referencia.
  </p>

  <p>
    El seguimiento se apoya directamente en la evaluaci&oacute;n que
    el Ministerio acogi&oacute; en 2015&ndash;2016. Lo que necesita del
    Ministerio es apoyo institucional. Sumamos nuestros nombres abajo.
  </p>
</aside>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Por qu&eacute; firmamos</div>
  <h2>La continuidad es el insumo m&aacute;s barato que tenemos</h2>
</div>

<p>{{ campaign.why_es }}</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Firmantes</div>
  <h2><span class="font-osf">{{ sig_count }}</span> hasta hoy &mdash; agrupados por categor&iacute;a</h2>
  <p class="lede">
    Cada entrada se verifica contra un contacto institucional,
    dominio de afiliaci&oacute;n, o c&oacute;digo de escuela antes de
    publicarse. El proceso de verificaci&oacute;n se detalla en
    <a href="/projects/campaigns/">Su voz</a>.
  </p>
</div>

{% include signature-wall.html signatures=sigs lang="es" %}

{% include sign-form.html
   campaign_id=campaign.id
   recipient=site.data.campaigns.site_recipient_email
   repo=site.data.campaigns.github_repo
   gh_labels=campaign.github_issue_labels
   lang="es"
   title="Sume su firma"
   lede="Ocho campos y un mensaje de apoyo opcional. Dos formas de enviar. Verificamos cada entrada antes de publicarla." %}

<p style="text-align:center;margin-top:32px">
  <a class="btn-cta" href="#sign-form-continue-policy-section">Sumar mi firma</a>
  <a class="btn-cta btn-cta--ghost" href="/es/sumate/carta/" style="margin-left: 12px;">Carta formal imprimible</a>
  <a class="btn-cta btn-cta--ghost" href="/campaigns/continue-the-policy/" style="margin-left: 12px;" hreflang="en">English version</a>
</p>
