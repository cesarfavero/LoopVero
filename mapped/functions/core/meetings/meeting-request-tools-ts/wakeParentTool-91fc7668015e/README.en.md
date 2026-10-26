# `wakeParentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meeting-request-tools.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763435-763449](../../../../../../reference/runtime/host-main.cjs#L763435-L763449) | `FunctionDeclaration` | no | `deps` |
| [evaluation:556400-556414](../../../../../../reference/runtime/sand-eval-runner.cjs#L556400-L556414) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763435-763449](../../../../../../reference/runtime/host-main.cjs#L763435-L763449) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556400-556414](../../../../../../reference/runtime/sand-eval-runner.cjs#L556400-L556414) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763435

Calls written directly in this body: `.describe`, `.max`, `.min`, `.trim`, `defineCommunicateTool`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `ed52b684684d056e87bf911c172888c8a1a9c42a523e6028c3e380b2b7cec2a8`.

### evaluation:556400

Calls written directly in this body: `.describe`, `.max`, `.min`, `.trim`, `defineCommunicateTool`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `f2d89a9999f21b3e21bc4bc9ee130ecab60767733f50084259d72ca6d5342ec3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
