# `summarizeSandEmailSendAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693821-693842](../../../../../../reference/runtime/host-main.cjs#L693821-L693842) | `FunctionDeclaration` | no | `args` |
| [evaluation:491257-491278](../../../../../../reference/runtime/sand-eval-runner.cjs#L491257-L491278) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693821-693842](../../../../../../reference/runtime/host-main.cjs#L693821-L693842) | 7 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491257-491278](../../../../../../reference/runtime/sand-eval-runner.cjs#L491257-L491278) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:693821

Calls written directly in this body: `.join`, `args.attachments.map`, `args.bcc.map`, `args.cc.map`, `args.to.map`, `compact`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `replyTo.map`, `summarizeEmailHtml`.

SHA-256 of the source span: `9aa65cff81cbcfe28949f1211d56152024522a1720a9d614e44dd480388bb90f`.

### evaluation:491257

Calls written directly in this body: `.join`, `args.attachments.map`, `args.bcc.map`, `args.cc.map`, `args.to.map`, `compact`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `replyTo.map`, `summarizeEmailHtml`.

SHA-256 of the source span: `9aa65cff81cbcfe28949f1211d56152024522a1720a9d614e44dd480388bb90f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
