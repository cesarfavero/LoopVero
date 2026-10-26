# `serializeMemoryProvenanceLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702763-702766](../../../../../../reference/runtime/host-main.cjs#L702763-L702766) | `FunctionDeclaration` | no | `provenance` |
| [evaluation:536507-536510](../../../../../../reference/runtime/sand-eval-runner.cjs#L536507-L536510) | `FunctionDeclaration` | no | `provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702763-702766](../../../../../../reference/runtime/host-main.cjs#L702763-L702766) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536507-536510](../../../../../../reference/runtime/sand-eval-runner.cjs#L536507-L536510) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:702763

Calls written directly in this body: `MEMORY_TURN_ID.test`.

SHA-256 of the source span: `89f79b22dd4cb88b8c947ad9076573c320c5eb4a734f621ecc993c6cf3724c11`.

### evaluation:536507

Calls written directly in this body: `MEMORY_TURN_ID.test`.

SHA-256 of the source span: `89f79b22dd4cb88b8c947ad9076573c320c5eb4a734f621ecc993c6cf3724c11`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
