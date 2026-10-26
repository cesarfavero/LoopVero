# `createOnePasswordConnectTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-onepassword-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751631-751634](../../../../../../../reference/runtime/host-main.cjs#L751631-L751634) | `FunctionDeclaration` | no | `deps` |
| [evaluation:524698-524701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524698-L524701) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751631-751634](../../../../../../../reference/runtime/host-main.cjs#L751631-L751634) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524698-524701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524698-L524701) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751631

Calls written directly in this body: `createRequestOnePasswordConnectTool`, `createSetOnePasswordPreferenceTool`.

SHA-256 of the source span: `a5da3e83941ae58de32732bd69a64afc9b18416f75f18000852910b3d120d6c9`.

### evaluation:524698

Calls written directly in this body: `createRequestOnePasswordConnectTool`, `createSetOnePasswordPreferenceTool`.

SHA-256 of the source span: `0d82cb12dcbb9ce74918aab3584cc8ce57d1aab487a151306fb7a1d378cc7f9b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
