---
layout: page
title: Resúmenes de política
description: "Tres resúmenes de dos páginas que destilan los hallazgos de AVE-RD, el caso para la ola de seguimiento, y el manual para ministerios de educación que adaptan el programa."
eyebrow: "Resúmenes · 3 ediciones"
permalink: /es/briefs/
lang: es
alt_url: /projects/briefs/
order: 4
hero-style: gradient
---

<p class="dropcap">
  Los <em>working papers</em> est&aacute;n escritos para economistas.
  La serie de res&uacute;menes es para los dem&aacute;s: ministros de
  educaci&oacute;n evaluando si adaptar la intervenci&oacute;n,
  oficiales de fundaciones decidiendo si financiar el seguimiento, y
  los equipos de J-PAL en otros pa&iacute;ses que necesitan un resumen
  de una sola lectura. Cada res&uacute;men son dos p&aacute;ginas,
  descargable en PDF e indexado como p&aacute;gina HTML para que
  aparezca en b&uacute;squedas.
</p>

<ul class="brief-grid brief-grid--three reveal">
  {% for b in site.data.briefs.briefs %}
  <li>
    <article class="brief-card">
      <div class="brief-card__meta">
        <span class="brief-card__audience">{{ b.audience }}</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ b.pages }}</span>&nbsp;p&aacute;ginas</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ b.date | date: "%b %Y" }}</span></span>
      </div>
      <h3 class="brief-card__title">
        <a href="/briefs/{{ b.slug }}/">{{ b.title }}</a>
      </h3>
      <p class="brief-card__lede">{{ b.lede }}</p>
      <div class="brief-card__cta">
        <a href="/briefs/{{ b.slug }}/">Leer res&uacute;men</a>
        <span class="brief-card__cta-secondary"><a href="{{ b.pdf }}">PDF</a></span>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="signal-panel reveal">
  <div class="eyebrow">Permiso de reuso</div>
  <p>
    Los res&uacute;menes est&aacute;n licenciados bajo
    CC&nbsp;BY&nbsp;4.0. Cite libremente con atribuci&oacute;n al
    proyecto AVE-RD. Para traducciones y nuevas tipografias, por favor
    <a href="/projects/contact/">escriba al equipo</a> para que
    podamos listar su versi&oacute;n en esta p&aacute;gina.
  </p>
</div>

<p style="text-align:center;margin-top:24px;font-size:13px;color:var(--muted-foreground);">
  Las versiones HTML completas de los res&uacute;menes est&aacute;n
  actualmente disponibles en ingl&eacute;s. Las versiones en
  espa&ntilde;ol llegan en los pr&oacute;ximos meses.
</p>
