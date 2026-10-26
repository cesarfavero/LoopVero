# `SandAgentDb.getNewestDividerAnchorTimestampMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718672-718676](../../../../../../../reference/runtime/host-main.cjs#L718672-L718676) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718672-718676](../../../../../../../reference/runtime/host-main.cjs#L718672-L718676) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:718672

Calls written directly in this body: `Number.isFinite`, `this.statements.newestDividerAnchorTimestamp.get`.

SHA-256 of the source span: `fbae22c74a1198f279fab772ddbac1a5a187e025dfeeec97f0321d5ba3d53e52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
