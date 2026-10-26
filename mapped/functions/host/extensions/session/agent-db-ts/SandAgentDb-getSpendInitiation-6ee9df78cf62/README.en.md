# `SandAgentDb.getSpendInitiation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718775-718780](../../../../../../../reference/runtime/host-main.cjs#L718775-L718780) | `method` | no | `requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718775-718780](../../../../../../../reference/runtime/host-main.cjs#L718775-L718780) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:718775

Calls written directly in this body: `parseSandSpendInitiationEntry`, `this.statements.getTranscriptEntry.get`.

SHA-256 of the source span: `c4ef75fb9bdd3565a3bd72fdbf0e1dab61d54289eed6a670d8af29ed6bc419f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
