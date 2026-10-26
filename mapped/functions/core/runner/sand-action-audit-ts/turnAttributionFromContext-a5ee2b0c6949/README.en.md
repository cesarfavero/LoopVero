# `turnAttributionFromContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699028-699035](../../../../../../reference/runtime/host-main.cjs#L699028-L699035) | `FunctionDeclaration` | no | `ctx, agentId` |
| [evaluation:512266-512273](../../../../../../reference/runtime/sand-eval-runner.cjs#L512266-L512273) | `FunctionDeclaration` | no | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699028-699035](../../../../../../reference/runtime/host-main.cjs#L699028-L699035) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512266-512273](../../../../../../reference/runtime/sand-eval-runner.cjs#L512266-L512273) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699028

Calls written directly in this body: `ctx.get`, `getRootParentRequestId`, `subagentIdFromTurnContext`.

SHA-256 of the source span: `42f9dbb9b89c66a6e4dc491bfea66a7c7596009bc5660bc617b4721a043c25a3`.

### evaluation:512266

Calls written directly in this body: `ctx.get`, `getRootParentRequestId`, `subagentIdFromTurnContext`.

SHA-256 of the source span: `97661da2a150443317fca6cd5545380b6360da05477b83682180e9455dcd9e0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
