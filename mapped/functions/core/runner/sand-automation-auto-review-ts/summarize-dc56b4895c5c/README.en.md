# `summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/sand-automation-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-automation-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762269-762276](../../../../../../reference/runtime/host-main.cjs#L762269-L762276) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:554879-554886](../../../../../../reference/runtime/sand-eval-runner.cjs#L554879-L554886) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762269-762276](../../../../../../reference/runtime/host-main.cjs#L762269-L762276) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:762269 uses an implicit arrow-function return.
| [evaluation:554879-554886](../../../../../../reference/runtime/sand-eval-runner.cjs#L554879-L554886) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:554879 uses an implicit arrow-function return.

### host:762269

Calls written directly in this body: `describeTrigger`, `summarizeSandAutomationWriteAction`, `target.referencingRoutines.map`.

SHA-256 of the source span: `97c9f5ea806c05ca1646eb10349d6828f623fab8531a5d5ab28ceb0b88001007`.

### evaluation:554879

Calls written directly in this body: `describeTrigger`, `summarizeSandAutomationWriteAction`, `target.referencingRoutines.map`.

SHA-256 of the source span: `97c9f5ea806c05ca1646eb10349d6828f623fab8531a5d5ab28ceb0b88001007`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
