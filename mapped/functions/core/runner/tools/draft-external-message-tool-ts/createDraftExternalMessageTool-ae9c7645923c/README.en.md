# `createDraftExternalMessageTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755416-755525](../../../../../../../reference/runtime/host-main.cjs#L755416-L755525) | `FunctionDeclaration` | no | `deps` |
| [evaluation:541296-541405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541296-L541405) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755416-755525](../../../../../../../reference/runtime/host-main.cjs#L755416-L755525) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541296-541405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541296-L541405) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755416

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`.

SHA-256 of the source span: `b530bda6677acda47b60e8065857c05ae0ebcde901d48646959e4d0854209c26`.

### evaluation:541296

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`.

SHA-256 of the source span: `7a631c40a8b2ba49a90bbdd99f0244a0ba36b8de632ea1e9abc387b726be158f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
