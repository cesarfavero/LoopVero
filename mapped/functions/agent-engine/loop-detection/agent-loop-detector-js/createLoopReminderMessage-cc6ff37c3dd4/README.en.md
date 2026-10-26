# `createLoopReminderMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624761-624775](../../../../../../reference/runtime/host-main.cjs#L624761-L624775) | `FunctionDeclaration` | no | `options2` |
| [evaluation:311397-311411](../../../../../../reference/runtime/sand-eval-runner.cjs#L311397-L311411) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624761-624775](../../../../../../reference/runtime/host-main.cjs#L624761-L624775) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:311397-311411](../../../../../../reference/runtime/sand-eval-runner.cjs#L311397-L311411) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:624761

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8be0089092cdbb55d7f56bc5e3015cc89fab72f4f6760eebdc08a03628f02d35`.

### evaluation:311397

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8be0089092cdbb55d7f56bc5e3015cc89fab72f4f6760eebdc08a03628f02d35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
