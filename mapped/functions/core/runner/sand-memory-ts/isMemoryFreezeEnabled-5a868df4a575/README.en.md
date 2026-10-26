# `isMemoryFreezeEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536095-536097](../../../../../../reference/runtime/sand-eval-runner.cjs#L536095-L536097) | `FunctionDeclaration` | no | `env = process.env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536095-536097](../../../../../../reference/runtime/sand-eval-runner.cjs#L536095-L536097) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536095

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `2e2a669a329e522ba873cb9e9fe4b88468476d501ec584756af760831f21ce0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
