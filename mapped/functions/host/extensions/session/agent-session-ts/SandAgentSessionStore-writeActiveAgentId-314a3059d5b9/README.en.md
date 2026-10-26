# `SandAgentSessionStore.writeActiveAgentId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723252-723258](../../../../../../../reference/runtime/host-main.cjs#L723252-L723258) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723252-723258](../../../../../../../reference/runtime/host-main.cjs#L723252-L723258) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:723252

Calls written directly in this body: `JSON.stringify`, `this.activeAgentPointerPath`, `writeSandDataFileSync`.

SHA-256 of the source span: `02b4bf264048a1e36ceeaed0e2f05dffce95f9ddf35ccffa658f11baf802fe12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
