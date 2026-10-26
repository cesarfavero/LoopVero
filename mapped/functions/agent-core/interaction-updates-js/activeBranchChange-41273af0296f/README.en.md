# `activeBranchChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476039-476046](../../../../../reference/runtime/host-main.cjs#L476039-L476046) | `FunctionExpression` | no | `path33, branchName` |
| [evaluation:255349-255356](../../../../../reference/runtime/sand-eval-runner.cjs#L255349-L255356) | `FunctionExpression` | no | `path33, branchName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476039-476046](../../../../../reference/runtime/host-main.cjs#L476039-L476046) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255349-255356](../../../../../reference/runtime/sand-eval-runner.cjs#L255349-L255356) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476039

Calls written directly in this body: `new ActiveBranchChange`, `new InteractionUpdate`.

SHA-256 of the source span: `10c0b9565ab9fdc6d52499fbdf30a5efd3c9362a77cc340c42e13c3dc6b32a32`.

### evaluation:255349

Calls written directly in this body: `new ActiveBranchChange`, `new InteractionUpdate`.

SHA-256 of the source span: `10c0b9565ab9fdc6d52499fbdf30a5efd3c9362a77cc340c42e13c3dc6b32a32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
