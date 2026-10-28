<div align="center">

# AI Knowledge Base

**English** · [Русский](README.ru.md)

### From first questions to technical foundations.

Russian-language learning notes · Four difficulty levels · A searchable VuePress site

![VuePress](https://img.shields.io/badge/VuePress-1-9ece6a?style=flat-square)
![Markdown](https://img.shields.io/badge/content-Markdown-7aa2f7?style=flat-square)
[![Read online](https://img.shields.io/badge/read-GitHub_Pages-bb9af7?style=flat-square)](https://igorkramar.github.io/aikb/)

[Read online](https://igorkramar.github.io/aikb/) · [Contents](../index.md) · [Run locally](#run-locally) · [Publishing](#publishing)

</div>

A collection of learning cards about artificial intelligence, language models, prompting, agents and the tools around them. Start with everyday examples, then follow the links into technical topics.

**The articles are in Russian.** This English README explains how to navigate and run the project; it is not a translation of the entire knowledge base. Notes describe a changing field and should be checked against current product documentation before practical use.

## Choose a starting point

| Level | Reader | Start here |
|:---|:---|:---|
| **0 · Discover** | First encounter with the subject | [What is AI?](../topics/what-is-ai.md) |
| **1 · Try** | Ready to work with a model | [Prompting basics](../topics/prompting-basics.md) |
| **2 · Connect** | Exploring workflows and tools | [RAG](../topics/rag-basics.md) · [Agents](../topics/agents-intro.md) |
| **3 · Build** | Interested in implementation | [Embeddings](../topics/embeddings.md) · [Fine-tuning](../topics/fine-tuning.md) |

Browse the [topic index](../index.md), [learning cards](../topics/), [tool notes](../tools/) and [reference lists](../lists/). The source currently contains 53 topic files and 9 tool files; these are content counts, not a claim of course completeness.

## Run locally

The existing deployment workflow uses Node.js 18 and VuePress 1. Use the lockfile for reproducible dependency installation. This is the project's existing toolchain, not a recommendation to use an old Node release for new projects.

```sh
git clone https://github.com/IgorKramar/aikb.git
cd aikb
npm ci
npm run docs:dev
```

Open `http://localhost:8080/aikb/`. To generate the static site:

```sh
npm run docs:build
```

Output goes to `.vuepress/dist/`. The base URL is set to `/aikb/` in [`.vuepress/config.js`](../.vuepress/config.js); change it when publishing under another repository path.

## Publishing

The [existing workflow](../.github/workflows/deploy.yml) builds on pushes to `main` or `master` and publishes the result to the `gh-pages` branch. GitHub Pages must use **Deploy from a branch → gh-pages → / (root)**. The workflow expects the repository secret `PERSONAL_TOKEN`; do not put credentials in source files.

The existing `npm run deploy` command also builds and publishes through `gh-pages`. It changes the published site and requires write access. See [deployment instructions (RU)](../DEPLOY.md), [quick start (RU)](../QUICKSTART.md) and [troubleshooting (RU)](../TROUBLESHOOTING.md).

## Contribute

Corrections, clearer examples and updated links are welcome. Edit the relevant Markdown card, update the index or sidebar if needed, then check the rendered page with the local server. Keep examples appropriate to the stated difficulty level.

## License

The package declares MIT in [`package.json`](../package.json). This checkout has no standalone license file. Third-party names and linked materials retain their respective rights.
