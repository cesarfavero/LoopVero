# `truncateMiddle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/context-stripping.js` · [Module README](../../../../modules/agent-transcript/context-stripping-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509559-509566](../../../../../reference/runtime/host-main.cjs#L509559-L509566) | `FunctionDeclaration` | no | `text3, maxChars` |
| [evaluation:294737-294744](../../../../../reference/runtime/sand-eval-runner.cjs#L294737-L294744) | `FunctionDeclaration` | no | `text3, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509559-509566](../../../../../reference/runtime/host-main.cjs#L509559-L509566) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:294737-294744](../../../../../reference/runtime/sand-eval-runner.cjs#L294737-L294744) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:509559

Calls written directly in this body: `Math.floor`, `Math.max`, `sliceHeadSafe`, `sliceTailSafe`.

SHA-256 of the source span: `31085f63c2d58fcdb85b8820d331213ad16c300378919bd1d53307c1de87c06c`.

### evaluation:294737

Calls written directly in this body: `Math.floor`, `Math.max`, `sliceHeadSafe`, `sliceTailSafe`.

SHA-256 of the source span: `31085f63c2d58fcdb85b8820d331213ad16c300378919bd1d53307c1de87c06c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
