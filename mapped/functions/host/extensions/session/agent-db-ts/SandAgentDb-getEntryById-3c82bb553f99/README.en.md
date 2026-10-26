# `SandAgentDb.getEntryById`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718708-718713](../../../../../../../reference/runtime/host-main.cjs#L718708-L718713) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718708-718713](../../../../../../../reference/runtime/host-main.cjs#L718708-L718713) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:718708

Calls written directly in this body: `parseTranscriptEntry`, `this.statements.getTranscriptEntry.get`.

SHA-256 of the source span: `8eb4f3b257ab91c4ed02c5464babd9f5b0cdb43645d55cf1185243c1af9e3c10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
