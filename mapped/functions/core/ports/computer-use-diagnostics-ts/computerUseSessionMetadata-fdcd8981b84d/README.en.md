# `computerUseSessionMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/ports/computer-use-diagnostics.ts` · [Module README](../../../../../modules/core/ports/computer-use-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:514580-514609](../../../../../../reference/runtime/sand-eval-runner.cjs#L514580-L514609) | `FunctionDeclaration` | no | `report, harness, outcome, abortReason2, durationMs, servedModel, runCode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:514580-514609](../../../../../../reference/runtime/sand-eval-runner.cjs#L514580-L514609) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:514580

Calls written directly in this body: `Math.max`, `Math.min`, `Math.round`, `String`, `codeModeLabel`, `computerUseDispatchMetadata`, `requestSource.trim`, `runCodeAttended`, `servedModel.trim`.

SHA-256 of the source span: `edd84eb32d46758bb8e3f5ec6ea1e9ee1d686d93239c49d89a229804a38ba522`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
