# `reviewSandSubagentAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/sand-subagent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780820-780823](../../../../../../reference/runtime/host-main.cjs#L780820-L780823) | `FunctionDeclaration` | yes | `args` |
| [evaluation:581168-581171](../../../../../../reference/runtime/sand-eval-runner.cjs#L581168-L581171) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780820-780823](../../../../../../reference/runtime/host-main.cjs#L780820-L780823) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:581168-581171](../../../../../../reference/runtime/sand-eval-runner.cjs#L581168-L581171) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:780820

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `006c078166e39446e84883367a07eb2387a3f8ed0e84e41aa74de54c4813a6de`.

### evaluation:581168

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `006c078166e39446e84883367a07eb2387a3f8ed0e84e41aa74de54c4813a6de`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
