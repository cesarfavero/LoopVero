# `unreachableDeviceToolError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/turn-device-tools.ts` · [Module README](../../../../../modules/core/device-local-tools/turn-device-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566290-566301](../../../../../../reference/runtime/sand-eval-runner.cjs#L566290-L566301) | `FunctionDeclaration` | no | `host, stepDeviceTools, toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566290-566301](../../../../../../reference/runtime/sand-eval-runner.cjs#L566290-L566301) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:566290

Calls written directly in this body: `SAND_DEVICE_LOCAL_TOOLS.find`, `new CustomToolCallError`, `phonePortForTurn`, `sandNoPhoneForLocalToolMessage`, `stepDeviceTools.some`.

SHA-256 of the source span: `1b2a22f1a1dc36dc44a8f7a855e6dcdb2860db9e66d54a24f21db17bd730f9ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
