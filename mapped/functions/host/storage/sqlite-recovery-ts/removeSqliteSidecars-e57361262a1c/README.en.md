# `removeSqliteSidecars`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717341-717348](../../../../../../reference/runtime/host-main.cjs#L717341-L717348) | `FunctionDeclaration` | no | `dbPath` |
| [state-worker:749-756](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L749-L756) | `FunctionDeclaration` | no | `dbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717341-717348](../../../../../../reference/runtime/host-main.cjs#L717341-L717348) | 0 | 1 | 0 | 0 | 0 | 1 |
| [state-worker:749-756](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L749-L756) | 0 | 1 | 0 | 0 | 0 | 1 |

### host:717341

Calls written directly in this body: `removeSandDataTreeSync`.

SHA-256 of the source span: `795a320a0764669c9ed4f1a4f559e508aee12574b852683dc541eb6619879db1`.

### state-worker:749

Calls written directly in this body: `removeSandDataTreeSync`.

SHA-256 of the source span: `795a320a0764669c9ed4f1a4f559e508aee12574b852683dc541eb6619879db1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
