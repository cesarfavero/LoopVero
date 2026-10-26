# `plainTextOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/prepare-messages.js` · [Module README](../../../../modules/agent-summarization/prepare-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620533-620539](../../../../../reference/runtime/host-main.cjs#L620533-L620539) | `FunctionDeclaration` | no | `value` |
| [evaluation:304887-304893](../../../../../reference/runtime/sand-eval-runner.cjs#L304887-L304893) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620533-620539](../../../../../reference/runtime/host-main.cjs#L620533-L620539) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304887-304893](../../../../../reference/runtime/sand-eval-runner.cjs#L304887-L304893) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:620533

Calls written directly in this body: `isRedactedString`, `value.unwrap`.

SHA-256 of the source span: `40fbf39f0be00ccfbf89a25142481cfd5cc8fcd23033b69de6db53e04104b021`.

### evaluation:304887

Calls written directly in this body: `isRedactedString`, `value.unwrap`.

SHA-256 of the source span: `40fbf39f0be00ccfbf89a25142481cfd5cc8fcd23033b69de6db53e04104b021`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
