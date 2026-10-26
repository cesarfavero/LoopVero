# `summarizeSandCloudAgentAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693864-693915](../../../../../../reference/runtime/host-main.cjs#L693864-L693915) | `FunctionDeclaration` | no | `args` |
| [evaluation:491300-491351](../../../../../../reference/runtime/sand-eval-runner.cjs#L491300-L491351) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693864-693915](../../../../../../reference/runtime/host-main.cjs#L693864-L693915) | 21 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:491300-491351](../../../../../../reference/runtime/sand-eval-runner.cjs#L491300-L491351) | 21 | 0 | 0 | 7 | 0 | 0 |

### host:693864

Calls written directly in this body: `.filter`, `args.customMode.trim`, `args.secretNames.join`, `args.title.trim`, `attachedParts.join`, `compact`, `compactHeadAndTail`, `describeReplyDelivery`, `redactSandAutoReviewInlineSecrets`.

Assignment or increment targets: `where`.

SHA-256 of the source span: `bd93feadc41890cb76086ee39e01555e72740f5e94934bc83a4ad4a69399e30f`.

### evaluation:491300

Calls written directly in this body: `.filter`, `args.customMode.trim`, `args.secretNames.join`, `args.title.trim`, `attachedParts.join`, `compact`, `compactHeadAndTail`, `describeReplyDelivery`, `redactSandAutoReviewInlineSecrets`.

Assignment or increment targets: `where`.

SHA-256 of the source span: `bd93feadc41890cb76086ee39e01555e72740f5e94934bc83a4ad4a69399e30f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
