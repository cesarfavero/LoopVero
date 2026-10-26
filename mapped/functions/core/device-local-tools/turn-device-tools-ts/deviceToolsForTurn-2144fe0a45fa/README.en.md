# `deviceToolsForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/turn-device-tools.ts` · [Module README](../../../../../modules/core/device-local-tools/turn-device-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566281-566289](../../../../../../reference/runtime/sand-eval-runner.cjs#L566281-L566289) | `FunctionDeclaration` | no | `host, reviewOptions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566281-566289](../../../../../../reference/runtime/sand-eval-runner.cjs#L566281-L566289) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:566281

Calls written directly in this body: `createDeviceLocalTools`, `phonePortForTurn`, `withDeviceToolAutoReview`, `withDeviceToolPermissionCards`.

SHA-256 of the source span: `5b69722a353e97b85f227371a0d479757a206fead804b056b669ec112be0eb7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
