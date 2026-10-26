# `sliceTailSafe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/context-stripping.js` · [Module README](../../../../modules/agent-transcript/context-stripping-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509541-509558](../../../../../reference/runtime/host-main.cjs#L509541-L509558) | `FunctionDeclaration` | no | `text3, maxUnits` |
| [evaluation:294719-294736](../../../../../reference/runtime/sand-eval-runner.cjs#L294719-L294736) | `FunctionDeclaration` | no | `text3, maxUnits` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509541-509558](../../../../../reference/runtime/host-main.cjs#L509541-L509558) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:294719-294736](../../../../../reference/runtime/sand-eval-runner.cjs#L294719-L294736) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:509541

Calls written directly in this body: `.containing`, `graphemeSegmenter.segment`, `isLowSurrogate`, `text3.charCodeAt`, `text3.slice`.

SHA-256 of the source span: `1c1701e14d7cd94b963857ca6f4648a63b2d51cc49f62fdca3623b0d13223d49`.

### evaluation:294719

Calls written directly in this body: `.containing`, `graphemeSegmenter.segment`, `isLowSurrogate2`, `text3.charCodeAt`, `text3.slice`.

SHA-256 of the source span: `f290a4ac5b0bf4293f4b2dbc949fda0782ea3cabe3ce4010142ebc07785852c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
