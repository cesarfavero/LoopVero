# `copyFileToBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-file-transfer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777637-777663](../../../../../../../reference/runtime/host-main.cjs#L777637-L777663) | `FunctionDeclaration` | yes | `ctx, args, controller` |
| [evaluation:577332-577358](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577332-L577358) | `FunctionDeclaration` | yes | `ctx, args, controller` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777637-777663](../../../../../../../reference/runtime/host-main.cjs#L777637-L777663) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:577332-577358](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577332-L577358) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:777637

Calls written directly in this body: `assertBoxReady`, `auditedBoxTransfer`, `controller.getBoxId`, `controller.getComputerAgentId`, `formatBytes3`, `import_node_path169.posix.basename`, `import_node_path169.posix.join`, `resolveBoxWorkspacePath`, `resolveComputerOrThrow`.

SHA-256 of the source span: `b83395aa7af1501514255139cd2d68c6e48797610f5defe9536b5135d361834e`.

### evaluation:577332

Calls written directly in this body: `assertBoxReady`, `auditedBoxTransfer`, `controller.getBoxId`, `controller.getComputerAgentId`, `formatBytes3`, `import_node_path40.posix.basename`, `import_node_path40.posix.join`, `resolveBoxWorkspacePath`, `resolveComputerOrThrow`.

SHA-256 of the source span: `f65fe47704037c1c8d6144da0bb4769d54868fd57e2970ef7d6e7d247893a44b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
