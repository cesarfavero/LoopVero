# `SandAgentSessionStore.rosterHost/recoverAgentWithMissingDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723400-723400](../../../../../../../reference/runtime/host-main.cjs#L723400-L723400) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723400-723400](../../../../../../../reference/runtime/host-main.cjs#L723400-L723400) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:723400 uses an implicit arrow-function return.

### host:723400

Calls written directly in this body: `recoverAgentWithMissingDb`, `this.mutationsHost`.

SHA-256 of the source span: `2ad6ad010c250431f6dcb8d049f185566da81272f6905609c388e045d96db68f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
