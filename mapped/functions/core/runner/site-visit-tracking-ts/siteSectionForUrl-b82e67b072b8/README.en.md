# `siteSectionForUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/site-visit-tracking.ts` · [Module README](../../../../../modules/core/runner/site-visit-tracking-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454799-454809](../../../../../../reference/runtime/host-main.cjs#L454799-L454809) | `FunctionDeclaration` | no | `url2` |
| [evaluation:484025-484035](../../../../../../reference/runtime/sand-eval-runner.cjs#L484025-L484035) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454799-454809](../../../../../../reference/runtime/host-main.cjs#L454799-L454809) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:484025-484035](../../../../../../reference/runtime/sand-eval-runner.cjs#L484025-L484035) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:454799

Calls written directly in this body: `.replace`, `SITE_SECTIONS_BY_BUCKET.get`, `boundedSiteBucket`, `url2.hostname.toLowerCase`, `url2.pathname.startsWith`.

SHA-256 of the source span: `97109094074960d9485c0f1a44755ca6b7b9b418d37f8f604c43e33b675bc168`.

### evaluation:484025

Calls written directly in this body: `.replace`, `SITE_SECTIONS_BY_BUCKET.get`, `boundedSiteBucket`, `url2.hostname.toLowerCase`, `url2.pathname.startsWith`.

SHA-256 of the source span: `97109094074960d9485c0f1a44755ca6b7b9b418d37f8f604c43e33b675bc168`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
