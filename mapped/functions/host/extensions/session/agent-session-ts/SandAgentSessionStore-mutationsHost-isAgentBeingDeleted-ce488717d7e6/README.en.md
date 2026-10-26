# `SandAgentSessionStore.mutationsHost/isAgentBeingDeleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723408-723408](../../../../../../../reference/runtime/host-main.cjs#L723408-L723408) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723408-723408](../../../../../../../reference/runtime/host-main.cjs#L723408-L723408) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:723408 uses an implicit arrow-function return.

### host:723408

Calls written directly in this body: `this.isAgentBeingDeleted`.

SHA-256 of the source span: `d9bbdde701efcc52ddaff917539d1469c68fb1c837a2ed6c4f1a9f23edbfd0eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
