# `resolveCopyInStoreId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483604-483610](../../../../../../../reference/runtime/host-main.cjs#L483604-L483610) | `FunctionDeclaration` | yes | `env, sourceMap` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483604-483610](../../../../../../../reference/runtime/host-main.cjs#L483604-L483610) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:483604

Calls written directly in this body: `env.SAND_BOX_STORE_ID.trim`, `isAgentStoreSourceId`, `sourceMap.getBoxStore`.

SHA-256 of the source span: `bdc05de3425ee993982e89b8f3792477e11a9f83d05cf2d032e8171f71b41941`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
