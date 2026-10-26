# `createRequestOnePasswordConnectTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-onepassword-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751654-751688](../../../../../../../reference/runtime/host-main.cjs#L751654-L751688) | `FunctionDeclaration` | no | `deps` |
| [evaluation:524721-524755](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524721-L524755) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751654-751688](../../../../../../../reference/runtime/host-main.cjs#L751654-L751688) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524721-524755](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524721-L524755) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751654

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`, `requestOnePasswordConnectDescription`.

SHA-256 of the source span: `05dede98516e97f5bff276e32ee6eae731f7a61741069d93d7bda46a3d554ed6`.

### evaluation:524721

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`, `requestOnePasswordConnectDescription`.

SHA-256 of the source span: `05dede98516e97f5bff276e32ee6eae731f7a61741069d93d7bda46a3d554ed6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
