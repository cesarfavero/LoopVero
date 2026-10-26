# `memoryLogFileName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536529-536531](../../../../../../reference/runtime/sand-eval-runner.cjs#L536529-L536531) | `FunctionDeclaration` | no | `createdAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536529-536531](../../../../../../reference/runtime/sand-eval-runner.cjs#L536529-L536531) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536529

Calls written directly in this body: `.slice`, `formatMemoryDate`.

SHA-256 of the source span: `414f8f0f2b7cc688ae52218db6adc48ec44009398b1c7cd7fd22efdb47d6c700`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
