# `describeDeviceLocalToolPermission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/sand-device-local-tools.ts` · [Module README](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759537-759557](../../../../../../reference/runtime/host-main.cjs#L759537-L759557) | `FunctionDeclaration` | no | `args` |
| [evaluation:549697-549717](../../../../../../reference/runtime/sand-eval-runner.cjs#L549697-L549717) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759537-759557](../../../../../../reference/runtime/host-main.cjs#L759537-L759557) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549697-549717](../../../../../../reference/runtime/sand-eval-runner.cjs#L549697-L549717) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:759537

Calls written directly in this body: `args.deviceName.trim`, `computerUsePermissionText`, `deviceLocalToolOf`, `isComputerUseToolId`, `tool.permissionCardBody`.

SHA-256 of the source span: `728cfedc8b07e8d6e27bd65aa0eb9558bd000eaf60fc37c78202e315304833ec`.

### evaluation:549697

Calls written directly in this body: `args.deviceName.trim`, `computerUsePermissionText`, `deviceLocalToolOf`, `isComputerUseToolId`, `tool.permissionCardBody`.

SHA-256 of the source span: `728cfedc8b07e8d6e27bd65aa0eb9558bd000eaf60fc37c78202e315304833ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
