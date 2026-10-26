# `SandAgentDb.getTranscriptEntryIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718658-718665](../../../../../../../reference/runtime/host-main.cjs#L718658-L718665) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718658-718665](../../../../../../../reference/runtime/host-main.cjs#L718658-L718665) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:718658

Calls written directly in this body: `ids.add`, `new Set`, `this.statements.listTranscriptEntryIds.all`.

SHA-256 of the source span: `455339c1f24be45502ab7ff286f4606e8d8dc7dd3f302197918431e2b445aa67`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
