# `extensionSubject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `shared/media/attachment-summary.ts` · [Module README](../../../../../modules/shared/media/attachment-summary-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541869-541881](../../../../../../reference/runtime/host-main.cjs#L541869-L541881) | `FunctionDeclaration` | no | `source` |
| [evaluation:480885-480897](../../../../../../reference/runtime/sand-eval-runner.cjs#L480885-L480897) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541869-541881](../../../../../../reference/runtime/host-main.cjs#L541869-L541881) | 0 | 0 | 0 | 3 | 0 | 2 |
| [evaluation:480885-480897](../../../../../../reference/runtime/sand-eval-runner.cjs#L480885-L480897) | 0 | 0 | 0 | 3 | 0 | 2 |

### host:541869

Calls written directly in this body: `decodeURIComponent`, `new URL`.

Assignment or increment targets: `pathname`.

SHA-256 of the source span: `8feae3f9c7489f0b7a0a0307fdd2234f1e038d63b1bc0063a053bd937d1374f0`.

### evaluation:480885

Calls written directly in this body: `decodeURIComponent`, `new URL`.

Assignment or increment targets: `pathname`.

SHA-256 of the source span: `8feae3f9c7489f0b7a0a0307fdd2234f1e038d63b1bc0063a053bd937d1374f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
