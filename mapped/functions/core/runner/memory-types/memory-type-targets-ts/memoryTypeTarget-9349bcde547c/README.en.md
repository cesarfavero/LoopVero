# `memoryTypeTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-type-targets.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-type-targets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771593-771595](../../../../../../../reference/runtime/host-main.cjs#L771593-L771595) | `FunctionDeclaration` | no | `args` |
| [evaluation:570826-570828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570826-L570828) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771593-771595](../../../../../../../reference/runtime/host-main.cjs#L771593-L771595) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570826-570828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570826-L570828) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771593

Calls written directly in this body: `folderTarget`, `shardTarget`.

SHA-256 of the source span: `21fd83acfb293b4e2c3661c3d932793c4d6bb5618e79c994dd5901bd3b8f368f`.

### evaluation:570826

Calls written directly in this body: `folderTarget`, `shardTarget`.

SHA-256 of the source span: `21fd83acfb293b4e2c3661c3d932793c4d6bb5618e79c994dd5901bd3b8f368f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
