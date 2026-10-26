# `SandAgentDb.appendTranscriptEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718802-718816](../../../../../../../reference/runtime/host-main.cjs#L718802-L718816) | `method` | no | `rawEntry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718802-718816](../../../../../../../reference/runtime/host-main.cjs#L718802-L718816) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:718802

Calls written directly in this body: `publishTranscriptMutation`, `this.runWrite`, `withTimestampMs`.

SHA-256 of the source span: `d0acf7f51f104d11959b37a134a216fdcfeadb52b6cd8526e1fa0a67e6deb64c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
