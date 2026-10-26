# `mergeMemoryRecords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536391-536401](../../../../../../reference/runtime/sand-eval-runner.cjs#L536391-L536401) | `FunctionDeclaration` | no | `records2, compare, limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536391-536401](../../../../../../reference/runtime/sand-eval-runner.cjs#L536391-L536401) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:536391

Calls written directly in this body: `.slice`, `.sort`, `byKey.get`, `byKey.set`, `byKey.values`, `memoryDedupeKey`, `new Map`.

SHA-256 of the source span: `a3110882fffa0d030adc548c94849562bc5a544d64a20d347fa7ef6f61e18d2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
