# `createFileTransferTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-file-transfer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777716-777767](../../../../../../../reference/runtime/host-main.cjs#L777716-L777767) | `FunctionDeclaration` | no | `controller, machineIds` |
| [evaluation:577411-577462](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577411-L577462) | `FunctionDeclaration` | no | `controller, machineIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777716-777767](../../../../../../../reference/runtime/host-main.cjs#L777716-L777767) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577411-577462](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577411-L577462) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777716

Calls written directly in this body: `defineCommunicateTool`, `extendRequiredMachineIdParameter`, `withGatedArgumentAlias`.

SHA-256 of the source span: `9b5bba5ca8664e33d9a09175154f1ad45d6d234ca517c65108858aa10c0ad296`.

### evaluation:577411

Calls written directly in this body: `defineCommunicateTool`, `extendRequiredMachineIdParameter`, `withGatedArgumentAlias`.

SHA-256 of the source span: `ce90940a70dec9446353bf303e96632a7a79384798a57d5ee9577f60dea612b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
