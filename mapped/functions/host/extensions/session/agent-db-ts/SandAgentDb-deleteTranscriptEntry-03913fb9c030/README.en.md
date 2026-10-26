# `SandAgentDb.deleteTranscriptEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718867-718886](../../../../../../../reference/runtime/host-main.cjs#L718867-L718886) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718867-718886](../../../../../../../reference/runtime/host-main.cjs#L718867-L718886) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:718867

Calls written directly in this body: `publishTranscriptMutation`, `this.runWrite`, `this.statements.getTranscriptEntrySeq.get`.

Assignment or increment targets: `seq2`.

SHA-256 of the source span: `c55237b672aa3881c84acef5701d169dccfcacb2f07f4c6f9777b46e3c397cbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
