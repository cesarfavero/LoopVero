# `buildProfileOnlyExtractionSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536174-536191](../../../../../../reference/runtime/sand-eval-runner.cjs#L536174-L536191) | `FunctionDeclaration` | no | `isRenamedSpelling, { vaultMounted = false } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536174-536191](../../../../../../reference/runtime/sand-eval-runner.cjs#L536174-L536191) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536174

Calls written directly in this body: `.join`.

SHA-256 of the source span: `bc18b464751e0e9bfc38c3508553ac681cc5330cee1258476e33060b71533534`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
