# `reviewSandCloudAgentAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-cloud-agent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775908-775911](../../../../../../reference/runtime/host-main.cjs#L775908-L775911) | `FunctionDeclaration` | yes | `args` |
| [evaluation:575551-575554](../../../../../../reference/runtime/sand-eval-runner.cjs#L575551-L575554) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775908-775911](../../../../../../reference/runtime/host-main.cjs#L775908-L775911) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:575551-575554](../../../../../../reference/runtime/sand-eval-runner.cjs#L575551-L575554) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:775908

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `2b6f145d26783ef157608a13c75f569c53f32c739d91f719fe13482466c554ea`.

### evaluation:575551

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `2b6f145d26783ef157608a13c75f569c53f32c739d91f719fe13482466c554ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
