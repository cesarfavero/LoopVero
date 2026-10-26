# `deviceLocalToolOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/sand-device-local-tools.ts` · [Module README](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759533-759536](../../../../../../reference/runtime/host-main.cjs#L759533-L759536) | `FunctionDeclaration` | no | `toolId` |
| [evaluation:549693-549696](../../../../../../reference/runtime/sand-eval-runner.cjs#L549693-L549696) | `FunctionDeclaration` | no | `toolId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759533-759536](../../../../../../reference/runtime/host-main.cjs#L759533-L759536) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549693-549696](../../../../../../reference/runtime/sand-eval-runner.cjs#L549693-L549696) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759533

Calls written directly in this body: `SAND_DEVICE_LOCAL_TOOLS.find`, `currentDeviceLocalToolId`.

SHA-256 of the source span: `dce28e43bf696ce978dd258b5d3a49a8faa498af9dfc579bbc912f107ff42bae`.

### evaluation:549693

Calls written directly in this body: `SAND_DEVICE_LOCAL_TOOLS.find`, `currentDeviceLocalToolId`.

SHA-256 of the source span: `dce28e43bf696ce978dd258b5d3a49a8faa498af9dfc579bbc912f107ff42bae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
