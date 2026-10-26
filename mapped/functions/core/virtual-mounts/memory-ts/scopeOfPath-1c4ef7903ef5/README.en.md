# `scopeOfPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769600-769603](../../../../../../reference/runtime/host-main.cjs#L769600-L769603) | `FunctionDeclaration` | no | `path33` |
| [evaluation:565269-565272](../../../../../../reference/runtime/sand-eval-runner.cjs#L565269-L565272) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769600-769603](../../../../../../reference/runtime/host-main.cjs#L769600-L769603) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565269-565272](../../../../../../reference/runtime/sand-eval-runner.cjs#L565269-L565272) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769600

Calls written directly in this body: `MEMORY_SCOPES.find`, `path33.split`.

SHA-256 of the source span: `ccb544d98041470fc7c2d6f61f0c67e3ffa41ab82b8504d4ddad9915aac55c7c`.

### evaluation:565269

Calls written directly in this body: `MEMORY_SCOPES.find`, `path33.split`.

SHA-256 of the source span: `ccb544d98041470fc7c2d6f61f0c67e3ffa41ab82b8504d4ddad9915aac55c7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
