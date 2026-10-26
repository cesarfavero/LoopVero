# `normalizeAgentSingleMessageLoopDetection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624572-624577](../../../../../../reference/runtime/host-main.cjs#L624572-L624577) | `FunctionDeclaration` | no | `detection` |
| [evaluation:310704-310709](../../../../../../reference/runtime/sand-eval-runner.cjs#L310704-L310709) | `FunctionDeclaration` | no | `detection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624572-624577](../../../../../../reference/runtime/host-main.cjs#L624572-L624577) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:310704-310709](../../../../../../reference/runtime/sand-eval-runner.cjs#L310704-L310709) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:624572

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a5bdeab383edd7671bc0ab235a3c75507a136b176378b78927f2cf35d9670ac2`.

### evaluation:310704

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a5bdeab383edd7671bc0ab235a3c75507a136b176378b78927f2cf35d9670ac2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
