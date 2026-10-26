# `normalizeMerchantUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775286-775300](../../../../../../../reference/runtime/host-main.cjs#L775286-L775300) | `FunctionDeclaration` | no | `raw` |
| [evaluation:574931-574945](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574931-L574945) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775286-775300](../../../../../../../reference/runtime/host-main.cjs#L775286-L775300) | 3 | 0 | 0 | 1 | 2 | 0 |
| [evaluation:574931-574945](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574931-L574945) | 3 | 0 | 0 | 1 | 2 | 0 |

### host:775286

Calls written directly in this body: `JSON.stringify`, `new SandToolInputError`, `parseMerchantUrl`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `e57a6959a8404a02cfe72e4274af64e0bc38405449f6f815df9408938772dcf1`.

### evaluation:574931

Calls written directly in this body: `JSON.stringify`, `new SandToolInputError`, `parseMerchantUrl`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `484f8406f8dfa8a05937cd60f3142aaa3796ac9d07e5433c3dd2e21c5710ff1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
