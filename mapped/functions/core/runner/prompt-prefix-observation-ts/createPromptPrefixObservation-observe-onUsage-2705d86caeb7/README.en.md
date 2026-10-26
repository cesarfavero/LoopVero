# `createPromptPrefixObservation/observe/onUsage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546785-546830](../../../../../../reference/runtime/sand-eval-runner.cjs#L546785-L546830) | `ArrowFunctionExpression` | no | `usage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546785-546830](../../../../../../reference/runtime/sand-eval-runner.cjs#L546785-L546830) | 6 | 0 | 0 | 2 | 0 | 0 |

### evaluation:546785

Calls written directly in this body: `Math.max`, `Math.min`, `deps.conversationId`, `deps.requestId`, `deps.telemetry.reportPromptPrefixDiff`, `prefixHitRate.histogram`, `settle2`, `toPrefixLabel`.

Assignment or increment targets: `firstMainUsage`, `lastMainCompactionEpoch`, `lastMainUsage`.

SHA-256 of the source span: `20722d4ad64bcc8b40a1f8d85977738a95e3fb9fe4584a23b8100c2522f82c63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
