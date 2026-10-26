# `copyFileFromBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-file-transfer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777664-777689](../../../../../../../reference/runtime/host-main.cjs#L777664-L777689) | `FunctionDeclaration` | yes | `ctx, args, controller` |
| [evaluation:577359-577384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577359-L577384) | `FunctionDeclaration` | yes | `ctx, args, controller` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777664-777689](../../../../../../../reference/runtime/host-main.cjs#L777664-L777689) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:577359-577384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577359-L577384) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:777664

Calls written directly in this body: `assertBoxReady`, `auditedBoxTransfer`, `controller.getBoxId`, `controller.getComputerAgentId`, `formatBytes3`, `import_node_path169.posix.basename`, `resolveBoxWorkspacePath`, `resolveComputerOrThrow`.

SHA-256 of the source span: `2347c511c859552cbb7eee11a122a8f27ed114806bf2eefb0625ab3ca0758f83`.

### evaluation:577359

Calls written directly in this body: `assertBoxReady`, `auditedBoxTransfer`, `controller.getBoxId`, `controller.getComputerAgentId`, `formatBytes3`, `import_node_path40.posix.basename`, `resolveBoxWorkspacePath`, `resolveComputerOrThrow`.

SHA-256 of the source span: `7c9afb916afb4d0252749ad721bc955cd438f413edd4bbd199ac7f1fe1856d7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
