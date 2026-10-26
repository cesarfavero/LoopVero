# `stripSpotlightTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/spotlight/sand-spotlight.ts` · [Module README](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761627-761629](../../../../../../reference/runtime/host-main.cjs#L761627-L761629) | `FunctionDeclaration` | no | `text3` |
| [evaluation:552442-552444](../../../../../../reference/runtime/sand-eval-runner.cjs#L552442-L552444) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761627-761629](../../../../../../reference/runtime/host-main.cjs#L761627-L761629) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552442-552444](../../../../../../reference/runtime/sand-eval-runner.cjs#L552442-L552444) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761627

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `3637a4fdb0e821ff126bfa1d0e7014192a1e57ff7820b060c5e2d077f1364a6a`.

### evaluation:552442

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `3637a4fdb0e821ff126bfa1d0e7014192a1e57ff7820b060c5e2d077f1364a6a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
