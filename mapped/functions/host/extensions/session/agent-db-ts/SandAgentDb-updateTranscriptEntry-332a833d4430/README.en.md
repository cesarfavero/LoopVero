# `SandAgentDb.updateTranscriptEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718846-718866](../../../../../../../reference/runtime/host-main.cjs#L718846-L718866) | `method` | no | `id, update, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718846-718866](../../../../../../../reference/runtime/host-main.cjs#L718846-L718866) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:718846

Calls written directly in this body: `parseTranscriptEntry`, `publishTranscriptMutation`, `this.runWrite`, `this.statements.getTranscriptEntry.get`, `update`.

SHA-256 of the source span: `ac168d3545eab4133f6534bbd7c57a1eb2d2e24524539045cab215b0b86ef9d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
