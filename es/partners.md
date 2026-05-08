---
layout: page
title: Socios
description: "Las cuatro instituciones que diseñaron, financiaron y evaluaron AVE-RD — con los líderes nombrados dentro de cada una que sostienen el trabajo."
eyebrow: "Socios · 4 instituciones"
permalink: /es/partners/
lang: es
alt_url: /projects/partners/
order: 5
hero-style: gradient
---

<p class="dropcap">
  AVE-RD es el trabajo de cuatro instituciones a trav&eacute;s de dos
  pa&iacute;ses: un laboratorio de investigaci&oacute;n, un ministerio
  nacional, una agencia de evaluaci&oacute;n, y un donante
  internacional. Cada uno tom&oacute; una parte del proceso &mdash;
  dise&ntilde;o, entrega, medici&oacute;n, financiamiento &mdash; y el
  piloto alcanz&oacute; <span class="font-osf">200,000</span>
  estudiantes porque las cuatro sostuvieron su esquina. La ola de
  seguimiento mantiene la misma arquitectura de alianza, con un
  &eacute;nfasis nuevo en el acceso de la agencia de evaluaci&oacute;n
  a registros administrativos de ingresos.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dd class="stat-strip__value">4</dd>
    <dt class="stat-strip__label">Socios institucionales</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">2</dd>
    <dt class="stat-strip__label">Pa&iacute;ses (RD y EE.&nbsp;UU.)</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">18</dd>
    <dt class="stat-strip__label">Regiones educativas</dt>
  </div>
  <div class="stat-strip__item">
    <dd class="stat-strip__value">10+</dd>
    <dt class="stat-strip__label">A&ntilde;os de alianza</dt>
  </div>
</dl>

{% for p in site.data.partner_leads.partners %}
<section class="partner-card reveal" id="{{ p.id }}">
  <div class="partner-card__logo">
    <img src="{{ p.logo }}" alt="Logo de {{ p.short }}" loading="lazy" />
  </div>
  <div class="partner-card__body">
    <span class="badge badge--{{ p.role_badge }}">{{ p.role_label }}</span>
    <h3>{{ p.name }}</h3>
    <p>{{ p.description }}</p>

    {% if p.quote %}
    <blockquote class="pullquote">
      &laquo;{{ p.quote.text }}&raquo;
      <span class="pullquote__attrib">&mdash; {{ p.quote.attrib }}</span>
    </blockquote>
    {% endif %}

    {% if p.leads and p.leads.size > 0 %}
    <ul class="roster" aria-label="L&iacute;deres en {{ p.short }}">
      {% for lead in p.leads %}
      <li>
        <span class="roster__name">{{ lead.name }}<span class="roster__role">{{ lead.role }}</span></span>
      </li>
      {% endfor %}
    </ul>
    {% endif %}

    <p style="margin-top: 24px;">
      <a class="partner-card__link" href="{{ p.url }}" rel="noopener">Visitar {{ p.short }}</a>
    </p>
  </div>
</section>
{% endfor %}

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Aliarse con AVE-RD</div>
  <h2>Lo que buscamos en un nuevo socio</h2>
  <p class="lede">
    La ola de seguimiento est&aacute; abierta a colaboradores de
    investigaci&oacute;n, equipos de replicaci&oacute;n, y donantes
    adicionales. La relaci&oacute;n se estructura alrededor de tres
    entregables.
  </p>
</div>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>Co-autor&iacute;a en un paper o res&uacute;men</h3>
      <p>
        Investigadores se suman al equipo de escritura para un working
        paper o uno de los <a href="/es/briefs/">res&uacute;menes de
        pol&iacute;tica</a>.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Replicar la intervenci&oacute;n en su pa&iacute;s</h3>
      <p>
        Ministerios y oficinas regionales de J-PAL pueden adaptar los
        cuatro videos, la gu&iacute;a de discusi&oacute;n, y el panel
        de encuestas a datos laborales locales.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Financiar la ola de largo plazo</h3>
      <p>
        Fundaciones y donantes bilaterales pueden apoyar l&iacute;neas
        espec&iacute;ficas del presupuesto. Vea
        <a href="/es/follow-up/">Apoyar el seguimiento</a>.
      </p>
    </div>
  </li>
</ol>
