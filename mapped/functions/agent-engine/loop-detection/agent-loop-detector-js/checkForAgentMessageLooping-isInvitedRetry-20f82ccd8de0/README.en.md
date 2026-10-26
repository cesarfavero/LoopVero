# `checkForAgentMessageLooping/isInvitedRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:311258-311260](../../../../../../reference/runtime/sand-eval-runner.cjs#L311258-L311260) | `FunctionDeclaration` | no | `msg` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311258-311260](../../../../../../reference/runtime/sand-eval-runner.cjs#L311258-L311260) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:311258

Calls written directly in this body: `msg.toolResultTexts.some`.

SHA-256 of the source span: `8b2be3f2a45bf11712c46604c0772e7557c7874f104a242b3d39490ec1dc5a99`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
