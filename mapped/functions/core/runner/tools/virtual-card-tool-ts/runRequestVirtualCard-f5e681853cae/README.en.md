# `runRequestVirtualCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775351-775375](../../../../../../../reference/runtime/host-main.cjs#L775351-L775375) | `FunctionDeclaration` | yes | `args, deps` |
| [evaluation:574996-575020](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574996-L575020) | `FunctionDeclaration` | yes | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775351-775375](../../../../../../../reference/runtime/host-main.cjs#L775351-L775375) | 5 | 0 | 2 | 4 | 0 | 0 |
| [evaluation:574996-575020](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574996-L575020) | 5 | 0 | 2 | 4 | 0 | 0 |

### host:775351

Calls written directly in this body: `Date.now`, `buildVirtualCardApprovalMessage`, `deps.endTurn`, `deps.getAgentId`, `deps.onSendMessage`, `deps.requestCard`, `deps.retireCard`, `deps.toolDecisions.askAPerson`, `invariant`, `normalizeVirtualCardRequest`.

SHA-256 of the source span: `df00504e653f59786cf09bd5a920cdba9c26c109ba18d9af5e243275a74fb5db`.

### evaluation:574996

Calls written directly in this body: `Date.now`, `buildVirtualCardApprovalMessage`, `deps.endTurn`, `deps.getAgentId`, `deps.onSendMessage`, `deps.requestCard`, `deps.retireCard`, `deps.toolDecisions.askAPerson`, `invariant`, `normalizeVirtualCardRequest`.

SHA-256 of the source span: `df00504e653f59786cf09bd5a920cdba9c26c109ba18d9af5e243275a74fb5db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
