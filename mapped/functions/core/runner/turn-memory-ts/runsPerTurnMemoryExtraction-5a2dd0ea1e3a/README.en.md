# `runsPerTurnMemoryExtraction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/turn-memory.ts` · [Module README](../../../../../modules/core/runner/turn-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590610-590612](../../../../../../reference/runtime/sand-eval-runner.cjs#L590610-L590612) | `FunctionDeclaration` | no | `memoryTypes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590610-590612](../../../../../../reference/runtime/sand-eval-runner.cjs#L590610-L590612) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590610

Calls written directly in this body: `memoryTypes.some`.

SHA-256 of the source span: `b37bb87475247b548ec66881e16d754e395e377219bb2540b8b9a1347f0ca4a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
