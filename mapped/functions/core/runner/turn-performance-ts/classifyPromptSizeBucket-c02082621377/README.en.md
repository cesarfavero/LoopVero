# `classifyPromptSizeBucket`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546968-546976](../../../../../../reference/runtime/sand-eval-runner.cjs#L546968-L546976) | `FunctionDeclaration` | no | `inputTokens` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546968-546976](../../../../../../reference/runtime/sand-eval-runner.cjs#L546968-L546976) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:546968

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `dd204294017f3f1e650ba04ae90496ac092e99e536c51a38bb5140dd22f135aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
