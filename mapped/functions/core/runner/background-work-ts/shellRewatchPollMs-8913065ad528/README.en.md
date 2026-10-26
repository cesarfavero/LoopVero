# `shellRewatchPollMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590195-590202](../../../../../../reference/runtime/host-main.cjs#L590195-L590202) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:490455-490462](../../../../../../reference/runtime/sand-eval-runner.cjs#L490455-L490462) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590195-590202](../../../../../../reference/runtime/host-main.cjs#L590195-L590202) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:490455-490462](../../../../../../reference/runtime/sand-eval-runner.cjs#L490455-L490462) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:590195

Calls written directly in this body: `Number.isFinite`, `Number.parseInt`, `raw.trim`.

SHA-256 of the source span: `db0cd86005b6aa1f5b5854097d92cf926d4ebf4eb685a11ff45f8180bb146b11`.

### evaluation:490455

Calls written directly in this body: `Number.isFinite`, `Number.parseInt`, `raw.trim`.

SHA-256 of the source span: `1e2084d7bfe29600bf7799da0a7823ce481ab2c6cd44581c165903b285f213fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
