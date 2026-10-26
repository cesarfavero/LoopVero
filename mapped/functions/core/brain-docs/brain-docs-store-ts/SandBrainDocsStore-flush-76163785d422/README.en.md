# `SandBrainDocsStore.flush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629461-629471](../../../../../../reference/runtime/sand-eval-runner.cjs#L629461-L629471) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629461-629471](../../../../../../reference/runtime/sand-eval-runner.cjs#L629461-L629471) | 3 | 0 | 1 | 0 | 1 | 0 |

### evaluation:629461

Calls written directly in this body: `Promise.allSettled`, `Promise.resolve`, `agentMemory.flush`, `settled.find`, `this.flushBoxWrites`, `this.options.agentMemory`, `this.options.userMemory`, `userMemory.own.flush`.

Explicit throw targets: `failed.reason`.

SHA-256 of the source span: `1fe3c996f9efbd0d5e3722d1401e5372d67b4703ad5b8508dc1823bbaa3523f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
