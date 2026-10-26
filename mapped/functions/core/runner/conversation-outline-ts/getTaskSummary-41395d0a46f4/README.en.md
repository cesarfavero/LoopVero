# `getTaskSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719715-719724](../../../../../../reference/runtime/host-main.cjs#L719715-L719724) | `FunctionDeclaration` | no | `taskToolCall` |
| [evaluation:526191-526200](../../../../../../reference/runtime/sand-eval-runner.cjs#L526191-L526200) | `FunctionDeclaration` | no | `taskToolCall` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719715-719724](../../../../../../reference/runtime/host-main.cjs#L719715-L719724) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:526191-526200](../../../../../../reference/runtime/sand-eval-runner.cjs#L526191-L526200) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:719715

Calls written directly in this body: `taskToolCall.args.description.trim`, `taskToolCall.args.prompt.trim`.

SHA-256 of the source span: `12c4572111980a2abac7a2f9ee0fbf9f1eecd9dc6df1b9ab2df4aba3a9635e61`.

### evaluation:526191

Calls written directly in this body: `taskToolCall.args.description.trim`, `taskToolCall.args.prompt.trim`.

SHA-256 of the source span: `12c4572111980a2abac7a2f9ee0fbf9f1eecd9dc6df1b9ab2df4aba3a9635e61`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
