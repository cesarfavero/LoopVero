# `stripLeadingSandTurnAssemblyNotes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491207-491214](../../../../../../reference/runtime/host-main.cjs#L491207-L491214) | `FunctionDeclaration` | no | `text3` |
| [evaluation:526125-526132](../../../../../../reference/runtime/sand-eval-runner.cjs#L526125-L526132) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491207-491214](../../../../../../reference/runtime/host-main.cjs#L491207-L491214) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:526125-526132](../../../../../../reference/runtime/sand-eval-runner.cjs#L526125-L526132) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:491207

Calls written directly in this body: `stripOneLeadingNote`.

Assignment or increment targets: `body`.

SHA-256 of the source span: `3212f5c71303cf9a267a086ad7e37a44de50560128ec3ef157e51d2a39961120`.

### evaluation:526125

Calls written directly in this body: `stripOneLeadingNote`.

Assignment or increment targets: `body`.

SHA-256 of the source span: `3212f5c71303cf9a267a086ad7e37a44de50560128ec3ef157e51d2a39961120`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
