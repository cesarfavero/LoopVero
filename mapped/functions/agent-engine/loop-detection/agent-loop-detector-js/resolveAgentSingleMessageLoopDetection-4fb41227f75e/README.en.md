# `resolveAgentSingleMessageLoopDetection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624566-624571](../../../../../../reference/runtime/host-main.cjs#L624566-L624571) | `FunctionDeclaration` | no | `config2` |
| [evaluation:310698-310703](../../../../../../reference/runtime/sand-eval-runner.cjs#L310698-L310703) | `FunctionDeclaration` | no | `config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624566-624571](../../../../../../reference/runtime/host-main.cjs#L624566-L624571) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:310698-310703](../../../../../../reference/runtime/sand-eval-runner.cjs#L310698-L310703) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:624566

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e3539e10a3992c26d40de3f6e114a7ecc5dd9e519a65ddd6cf9b1f5a7488ff0d`.

### evaluation:310698

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e3539e10a3992c26d40de3f6e114a7ecc5dd9e519a65ddd6cf9b1f5a7488ff0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
