# `cardTextSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/card-text.ts` · [Module README](../../../../../modules/shared/transcript/card-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706899-706901](../../../../../../reference/runtime/host-main.cjs#L706899-L706901) | `FunctionDeclaration` | no | `text3` |
| [evaluation:480996-480998](../../../../../../reference/runtime/sand-eval-runner.cjs#L480996-L480998) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706899-706901](../../../../../../reference/runtime/host-main.cjs#L706899-L706901) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480996-480998](../../../../../../reference/runtime/sand-eval-runner.cjs#L480996-L480998) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706899

Calls written directly in this body: `.replace`, `SITE_LIKE.exec`, `text3.normalize`.

SHA-256 of the source span: `8fd7b2f43750782f71670dabdc0a2219464659dd1a2b0a0f4667b7a1bed8f234`.

### evaluation:480996

Calls written directly in this body: `.replace`, `SITE_LIKE.exec`, `text3.normalize`.

SHA-256 of the source span: `8fd7b2f43750782f71670dabdc0a2219464659dd1a2b0a0f4667b7a1bed8f234`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
