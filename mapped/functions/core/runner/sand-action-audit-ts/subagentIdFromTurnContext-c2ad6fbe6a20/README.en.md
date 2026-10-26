# `subagentIdFromTurnContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699130-699133](../../../../../../reference/runtime/host-main.cjs#L699130-L699133) | `FunctionDeclaration` | no | `ctx, agentId` |
| [evaluation:512665-512668](../../../../../../reference/runtime/sand-eval-runner.cjs#L512665-L512668) | `FunctionDeclaration` | no | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699130-699133](../../../../../../reference/runtime/host-main.cjs#L699130-L699133) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512665-512668](../../../../../../reference/runtime/sand-eval-runner.cjs#L512665-L512668) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699130

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `955cfe3280dc397c942c788801bc3c13b5873a41a77ea37926b9f238dd3d1c6c`.

### evaluation:512665

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `d6656f93474e645fc1762323ff849ed41a791801825ccde13d7a1a36de12639b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
