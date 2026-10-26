# `memoryDedupeKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702649-702651](../../../../../../reference/runtime/host-main.cjs#L702649-L702651) | `FunctionDeclaration` | no | `content` |
| [evaluation:536151-536153](../../../../../../reference/runtime/sand-eval-runner.cjs#L536151-L536153) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702649-702651](../../../../../../reference/runtime/host-main.cjs#L702649-L702651) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536151-536153](../../../../../../reference/runtime/sand-eval-runner.cjs#L536151-L536153) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702649

Calls written directly in this body: `.toLowerCase`, `normalizeMemoryContent`.

SHA-256 of the source span: `1983ca25e36c038ba85ef603dd7c3701b6ffc909315117fc9fd6ae49c5945ebc`.

### evaluation:536151

Calls written directly in this body: `.toLowerCase`, `normalizeMemoryContent`.

SHA-256 of the source span: `1983ca25e36c038ba85ef603dd7c3701b6ffc909315117fc9fd6ae49c5945ebc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
