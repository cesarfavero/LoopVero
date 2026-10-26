# `SandAgentDb.recoverInPlace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718374-718407](../../../../../../../reference/runtime/host-main.cjs#L718374-L718407) | `method` | no | `cause` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718374-718407](../../../../../../../reference/runtime/host-main.cjs#L718374-L718407) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:718374

Calls written directly in this body: `boundedConnectErrorClassOf`, `liveDbHandleCount`, `prepareStatements`, `recoverCorruptStoreDb`, `releaseLiveDbHandle`, `reportHostDiagnostic`, `reportSessionDiagnostic`, `this.db.close`, `this.options.onFailure`, `this.seedDefaultMetadataIfMissing`.

Assignment or increment targets: `this.db`, `this.handleRegistered`, `this.hasRecoveredFromCorruption`, `this.isClosed`, `this.statements`.

SHA-256 of the source span: `4e45ee014884a51a12dbc0ac4e0b3313a5800cf9b82e1b98d2dcc57000ce6904`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
