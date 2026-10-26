# `stashSummarizationResultWhenOrphaned`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647910-647987](../../../../../reference/runtime/host-main.cjs#L647910-L647987) | `FunctionDeclaration` | no | `args` |
| [evaluation:439567-439644](../../../../../reference/runtime/sand-eval-runner.cjs#L439567-L439644) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647910-647987](../../../../../reference/runtime/host-main.cjs#L647910-L647987) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:439567-439644](../../../../../reference/runtime/sand-eval-runner.cjs#L439567-L439644) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:647910

Calls written directly in this body: `.catch`, `Date.now`, `args.summarizationPromise.then`.

Assignment or increment targets: `args.cancellationToken.onCancelled`.

SHA-256 of the source span: `f1e0946a39668dbe5d456f2d9f30fbaa09e5a429320e95fc66a9fe28f2bc81a3`.

### evaluation:439567

Calls written directly in this body: `.catch`, `Date.now`, `args.summarizationPromise.then`.

Assignment or increment targets: `args.cancellationToken.onCancelled`.

SHA-256 of the source span: `4c7f26b7b37950ba810c88a856b0622f23f01cf9637a94799da3fabffea82eb2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
