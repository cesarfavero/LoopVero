# LoopVero · Static research tools

[English](README.en.md) · [Português (Brasil)](README.md)

These tools generate and verify the map from the reference files already in the repository. They include no steps for obtaining references, do not import the bundles, and do not start harness services.

## Requirements

- Node.js 22 or later for the analysis script.
- Acorn 8.18.0, pinned in this directory's lockfile.
- Python 3.10 or later for rendering and verification.
- A checkout containing the originals under `reference/`.

## Generation

```bash
npm ci --prefix tools/research --ignore-scripts
node --expose-gc --max-old-space-size=4096 tools/research/index-harness.cjs
python3 tools/research/render-catalog.py
```

The indexer reads the ASTs of the three core bundles. The renderer generates both Portuguese `README.md` and English `README.en.md` pages by default. It updates generated pages under `mapped/modules/` and `mapped/functions/`, the catalog entry points, and the existing inventories. It prunes obsolete generated pages only for the language being rendered. Manually written explanations live under `guide/` and are not overwritten. Identical UTF-8 output is not rewritten.

To refresh only one language from the existing inventories:

```bash
python3 tools/research/render-catalog.py --language en
python3 tools/research/render-catalog.py --language pt-BR
```

English-only rendering leaves Portuguese pages and the existing inventories untouched. Rendering Portuguese leaves English pages in place. Both languages use the same AST facts, source paths, line anchors, hashes, and function identities. The inventory schema and its original page paths remain unchanged.

## Language convention

The root `README.md` is the English entry point. Existing Portuguese guides keep their paths and contents; each English guide is a sibling named `README.en.md`. English reading links stay within the English documentation, and each English page links to its Portuguese original. Root introductions in Portuguese, Spanish, and Chinese retain their existing files.

Translate explanations, headings, tables, and diagram labels. Preserve exact source identifiers, literal values, commands, source paths, and line anchors. An absent implementation must remain absent in the translation; a static observation must not become a claim about production behavior.

## Verification

```bash
python3 tools/research/verify-reference.py
```

The default mode requires every original in the manifest. For an analysis checkout containing only some originals:

```bash
python3 tools/research/verify-reference.py --available
```

In that case, the report distinguishes verified files from files that were not downloaded. This option does not allow a partial checkout to be presented as a complete byte-level verification. Correspondence with the entire Git tree can be checked separately using the blob SHAs in the manifest.

## Script contracts

| Script | Input | Output | Effect on originals |
| --- | --- | --- | --- |
| `index-harness.cjs` | Three bundles as text | AST inventories, metrics, and hashes | Read only |
| `render-catalog.py` | Inventories and optional language selection | Module and function READMEs in both languages | None |
| `verify-reference.py` | Manifest, originals, and documentation | Hash and link report | Read only |

The parser preserves LF line numbering and does not use a regular-expression heuristic to count functions. Recorded calls remain syntactic references without dynamic resolution. [Complete method](../../guide/methodology/README.en.md).
