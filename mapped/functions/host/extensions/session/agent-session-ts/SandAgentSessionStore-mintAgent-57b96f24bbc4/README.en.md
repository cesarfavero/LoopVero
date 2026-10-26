# `SandAgentSessionStore.mintAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723143-723145](../../../../../../../reference/runtime/host-main.cjs#L723143-L723145) | `method` | yes | `mint2, providedId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723143-723145](../../../../../../../reference/runtime/host-main.cjs#L723143-L723145) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723143

Calls written directly in this body: `this.materialization.mintAgent`.

SHA-256 of the source span: `f4f0ab562e4c1b3f85a80f01933b33689837e9b18041864f349a46087ef0fcc4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
