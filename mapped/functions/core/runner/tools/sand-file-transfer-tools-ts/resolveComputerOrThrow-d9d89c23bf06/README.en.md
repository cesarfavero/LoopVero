# `resolveComputerOrThrow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-file-transfer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777620-777631](../../../../../../../reference/runtime/host-main.cjs#L777620-L777631) | `FunctionDeclaration` | no | `controller, machineId` |
| [evaluation:577315-577326](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577315-L577326) | `FunctionDeclaration` | no | `controller, machineId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777620-777631](../../../../../../../reference/runtime/host-main.cjs#L777620-L777631) | 1 | 0 | 0 | 1 | 1 | 1 |
| [evaluation:577315-577326](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577315-L577326) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:777620

Calls written directly in this body: `String`, `controller.getComputerAgentId`, `new BoxTransferError`, `resolveSandUserComputer`.

Explicit throw targets: `BoxTransferError`.

SHA-256 of the source span: `5ebada0a9834a92235d1556404668a84bbdb484ee3d87ac213e3915597ba0a54`.

### evaluation:577315

Calls written directly in this body: `String`, `controller.getComputerAgentId`, `new BoxTransferError`, `resolveSandUserComputer`.

Explicit throw targets: `BoxTransferError`.

SHA-256 of the source span: `ddfa0e10f877a386c3b28bbfcfaab028da7deef72299cb1572da618b6c8badfc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
