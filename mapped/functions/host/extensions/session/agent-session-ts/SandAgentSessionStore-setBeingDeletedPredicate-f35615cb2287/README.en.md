# `SandAgentSessionStore.setBeingDeletedPredicate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723122-723124](../../../../../../../reference/runtime/host-main.cjs#L723122-L723124) | `method` | no | `isBeingDeleted` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723122-723124](../../../../../../../reference/runtime/host-main.cjs#L723122-L723124) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:723122

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.isTranscriptDeleting`.

SHA-256 of the source span: `1434bddca9cc6fde099f1eb9ede6104b6ef13853582e6b8dba85873685ed344b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
