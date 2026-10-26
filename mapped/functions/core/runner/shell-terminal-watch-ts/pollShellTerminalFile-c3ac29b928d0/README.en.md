# `pollShellTerminalFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/shell-terminal-watch.ts` · [Module README](../../../../../modules/core/runner/shell-terminal-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533304-533345](../../../../../../reference/runtime/sand-eval-runner.cjs#L533304-L533345) | `FunctionDeclaration` | yes | `host, id, isCancelled, settle2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533304-533345](../../../../../../reference/runtime/sand-eval-runner.cjs#L533304-L533345) | 3 | 0 | 1 | 1 | 0 | 0 |

### evaluation:533304

Calls written directly in this body: `Date.now`, `awaitShellTerminalOutcome`, `boxTerminalsFolder`, `pinFirstSourceWithFile`, `settle2`, `shellCompletionForOutcome`.

SHA-256 of the source span: `925749bff366672186b6821a242062355e87305e1303f6d3fa2709bed98f2faa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
