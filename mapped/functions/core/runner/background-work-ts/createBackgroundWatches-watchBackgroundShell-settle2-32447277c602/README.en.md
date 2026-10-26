# `createBackgroundWatches/watchBackgroundShell/settle2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490657-490670](../../../../../../reference/runtime/sand-eval-runner.cjs#L490657-L490670) | `ArrowFunctionExpression` | no | `status, detail, outputPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490657-490670](../../../../../../reference/runtime/sand-eval-runner.cjs#L490657-L490670) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490657

Calls written directly in this body: `host.backgroundShellSettledHandler`, `host.getConversationId`, `notifyShellWorkChanged`, `shellRewatches.delete`.

SHA-256 of the source span: `f77eef1f6cca71bc8e1314d31b25883acb6dfa977ae5296cbc81a894f7244219`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
