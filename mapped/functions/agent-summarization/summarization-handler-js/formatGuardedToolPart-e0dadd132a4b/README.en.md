# `formatGuardedToolPart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620784-620791](../../../../../reference/runtime/host-main.cjs#L620784-L620791) | `FunctionDeclaration` | no | `prefix, serializedValue` |
| [evaluation:305138-305145](../../../../../reference/runtime/sand-eval-runner.cjs#L305138-L305145) | `FunctionDeclaration` | no | `prefix, serializedValue` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620784-620791](../../../../../reference/runtime/host-main.cjs#L620784-L620791) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:305138-305145](../../../../../reference/runtime/sand-eval-runner.cjs#L305138-L305145) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:620784

Calls written directly in this body: `serializedValue.slice`.

SHA-256 of the source span: `4e2ad0cab78197a2fa81e38c97fa4a813d79ed05f0ad324084bc6fe2bfc349d0`.

### evaluation:305138

Calls written directly in this body: `serializedValue.slice`.

SHA-256 of the source span: `4e2ad0cab78197a2fa81e38c97fa4a813d79ed05f0ad324084bc6fe2bfc349d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
