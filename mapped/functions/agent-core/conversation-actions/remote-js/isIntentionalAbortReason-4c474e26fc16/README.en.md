# `isIntentionalAbortReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/conversation-actions/remote.js` · [Module README](../../../../../modules/agent-core/conversation-actions/remote-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475431-475433](../../../../../../reference/runtime/host-main.cjs#L475431-L475433) | `FunctionDeclaration` | no | `reason` |
| [evaluation:254651-254653](../../../../../../reference/runtime/sand-eval-runner.cjs#L254651-L254653) | `FunctionDeclaration` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475431-475433](../../../../../../reference/runtime/host-main.cjs#L475431-L475433) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254651-254653](../../../../../../reference/runtime/sand-eval-runner.cjs#L254651-L254653) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475431

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `0efe5b161cc02c3451b2080628bf9dd10c89077fbb650e8d7f46c1fe3c3a33d3`.

### evaluation:254651

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `0efe5b161cc02c3451b2080628bf9dd10c89077fbb650e8d7f46c1fe3c3a33d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
