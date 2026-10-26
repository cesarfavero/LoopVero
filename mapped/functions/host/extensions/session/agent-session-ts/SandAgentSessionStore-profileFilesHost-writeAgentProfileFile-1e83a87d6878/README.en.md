# `SandAgentSessionStore.profileFilesHost/writeAgentProfileFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723419-723419](../../../../../../../reference/runtime/host-main.cjs#L723419-L723419) | `ArrowFunctionExpression` | no | `agentId, profile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723419-723419](../../../../../../../reference/runtime/host-main.cjs#L723419-L723419) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:723419 uses an implicit arrow-function return.

### host:723419

Calls written directly in this body: `this.writeAgentProfileFile`.

SHA-256 of the source span: `c8982cbc0df4d78ab90549f3731436b1109966ae38b10243666a4f9f6e573f60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
