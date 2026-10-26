# `openConfiguredDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717787-717834](../../../../../../../reference/runtime/host-main.cjs#L717787-L717834) | `FunctionDeclaration` | no | `dbPath, agentDirName, options2, hasOtherLiveHandles, initDb = initConfiguredDb` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717787-717834](../../../../../../../reference/runtime/host-main.cjs#L717787-L717834) | 5 | 1 | 0 | 3 | 2 | 2 |

### host:717787

Calls written directly in this body: `db.close`, `errorLogTag`, `initDb`, `isSqliteCorruptError`, `isSqliteIoError`, `isStoreDbHealthy`, `new Error`, `new SandAgentDbIntegrityError`, `recoverCorruptStoreDb`, `reportSessionDiagnostic`.

Assignment or increment targets: `attempt`, `db`, `openError`.

Explicit throw targets: `SandAgentDbIntegrityError`, `openError`.

SHA-256 of the source span: `23ba49a8e344826747433f012aaaa87218510ffa35beba42ef7b816a83afbdda`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
