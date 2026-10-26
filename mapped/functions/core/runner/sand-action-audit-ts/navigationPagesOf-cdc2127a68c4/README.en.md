# `navigationPagesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512652-512664](../../../../../../reference/runtime/sand-eval-runner.cjs#L512652-L512664) | `FunctionDeclaration` | no | `stdout` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512652-512664](../../../../../../reference/runtime/sand-eval-runner.cjs#L512652-L512664) | 6 | 1 | 0 | 1 | 0 | 0 |

### evaluation:512652

Calls written directly in this body: `botBlockTextProbeTarget`, `normalizeNavigationUrl`, `pages.push`, `parseNavigationProbeOutput`.

SHA-256 of the source span: `e9300c11c61d24f71a4f05b09c392b016567536912b0e3b7dbdb29deb0ac19ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
