# `resolveLocalToolPermissionAsk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `host/extensions/local-tool-permission/local-tool-permission-resolution.ts` · [Module README](../../../../../../modules/host/extensions/local-tool-permission/local-tool-permission-resolution-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682202-682220](../../../../../../../reference/runtime/host-main.cjs#L682202-L682220) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682202-682220](../../../../../../../reference/runtime/host-main.cjs#L682202-L682220) | 3 | 0 | 1 | 0 | 2 | 0 |

### host:682202

Calls written directly in this body: `.catch`, `deps.onStrandedRetirement`, `deps.transcript.widgetResponses.settleStaleLocalToolPermissionCard`, `isSandLocalToolPermissionResolution`, `new SandLocalToolPermissionResolutionError`.

Explicit throw targets: `SandLocalToolPermissionResolutionError`.

SHA-256 of the source span: `0ab77efbfca303db42120b7b943eed608dc8790660c86ede7f332f6a2479d787`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
