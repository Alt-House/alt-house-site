# alt-house-site


## Start code

```bash
bundle exec jekyll serve --baseurl= --livereload
```
[http://localhost:4000](http://localhost:4000)

Clear cache if connection reset
```
rm -rf .jekyll-cache _site
```

# Development Information

Built with Jekyll and hosted on GitHub Pages (served directly from the `gh-pages` branch).

## Project structure

- `_work/` — Jekyll collection for work/portfolio pages
- `_landing-page/` — Jekyll collection for landing pages
- `_layouts/`, `_includes/` — templates and partials
- `scss/`, `css/` — styles (Sass, compiled via Jekyll)
- `_config.yml` — Jekyll site configuration
## Prerequisites

- Ruby (matching the version GitHub Pages uses — see the [github-pages gem](https://pages.github.com/versions/))
- [Bundler](https://bundler.io/) (`gem install bundler`)

## Initial Setup

```bash
bundle install
```

## Running locally

```bash
bundle exec jekyll serve --baseurl=
```

Then open [http://localhost:4000](http://localhost:4000). The site rebuilds automatically as you edit files (`--livereload` for auto browser refresh):

```bash
bundle exec jekyll serve --baseurl= --livereload
```

## Deploying

The site is published from the `gh-pages` branch. Commit and push changes to `gh-pages` to publish them live.
