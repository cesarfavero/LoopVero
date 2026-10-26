# `currentDeviceLocalToolId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/sand-device-local-tools.ts` · [Module README](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759517-759519](../../../../../../reference/runtime/host-main.cjs#L759517-L759519) | `FunctionDeclaration` | no | `toolId, tools = SAND_DEVICE_LOCAL_TOOLS` |
| [evaluation:549677-549679](../../../../../../reference/runtime/sand-eval-runner.cjs#L549677-L549679) | `FunctionDeclaration` | no | `toolId, tools = SAND_DEVICE_LOCAL_TOOLS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759517-759519](../../../../../../reference/runtime/host-main.cjs#L759517-L759519) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549677-549679](../../../../../../reference/runtime/sand-eval-runner.cjs#L549677-L549679) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759517

Calls written directly in this body: `tools.find`.

SHA-256 of the source span: `5b915ffae18781b38a549dc7543257106df59b8e50bee94a5cddf4abcf9f59e2`.

### evaluation:549677

Calls written directly in this body: `tools.find`.

SHA-256 of the source span: `5b915ffae18781b38a549dc7543257106df59b8e50bee94a5cddf4abcf9f59e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
