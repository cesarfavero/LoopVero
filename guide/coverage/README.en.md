# Coverage and validation

[English](README.en.md) · [Português (Brasil)](README.md)

## Material scope

The manifest preserves **1,070 original files**, with the same bytes, sizes, and Git modes as snapshot `655acca99bff0d17466547611108f94ed6a8a5e7`. The structure was reorganized under `reference/`. Two Finder metadata files and one empty placeholder were omitted.

The reconstructed application, its UI components, tests, styles, assets, and product manifests were removed from the current tree. Git history remains as an earlier reference; no commits were rewritten.

## Detailed static analysis

| Core artifact | Size | LF lines | Role |
| --- | ---: | ---: | --- |
| Host | 30,340,895 bytes | 787,382 | Gateway, proxy, extensions, and state |
| Evaluation runner | 23,930,881 bytes | 631,084 | Implementations of the loop, session, tools, and subagents |
| State worker | 783,772 bytes | See the inventory | Persistence and worker protocol |

Reproducible counts and hashes are in [analysis.json](../../mapped/inventory/analysis.json). The catalog selects **1,466 modules**, **19,741 named-function occurrences**, and **14,935 groups by module/qualified name**, each with its own README. Every module also has a README.

Source comments and the AST preserve the exact connection between symbol, bundle, and lines. Manual analysis examines **25 components** and **36 core functions** in depth. The automatic reference pages provide a complete navigation layer for the selected scope; they do not claim that the individual semantics of thousands of functions were manually validated.

## What was verified

- Original blob correspondence by size and Git SHA-1 in the manifest.
- SHA-256 and line counts for the three core bundles used in AST analysis.
- Presence of generated READMEs and consistency of their indexes.
- Relative documentation links and line ranges in core sources.
- Separation of the host, evaluation runner, worker, and remote boundaries.
- Consistency of the main findings through independent review of the code and guide.

The [verify-reference.py](../../tools/research/verify-reference.py) script reproduces local checks. In a partial checkout, `--available` explicitly reports how many originals were verified and how many were not downloaded. The complete manifest can be compared against the remote Git tree without opening or executing binary files.

## What was not claimed

No bundles were executed, no original inference calls or service logins were made, and no production observation or backend reconstruction took place. The collection does not include the complete implementation of the initial opportunity selector or prove Dream's remote orchestration. The reorganized references are static evidence, not an installable distribution of the program.

[Method and limitations](../methodology/README.en.md) · [Findings](../findings/README.en.md) · [Guide](../README.en.md)
