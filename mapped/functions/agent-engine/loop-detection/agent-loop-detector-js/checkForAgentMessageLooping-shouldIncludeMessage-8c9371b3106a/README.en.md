# `checkForAgentMessageLooping/shouldIncludeMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:311250-311257](../../../../../../reference/runtime/sand-eval-runner.cjs#L311250-L311257) | `FunctionDeclaration` | no | `text3, hasTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311250-311257](../../../../../../reference/runtime/sand-eval-runner.cjs#L311250-L311257) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:311250

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `86d4dcb33bc06842029b263486c67b561817b42388d96796eb9fb4b598ffebc0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
