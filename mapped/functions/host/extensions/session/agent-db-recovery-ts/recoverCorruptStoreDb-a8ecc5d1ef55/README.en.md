# `recoverCorruptStoreDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717870-717902](../../../../../../../reference/runtime/host-main.cjs#L717870-L717902) | `FunctionDeclaration` | no | `dbPath, agentDirName, options2, cause` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717870-717902](../../../../../../../reference/runtime/host-main.cjs#L717870-L717902) | 3 | 0 | 0 | 1 | 0 | 1 |

### host:717870

Calls written directly in this body: `errorLogTag`, `initConfiguredDb`, `options2.onCorruptionRecovered`, `publishTranscriptMutation`, `quarantineCorruptDb`, `reportSessionDiagnostic`, `salvageStoreDb`.

SHA-256 of the source span: `237aef74eacfc722bb8b6d1c5c77374eaf8a605add1324e351767023d27d18b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
