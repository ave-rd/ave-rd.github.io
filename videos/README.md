# Videos

The AVE-RD intervention is a series of short videos shown to students in
classrooms. Two arms:

- **Persuasive** — narrative, eighth-grade characters considering future
  schooling decisions, qualitative discussion of the benefits of more
  education plus information about scholarships.
- **Informative / Statistical** — the same four videos plus added segments
  with quantitative wage data by schooling level.

Videos are hosted on the project's YouTube channel. The catalog
(`_data/videos.yml`) is the source of truth — the Videos page renders from it.

## Catalog file format (`_data/videos.yml`)

```yaml
- id: 1G-2CeXbr7I            # YouTube video ID
  arm: persuasive            # persuasive | informative | both
  episode: 1                 # ordinal in the series
  title: "Episode 1 — title"
  description: One-line description.
  duration: "15:00"
  language: es
  playlist: PLoHTHS27BGgzGvx9PpKYiweKnyXZV95dd  # optional
```

## Use license

For use in research replications and authorized classroom screenings,
contact the project team — see `/projects/contact/`.
