# `stripMemoryContextBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702727-702729](../../../../../../reference/runtime/host-main.cjs#L702727-L702729) | `FunctionDeclaration` | no | `text3` |
| [evaluation:536460-536462](../../../../../../reference/runtime/sand-eval-runner.cjs#L536460-L536462) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702727-702729](../../../../../../reference/runtime/host-main.cjs#L702727-L702729) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536460-536462](../../../../../../reference/runtime/sand-eval-runner.cjs#L536460-L536462) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702727

Calls written directly in this body: `.replace`, `.trim`, `text3.replace`.

SHA-256 of the source span: `3998ecc113662a0479fed6889f6aa6c8127c0d8f5f8f4c201e1c8d266ec33811`.

### evaluation:536460

Calls written directly in this body: `.replace`, `.trim`, `text3.replace`.

SHA-256 of the source span: `3998ecc113662a0479fed6889f6aa6c8127c0d8f5f8f4c201e1c8d266ec33811`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
