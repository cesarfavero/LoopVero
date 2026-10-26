# `toolCallIdsOf2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628536-628541](../../../../../../reference/runtime/sand-eval-runner.cjs#L628536-L628541) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628536-628541](../../../../../../reference/runtime/sand-eval-runner.cjs#L628536-L628541) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628536

Calls written directly in this body: `Array.isArray`, `isUnknownRecord2`, `message.content.flatMap`.

SHA-256 of the source span: `50e487047b94f49c5cca013f7608737441fcb2afeef3e3b147af67ba8519207e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
