# `hasToolInvocation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621295-621301](../../../../../reference/runtime/host-main.cjs#L621295-L621301) | `FunctionDeclaration` | no | `message` |
| [evaluation:305649-305655](../../../../../reference/runtime/sand-eval-runner.cjs#L305649-L305655) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621295-621301](../../../../../reference/runtime/host-main.cjs#L621295-L621301) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:305649-305655](../../../../../reference/runtime/sand-eval-runner.cjs#L305649-L305655) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:621295

Calls written directly in this body: `Array.isArray`, `content.some`.

SHA-256 of the source span: `08122a84a0ffa6c33a3979c9fcef4095e925c9eb18be07d3e818250728adaf5b`.

### evaluation:305649

Calls written directly in this body: `Array.isArray`, `content.some`.

SHA-256 of the source span: `08122a84a0ffa6c33a3979c9fcef4095e925c9eb18be07d3e818250728adaf5b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
