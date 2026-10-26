# `requestReviewedApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699238-699249](../../../../../../../reference/runtime/host-main.cjs#L699238-L699249) | `FunctionDeclaration` | yes | `ctx, controller, request5, decision` |
| [evaluation:489970-489981](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489970-L489981) | `FunctionDeclaration` | yes | `ctx, controller, request3, decision` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699238-699249](../../../../../../../reference/runtime/host-main.cjs#L699238-L699249) | 3 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:489970-489981](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489970-L489981) | 3 | 0 | 1 | 1 | 0 | 0 |

### host:699238

Calls written directly in this body: `.recordApproval`, `ctx.get`, `withToolExecutionTimeoutSuspended`.

SHA-256 of the source span: `d10cd0964e98263ce8c2e3b2bac310e608df3e36a341a1d933d4740d094feff4`.

### evaluation:489970

Calls written directly in this body: `.recordApproval`, `ctx.get`, `withToolExecutionTimeoutSuspended`.

SHA-256 of the source span: `ad43462f682d35e9178f1334f006eb9f6b19efa16561ed605ea81c54c8b6861b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
