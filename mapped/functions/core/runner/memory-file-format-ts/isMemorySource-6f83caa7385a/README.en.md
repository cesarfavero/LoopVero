# `isMemorySource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702760-702762](../../../../../../reference/runtime/host-main.cjs#L702760-L702762) | `FunctionDeclaration` | no | `value` |
| [evaluation:536504-536506](../../../../../../reference/runtime/sand-eval-runner.cjs#L536504-L536506) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702760-702762](../../../../../../reference/runtime/host-main.cjs#L702760-L702762) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536504-536506](../../../../../../reference/runtime/sand-eval-runner.cjs#L536504-L536506) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702760

Calls written directly in this body: `SAND_MEMORY_SOURCES.some`.

SHA-256 of the source span: `002c5d6ffc4228aeee8727749ca368e8c68355baa53c80b3f7b7cd1f5d9f11b7`.

### evaluation:536504

Calls written directly in this body: `SAND_MEMORY_SOURCES.some`.

SHA-256 of the source span: `002c5d6ffc4228aeee8727749ca368e8c68355baa53c80b3f7b7cd1f5d9f11b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
