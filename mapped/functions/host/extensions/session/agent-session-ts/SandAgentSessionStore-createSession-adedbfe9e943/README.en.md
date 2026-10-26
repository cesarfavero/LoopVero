# `SandAgentSessionStore.createSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723146-723148](../../../../../../../reference/runtime/host-main.cjs#L723146-L723148) | `method` | yes | `profile, origin = "user", options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723146-723148](../../../../../../../reference/runtime/host-main.cjs#L723146-L723148) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723146

Calls written directly in this body: `this.materialization.createSession`.

SHA-256 of the source span: `b50b2a3f41faf922cbf04abae45b4d766bb907d59677c1a7a7f4a7415df33325`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
