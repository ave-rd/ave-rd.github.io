# AVE-RD

**Learning the Value of Education in the Dominican Republic (AVE-RD)** is a
pilot public-policy project that evaluates the effect of a video-based
information campaign on the schooling decisions of Dominican students in
grades 7–12.

The pilot is implemented by the Department of Orientation and Psychology of
the Ministry of Education of the Dominican Republic (MINERD) and evaluated by
the Dominican Institute for Evaluation and Research of Educational Quality
(IDEICE) and J-PAL LAC. Funding came from USAID and MINERD.

This repository hosts the project's static website at
<https://ave-rd.github.io>. The site is built with [Jekyll](https://jekyllrb.com/)
and served by GitHub Pages.

## Local development

```sh
bundle install
bundle exec jekyll serve
```

The site will be available at <http://localhost:4000>. Top-navigation order
is controlled by the `order:` front-matter key on each page in `projects/`.
