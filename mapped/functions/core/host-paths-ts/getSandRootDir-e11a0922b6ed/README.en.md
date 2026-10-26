# `getSandRootDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430906-430915](../../../../../reference/runtime/host-main.cjs#L430906-L430915) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os.homedir)()` |
| [evaluation:530498-530507](../../../../../reference/runtime/sand-eval-runner.cjs#L530498-L530507) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os8.homedir)()` |
| [state-worker:417-426](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L417-L426) | `FunctionDeclaration` | no | `homeDir = (0, import_node_os.homedir)()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430906-430915](../../../../../reference/runtime/host-main.cjs#L430906-L430915) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:530498-530507](../../../../../reference/runtime/sand-eval-runner.cjs#L530498-L530507) | 3 | 0 | 0 | 3 | 0 | 0 |
| [state-worker:417-426](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L417-L426) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:430906

Calls written directly in this body: `getSandProductionRootDir`, `getSandVariant`, `resolveSandDataRootOverride`, `resolveSandUserDataDir`.

SHA-256 of the source span: `f799b4744901836ce67d0543078ed47999fd368afd181f82632572c0c090b98b`.

### evaluation:530498

Calls written directly in this body: `getSandProductionRootDir`, `getSandVariant`, `resolveSandDataRootOverride`, `resolveSandUserDataDir`.

SHA-256 of the source span: `6877eb9366304e1c96e66deb34966f68be68a4e954378fbb6f73ac9bc68f7bd9`.

### state-worker:417

Calls written directly in this body: `getSandProductionRootDir`, `getSandVariant`, `resolveSandDataRootOverride`, `resolveSandUserDataDir`.

SHA-256 of the source span: `b9a41f2b57232962c0c8a09542d77342a21d91a7ab6a7f1155306f0e2f59ae6a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
