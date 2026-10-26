# `isComputerUseToolId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/sand-device-local-tools.ts` · [Module README](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759520-759522](../../../../../../reference/runtime/host-main.cjs#L759520-L759522) | `FunctionDeclaration` | no | `toolId` |
| [evaluation:549680-549682](../../../../../../reference/runtime/sand-eval-runner.cjs#L549680-L549682) | `FunctionDeclaration` | no | `toolId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759520-759522](../../../../../../reference/runtime/host-main.cjs#L759520-L759522) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549680-549682](../../../../../../reference/runtime/sand-eval-runner.cjs#L549680-L549682) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759520

Calls written directly in this body: `COMPUTER_USE_TOOL_NAMES.some`.

SHA-256 of the source span: `d3c69ba02eed18a85b496f962ab8b64451c4def137a210ef4e3a3b0c00106fbb`.

### evaluation:549680

Calls written directly in this body: `COMPUTER_USE_TOOL_NAMES.some`.

SHA-256 of the source span: `d3c69ba02eed18a85b496f962ab8b64451c4def137a210ef4e3a3b0c00106fbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
