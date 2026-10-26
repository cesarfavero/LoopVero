# `SandBrainDocsStore.memory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629484-629489](../../../../../../reference/runtime/sand-eval-runner.cjs#L629484-L629489) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629484-629489](../../../../../../reference/runtime/sand-eval-runner.cjs#L629484-L629489) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:629484

Calls written directly in this body: `getAgentMemoryDir`, `this.memoryFolder`, `this.options.agentMemory`, `this.requireFamily`.

SHA-256 of the source span: `2a7a2103052a15cafb8647da5653a5853bccfb36b7ba71a93b2eb3ee9fe81591`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
