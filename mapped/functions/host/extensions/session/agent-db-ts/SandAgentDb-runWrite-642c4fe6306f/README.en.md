# `SandAgentDb.runWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718340-718373](../../../../../../../reference/runtime/host-main.cjs#L718340-L718373) | `method` | no | `operation, write4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718340-718373](../../../../../../../reference/runtime/host-main.cjs#L718340-L718373) | 8 | 0 | 0 | 5 | 2 | 2 |

### host:718340

Calls written directly in this body: `String`, `boundedConnectErrorClassOf`, `bumpDbWriteGeneration`, `isSqliteBusyError`, `isSqliteCorruptError`, `new Error`, `reportHostDiagnostic`, `this.onBusyError`, `this.options.onFailure`, `this.recoverInPlace`, `write4`.

Explicit throw targets: `error64`, `retryError`.

SHA-256 of the source span: `7c36f9fc0c5a85292101266b412786eba585a6405f2f1688eb52587c9bbd519d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
