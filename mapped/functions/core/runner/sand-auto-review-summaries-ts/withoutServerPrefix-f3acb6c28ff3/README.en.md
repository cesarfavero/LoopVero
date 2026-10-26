# `withoutServerPrefix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:491113-491121](../../../../../../reference/runtime/sand-eval-runner.cjs#L491113-L491121) | `FunctionDeclaration` | no | `words, server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491113-491121](../../../../../../reference/runtime/sand-eval-runner.cjs#L491113-L491121) | 2 | 1 | 0 | 2 | 0 | 0 |

### evaluation:491113

Calls written directly in this body: `server.startsWith`, `words.entries`, `words.slice`.

Assignment or increment targets: `spelled`.

SHA-256 of the source span: `0126fe52cdc160d6e4d4e04b9e1f58395ccde585712978a79d4b430d02d716a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
