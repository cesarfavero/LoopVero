# `salvageStoreDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717923-717965](../../../../../../../reference/runtime/host-main.cjs#L717923-L717965) | `FunctionDeclaration` | no | `sourcePath2, freshDb, log5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717923-717965](../../../../../../../reference/runtime/host-main.cjs#L717923-L717965) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:717923

Calls written directly in this body: `copySalvageableSqliteRows`, `freshDb.prepare`, `openSqliteForSalvage`, `source.close`.

Assignment or increment targets: `counts.automationCompletions`, `counts.blobs`, `counts.kv`, `counts.transcript`.

SHA-256 of the source span: `d7111668d722fb7fbcd7fce9490e2dbc13b0210cb5dbaa2601d805c969976fa8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
