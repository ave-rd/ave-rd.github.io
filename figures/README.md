# Figures

Headline charts as embeddable assets. SVG is preferred (sharp at any zoom,
small file size); PNG at 2× density is acceptable.

## Expected files

| File | What it shows | Source |
|---|---|---|
| `fig01_dropout_effect.svg` | Dropout rate, treatment vs control, 8th grade with one-year lag | Working paper Table X / Fig X |
| `fig02_test_score_effect.svg` | Pruebas Nacionales scores, three-arm comparison, by baseline decile | Working paper Table X |
| `fig03_belief_shift.svg` | Pre vs post beliefs about wage returns to schooling | Working paper Fig X |
| `fig04_three_arm_design.svg` | Study design: persuasive / informative / control | Working paper Fig 1 |

## Captions

Each figure deserves a one-paragraph caption (effect size, confidence
interval, sample, source paragraph). Captions live in
`_data/figures.yml`, keyed by filename, and are rendered by the
findings page.
