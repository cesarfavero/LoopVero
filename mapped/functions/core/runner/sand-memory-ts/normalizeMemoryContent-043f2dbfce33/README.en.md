# `normalizeMemoryContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702646-702648](../../../../../../reference/runtime/host-main.cjs#L702646-L702648) | `FunctionDeclaration` | no | `raw` |
| [evaluation:536148-536150](../../../../../../reference/runtime/sand-eval-runner.cjs#L536148-L536150) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702646-702648](../../../../../../reference/runtime/host-main.cjs#L702646-L702648) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536148-536150](../../../../../../reference/runtime/sand-eval-runner.cjs#L536148-L536150) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702646

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `7d82ddc1de2b26ae3c42fbdb57ab00d790815b37edb75ee82b63126c27a8d2ef`.

### evaluation:536148

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `7d82ddc1de2b26ae3c42fbdb57ab00d790815b37edb75ee82b63126c27a8d2ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
