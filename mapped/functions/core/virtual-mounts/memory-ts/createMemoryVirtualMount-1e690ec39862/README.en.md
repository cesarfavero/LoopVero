# `createMemoryVirtualMount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769623-769684](../../../../../../reference/runtime/host-main.cjs#L769623-L769684) | `FunctionDeclaration` | no | `deps` |
| [evaluation:565292-565353](../../../../../../reference/runtime/sand-eval-runner.cjs#L565292-L565353) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769623-769684](../../../../../../reference/runtime/host-main.cjs#L769623-L769684) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565292-565353](../../../../../../reference/runtime/sand-eval-runner.cjs#L565292-L565353) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769623

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `229ada1f2e27a1aa0f3484fb69e5ca84585ae629d996a0fdd2a44b2fec20f39c`.

### evaluation:565292

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `9da1418449743751fe2b967741f0df925e0be58d43e662fdb3f1625ada25fa8a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
