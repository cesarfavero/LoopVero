# `downloadBoxFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:515673-515690](../../../../../../reference/runtime/sand-eval-runner.cjs#L515673-L515690) | `FunctionDeclaration` | yes | `ctx, box, agentId, boxPaths, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515673-515690](../../../../../../reference/runtime/sand-eval-runner.cjs#L515673-L515690) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:515673

Calls written directly in this body: `forEachBounded`, `new Map`, `new Set`, `uniquePaths.map`.

SHA-256 of the source span: `3e6e226ef1eed802445dd83a72ded569f8ed831dd010b59f1f03f1ca30943cd9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
