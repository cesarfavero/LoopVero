# `isSandCloudAgentAutoReviewAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-cloud-agent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775721-775723](../../../../../../reference/runtime/host-main.cjs#L775721-L775723) | `FunctionDeclaration` | no | `action` |
| [evaluation:575364-575366](../../../../../../reference/runtime/sand-eval-runner.cjs#L575364-L575366) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775721-775723](../../../../../../reference/runtime/host-main.cjs#L775721-L775723) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575364-575366](../../../../../../reference/runtime/sand-eval-runner.cjs#L575364-L575366) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775721

Calls written directly in this body: `REVIEWABLE_ACTIONS.has`.

SHA-256 of the source span: `7e0eb90a26bff25294e259e6848df875572cd2bb170d048ecb5e068803873cd6`.

### evaluation:575364

Calls written directly in this body: `REVIEWABLE_ACTIONS.has`.

SHA-256 of the source span: `7e0eb90a26bff25294e259e6848df875572cd2bb170d048ecb5e068803873cd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
