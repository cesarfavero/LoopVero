# `withSiteVisitTracking/record`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/site-visit-tracking.ts` · [Module README](../../../../../modules/core/runner/site-visit-tracking-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484116-484133](../../../../../../reference/runtime/sand-eval-runner.cjs#L484116-L484133) | `ArrowFunctionExpression` | no | `record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484116-484133](../../../../../../reference/runtime/sand-eval-runner.cjs#L484116-L484133) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:484116

Calls written directly in this body: `URL.canParse`, `auditor.record`, `boundedSiteBucket`, `lookupSigned`, `lookupWallEpisode`, `new URL`, `onVisit`, `siteSectionForUrl`.

SHA-256 of the source span: `b75a4a1937a197fc748e9aee40a7b7cca4b17901259d50d47f298ac416d9a1db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
