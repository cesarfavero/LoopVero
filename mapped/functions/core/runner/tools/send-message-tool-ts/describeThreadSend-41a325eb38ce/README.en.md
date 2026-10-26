# `describeThreadSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761266-761275](../../../../../../../reference/runtime/host-main.cjs#L761266-L761275) | `FunctionDeclaration` | no | `task, message, messageId` |
| [evaluation:552081-552090](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552081-L552090) | `FunctionDeclaration` | no | `task, message, messageId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761266-761275](../../../../../../../reference/runtime/host-main.cjs#L761266-L761275) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552081-552090](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552081-L552090) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:761266

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `attached`.

SHA-256 of the source span: `f43aa82756603751e035e7f85739755fe127c53e2b4b0d5949d05dc6537c377e`.

### evaluation:552081

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `attached`.

SHA-256 of the source span: `f43aa82756603751e035e7f85739755fe127c53e2b4b0d5949d05dc6537c377e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
