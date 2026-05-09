---
title: Sume su voz
description: "Dos campañas paralelas de firmas: una carta abierta dominicana al MINERD pidiendo que la política AVE continúe, y un aval internacional a la evaluación de seguimiento de largo plazo."
eyebrow: "Campañas · 2 cartas, 4 categorías"
layout: page
permalink: /es/voz/
order: 7
lang: es
alt_url: /projects/campaigns/
hero-style: gradient
seo:
  type: WebPage
---

<p class="dropcap">
  AVE-RD est&aacute; en manos de dos audiencias en este momento.
  Los ministros, coordinadores regionales, directores de escuela y
  padres dominicanos deciden si el programa contin&uacute;a a
  cobertura completa. Las fundaciones, los donantes bilaterales,
  los multilaterales y la comunidad internacional de
  investigaci&oacute;n deciden si la evaluaci&oacute;n de
  seguimiento de largo plazo recibe financiamiento. Ambas
  decisiones se mueven con respaldo p&uacute;blico. Esta
  p&aacute;gina es donde ese respaldo vive.
</p>

<dl class="stat-strip reveal">
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Cartas abiertas</dt>
    <dd class="stat-strip__value">2</dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Categor&iacute;as</dt>
    <dd class="stat-strip__value">4</dd>
  </div>
  {% assign continue_count = site.data.signatures.continue_policy | size %}
  {% assign pledge_count = site.data.signatures.follow_up_pledge | size %}
  {% assign total_count = continue_count | plus: pledge_count %}
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Firmas verificadas</dt>
    <dd class="stat-strip__value"><span class="font-osf">{{ total_count }}</span></dd>
  </div>
  <div class="stat-strip__item">
    <dt class="stat-strip__label">Idiomas</dt>
    <dd class="stat-strip__value">ES&nbsp;·&nbsp;EN</dd>
  </div>
</dl>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Elija la campa&ntilde;a que le corresponde</div>
  <h2>Dos cartas, dos audiencias</h2>
  <p class="lede">
    Cada campa&ntilde;a se dirige a un destinatario espec&iacute;fico
    para una decisi&oacute;n espec&iacute;fica. Firme la que coincida
    con su rol &mdash; o ambas, si tiene los dos roles.
  </p>
</div>

<ul class="brief-grid reveal">
  {% for c in site.data.campaigns.campaigns %}
  {% if c.id == 'continue-policy' %}
    {% assign sigs = site.data.signatures.continue_policy %}
    {% assign es_url = "/es/sumate/" %}
  {% else %}
    {% assign sigs = site.data.signatures.follow_up_pledge %}
    {% assign es_url = "/es/avale/" %}
  {% endif %}
  <li>
    <article class="brief-card">
      <div class="brief-card__meta">
        <span class="brief-card__audience">{{ c.flag }} &nbsp; {{ c.audience }}</span>
        <span class="dot">&middot;</span>
        <span><span class="font-osf">{{ sigs | size }}</span>&nbsp;firmas</span>
      </div>
      <h3 class="brief-card__title">
        <a href="{{ es_url }}">{{ c.title_es }}</a>
      </h3>
      <p class="brief-card__lede">
        Dirigida a: {{ c.recipient_es }}.
      </p>
      <div class="brief-card__cta">
        <a href="{{ es_url }}">Leer y firmar</a>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">C&oacute;mo manejamos las firmas</div>
  <h2>Verificaci&oacute;n, privacidad, qu&eacute; publicamos</h2>
</div>

<ol class="numbered-list reveal">
  <li>
    <div>
      <h3>Usted completa el formulario en la p&aacute;gina</h3>
      <p>
        Cada p&aacute;gina de campa&ntilde;a tiene un formulario
        propio &mdash; sin proveedor externo, sin necesidad de crear
        cuenta. Pedimos su nombre, rol, instituci&oacute;n,
        pa&iacute;s, categor&iacute;a, un mensaje opcional de hasta
        <span class="font-osf">280</span> caracteres, y un correo de
        contacto que usamos solamente para verificar identidad.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Usted elige el canal de env&iacute;o</h3>
      <p>
        <strong>Firmar por correo</strong> abre su aplicaci&oacute;n
        de correo con los campos estructurados ya completados, dirigido
        a la oficina del proyecto en
        <a href="mailto:proyecto.ave.rd@gmail.com">proyecto.ave.rd@gmail.com</a>.
        Universal &mdash; funciona en cualquier dispositivo, sin
        necesidad de cuenta.
        <br /><br />
        <strong>Abrir como issue de GitHub</strong> abre un issue
        precompletado en este repositorio etiquetado con
        <code>signature</code> + el identificador de la
        campa&ntilde;a. Cada firma queda como un registro auditable
        propio. Recomendado para investigadores y funcionarios que
        ya tengan cuenta de GitHub.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>La oficina del proyecto verifica</h3>
      <p>
        Las firmas de funcionarios y educadores se verifican contra
        contacto institucional; las firmas de investigadores se
        verifican por dominio de afiliaci&oacute;n u ORCID; las
        firmas comunitarias (padres, egresados, estudiantes) se
        verifican por respuesta al correo de contacto y una
        revisi&oacute;n de moderaci&oacute;n ligera. No publicamos
        ninguna entrada hasta estar razonablemente seguros de que el
        firmante es quien dice ser.
      </p>
    </div>
  </li>
  <li>
    <div>
      <h3>Las firmas aprobadas aparecen en la p&aacute;gina de campa&ntilde;a</h3>
      <p>
        Una vez verificada, el equipo agrega la entrada en
        <code>_data/signatures.yml</code> en este repositorio
        &mdash; manualmente o a trav&eacute;s de una sesi&oacute;n
        de Claude Code &mdash; y el sitio se reconstruye. Publicamos
        su nombre, rol, instituci&oacute;n, pa&iacute;s y el mensaje
        que usted escribi&oacute;. Su correo electr&oacute;nico
        nunca se publica ni se comparte. Usted puede solicitar la
        eliminaci&oacute;n de su firma en cualquier momento
        escribiendo a la
        <a href="/projects/contact/">oficina del proyecto</a>.
      </p>
    </div>
  </li>
</ol>

<div class="signal-panel reveal">
  <div class="eyebrow">Nota para firmantes menores de edad</div>
  <p>
    Si usted es egresado/a de AVE-RD o estudiante actual menor de
    <span class="font-osf">18</span> a&ntilde;os, por favor pida a
    un padre/madre o tutor/a que cofirme. No publicamos firmas de
    menores sin consentimiento parental.
  </p>
</div>

<p style="text-align:center;margin-top:32px">
  <a class="btn-cta" href="/es/sumate/">Continuemos la pol&iacute;tica &middot; Carta abierta</a>
  <a class="btn-cta btn-cta--ghost" href="/es/avale/" style="margin-left: 12px;">Avale el seguimiento &middot; Compromiso</a>
</p>
