---
title: The research team
description: "The four principal investigators behind AVE-RD, plus the project staff in Santo Domingo who run the field operation."
eyebrow: "The team · 4 principal investigators"
layout: page
order: 2
hero-style: gradient
---

<p class="dropcap">
  AVE-RD is a four-author study with a country team in Santo Domingo. The
  principal investigators designed the experiment and write the analysis;
  the country team runs the field operation, the call centre, the survey
  panel, and the day-to-day relationship with the Ministry of Education.
  The follow-up wave keeps the same architecture &mdash; same authors,
  same country team &mdash; extended ten years.
</p>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Principal investigators</div>
  <h2>Four authors, one study</h2>
  <p class="lede">
    Each PI owns one corner of the design: belief elicitation, persuasion,
    country implementation, and the link to administrative earnings data.
  </p>
</div>

<ul class="person-grid person-grid--four reveal">
  {% for pi in site.data.researchers.pis %}
  <li>
    <article class="person-card" itemscope itemtype="https://schema.org/Person">
      <meta itemprop="affiliation" content="{{ pi.affiliation | strip_html }}" />
      <div class="person-card__portrait{% unless pi.photo and pi.photo != "" %} person-card__portrait--initials{% endunless %}">
        {% if pi.photo and pi.photo != "" %}
        <img src="{{ pi.photo }}" alt="Portrait of {{ pi.name }}" loading="lazy" itemprop="image" />
        {% else %}
        <span aria-hidden="true">{{ pi.initials }}</span>
        {% endif %}
      </div>
      <div class="person-card__body">
        <span class="person-card__role">{{ pi.role }}</span>
        <h3 class="person-card__name" itemprop="name">{{ pi.name }}</h3>
        <p class="person-card__affiliation">
          <a href="{{ pi.affiliation_url }}" itemprop="worksFor">{{ pi.affiliation }}</a>
        </p>
        <p class="person-card__bio" itemprop="description">{{ pi.bio }}</p>

        {% if pi.fields %}
        <p style="margin: 0 0 16px;">
          {% for f in pi.fields %}<span class="badge badge--neutral">{{ f }}</span>{% unless forloop.last %} {% endunless %}{% endfor %}
        </p>
        {% endif %}

        <ul class="person-card__links" aria-label="External links for {{ pi.name }}">
          {% for link in pi.links %}
          <li><a href="{{ link.url }}" itemprop="url" rel="noopener">{{ link.label }}</a></li>
          {% endfor %}
        </ul>
      </div>
    </article>
  </li>
  {% endfor %}
</ul>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Country team</div>
  <h2>The Santo Domingo operation</h2>
  <p class="lede">
    The follow-up wave runs out of the project office on Mahatma Gandhi
    Street. A small standing team coordinates with MINERD's Department of
    Orientation and Psychology and the 18 regional DOP coordinators.
  </p>
</div>

<dl class="roster reveal">
  {% for s in site.data.researchers.staff %}
  <div>
    <dt class="roster__name">{{ s.name }}<span class="roster__role">{{ s.role }}</span></dt>
    <dd style="margin: 4px 0 0;">{{ s.note }}</dd>
  </div>
  {% endfor %}
</dl>

<div class="section-header reveal">
  <div class="eyebrow eyebrow--rule">Working with us</div>
  <h2>Co-authorship, replication, and visiting fellowships</h2>
</div>

<p>
  We work with three categories of external collaborator: <strong>research
  co-authors</strong> on the follow-up panel, <strong>replication teams</strong>
  adapting the videos and instruments to a new country, and
  <strong>visiting fellows</strong> from ministries of education spending
  three to six months embedded with the country team. All three are
  routed through the project email below.
</p>

<p style="text-align:center;margin-top:24px">
  <a class="partner-card__link" href="/projects/contact/">Write to the team</a>
</p>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {% for pi in site.data.researchers.pis %}
    {
      "@type": "Person",
      "@id": "{{ site.url }}/projects/researchers/#{{ pi.id }}",
      "name": "{{ pi.name | strip_html }}",
      "jobTitle": "{{ pi.role | strip_html }}",
      "affiliation": {
        "@type": "Organization",
        "name": "{{ pi.affiliation | strip_html }}",
        "url": "{{ pi.affiliation_url }}"
      },
      "url": "{% if pi.links and pi.links.size > 0 %}{{ pi.links[0].url }}{% else %}{{ site.url }}/projects/researchers/{% endif %}",
      "sameAs": [
        {% for link in pi.links %}"{{ link.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}
      ],
      "knowsAbout": [
        {% for f in pi.fields %}"{{ f }}"{% unless forloop.last %},{% endunless %}{% endfor %}
      ],
      "memberOf": {
        "@type": "ResearchProject",
        "@id": "{{ site.url }}/#project",
        "name": "AVE-RD — Aprendiendo el Valor de la Educación"
      }
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
</script>
