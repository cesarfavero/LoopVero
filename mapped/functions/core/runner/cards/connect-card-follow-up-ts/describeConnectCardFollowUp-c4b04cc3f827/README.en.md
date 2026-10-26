# `describeConnectCardFollowUp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/connect-card-follow-up.ts` · [Module README](../../../../../../modules/core/runner/cards/connect-card-follow-up-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779231-779240](../../../../../../../reference/runtime/host-main.cjs#L779231-L779240) | `FunctionDeclaration` | no | `args` |
| [evaluation:579405-579414](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579405-L579414) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779231-779240](../../../../../../../reference/runtime/host-main.cjs#L779231-L779240) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579405-579414](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579405-L579414) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:779231

Calls written directly in this body: `.join`, `.trimStart`, `connectCardReplyRule`, `describeCardSurfaceOutcome`.

SHA-256 of the source span: `4867e5d7c9489805496422988cf87170673ff1d5bc5b47311eb31aecdf2bec5f`.

### evaluation:579405

Calls written directly in this body: `.join`, `.trimStart`, `connectCardReplyRule`, `describeCardSurfaceOutcome`.

SHA-256 of the source span: `4867e5d7c9489805496422988cf87170673ff1d5bc5b47311eb31aecdf2bec5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
