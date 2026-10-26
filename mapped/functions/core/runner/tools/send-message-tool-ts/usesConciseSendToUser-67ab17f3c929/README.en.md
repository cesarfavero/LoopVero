# `usesConciseSendToUser`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761195-761197](../../../../../../../reference/runtime/host-main.cjs#L761195-L761197) | `FunctionDeclaration` | no | `deps` |
| [evaluation:552010-552012](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552010-L552012) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761195-761197](../../../../../../../reference/runtime/host-main.cjs#L761195-L761197) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552010-552012](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552010-L552012) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761195

Calls written directly in this body: `deps.systemPromptHasSendToUserPolicy`.

SHA-256 of the source span: `4b99437dccec16ea82a37612a372283f93c921bc98ff099af8881d81d63f81ba`.

### evaluation:552010

Calls written directly in this body: `deps.systemPromptHasSendToUserPolicy`.

SHA-256 of the source span: `4b99437dccec16ea82a37612a372283f93c921bc98ff099af8881d81d63f81ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
