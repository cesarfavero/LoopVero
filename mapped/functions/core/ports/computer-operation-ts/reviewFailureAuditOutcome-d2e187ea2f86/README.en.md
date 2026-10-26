# `reviewFailureAuditOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/ports/computer-operation.ts` · [Module README](../../../../../modules/core/ports/computer-operation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693590-693601](../../../../../../reference/runtime/host-main.cjs#L693590-L693601) | `FunctionDeclaration` | no | `failure3` |
| [evaluation:490827-490838](../../../../../../reference/runtime/sand-eval-runner.cjs#L490827-L490838) | `FunctionDeclaration` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693590-693601](../../../../../../reference/runtime/host-main.cjs#L693590-L693601) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:490827-490838](../../../../../../reference/runtime/sand-eval-runner.cjs#L490827-L490838) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:693590

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d25300801fd9e32f2915ca3fb69681dafcdc840c91352765b8675c852655de6e`.

### evaluation:490827

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d25300801fd9e32f2915ca3fb69681dafcdc840c91352765b8675c852655de6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
