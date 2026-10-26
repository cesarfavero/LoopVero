# `SandAgentDb.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718292-718310](../../../../../../../reference/runtime/host-main.cjs#L718292-L718310) | `method` | no | `dbPath, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718292-718310](../../../../../../../reference/runtime/host-main.cjs#L718292-L718310) | 0 | 0 | 0 | 0 | 1 | 1 |

### host:718292

Calls written directly in this body: `agentIdFromDbPath`, `ensureSandDataDirSync`, `liveDbHandleCount`, `openConfiguredDb`, `prepareStatements`, `registerLiveDbHandle`, `this.close`, `this.seedDefaultMetadataIfMissing`.

Assignment or increment targets: `this.agentDirName`, `this.db`, `this.dbPath`, `this.handleRegistered`, `this.onBusyError`, `this.options`, `this.resolvedDbPath`, `this.statements`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `35ab9c789d6eb56f0e12516047e999c6efb0ead669916217d7bcfa0ccbb219fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
