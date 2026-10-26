# `forEachBounded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476517-476533](../../../../../../reference/runtime/host-main.cjs#L476517-L476533) | `FunctionDeclaration` | yes | `items, limit3, fn` |
| [evaluation:515656-515672](../../../../../../reference/runtime/sand-eval-runner.cjs#L515656-L515672) | `FunctionDeclaration` | yes | `items, limit3, fn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476517-476533](../../../../../../reference/runtime/host-main.cjs#L476517-L476533) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:515656-515672](../../../../../../reference/runtime/sand-eval-runner.cjs#L515656-L515672) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:476517

Calls written directly in this body: `Array.from`, `Math.max`, `Math.min`, `Promise.all`.

SHA-256 of the source span: `fb4f5c9c0d0e706c9dc8ce4e93823cbd91ae580f681dabd82f281d4caf91240e`.

### evaluation:515656

Calls written directly in this body: `Array.from`, `Math.max`, `Math.min`, `Promise.all`.

SHA-256 of the source span: `a0289d3d54ce8e3aa8ffbac7f7021f3ac52a0405f5afa249932de8624e00f910`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
