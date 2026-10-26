# `appendSystemReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/prompt-executor.js` · [Module README](../../../../modules/chat-inference/prompt-executor-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617991-617996](../../../../../reference/runtime/host-main.cjs#L617991-L617996) | `FunctionDeclaration` | no | `result, reminder` |
| [evaluation:287362-287367](../../../../../reference/runtime/sand-eval-runner.cjs#L287362-L287367) | `FunctionDeclaration` | no | `result, reminder` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617991-617996](../../../../../reference/runtime/host-main.cjs#L617991-L617996) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287362-287367](../../../../../reference/runtime/sand-eval-runner.cjs#L287362-L287367) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617991

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `bccd13e1a17ce49645f6a69e8d02e7976cfec51aec660ad7f8a085fa9a367da9`.

### evaluation:287362

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `bccd13e1a17ce49645f6a69e8d02e7976cfec51aec660ad7f8a085fa9a367da9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
