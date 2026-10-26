# `getAgentSingleMessageLoopInfo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624656-624669](../../../../../../reference/runtime/host-main.cjs#L624656-L624669) | `FunctionDeclaration` | no | `detector, channel` |
| [evaluation:311023-311036](../../../../../../reference/runtime/sand-eval-runner.cjs#L311023-L311036) | `FunctionDeclaration` | no | `detector, channel` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624656-624669](../../../../../../reference/runtime/host-main.cjs#L624656-L624669) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:311023-311036](../../../../../../reference/runtime/sand-eval-runner.cjs#L311023-L311036) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:624656

Calls written directly in this body: `detector.getMultiLineLoopInfo`, `detector.getSingleLineLoopInfo`.

SHA-256 of the source span: `fac9377945d22e670315d2b4af9a5d8b8e1d81240643ea9b942efdbde570e0aa`.

### evaluation:311023

Calls written directly in this body: `detector.getMultiLineLoopInfo`, `detector.getSingleLineLoopInfo`.

SHA-256 of the source span: `fac9377945d22e670315d2b4af9a5d8b8e1d81240643ea9b942efdbde570e0aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
