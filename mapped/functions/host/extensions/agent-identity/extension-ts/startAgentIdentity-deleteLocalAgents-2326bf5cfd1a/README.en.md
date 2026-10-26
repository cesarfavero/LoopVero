# `startAgentIdentity/deleteLocalAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496694-496694](../../../../../../../reference/runtime/host-main.cjs#L496694-L496694) | `ArrowFunctionExpression` | no | `agentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496694-496694](../../../../../../../reference/runtime/host-main.cjs#L496694-L496694) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496694 uses an implicit arrow-function return.

### host:496694

Calls written directly in this body: `context2.deps.transcript.deleteAgents`.

SHA-256 of the source span: `fe8c1e9e54cd070bfaff01e5c15f7fbe0d6777ba1950a9bcde5cc843bc799583`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
