# `SandConnectorSecretStore.removeLanded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719159-719170](../../../../../../../reference/runtime/host-main.cjs#L719159-L719170) | `method` | no | `agentId, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719159-719170](../../../../../../../reference/runtime/host-main.cjs#L719159-L719170) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:719159

Calls written directly in this body: `new SandConnectorTokenRemovalRefusedError`, `this.inCheckedFolder`, `this.reportFailure`.

Explicit throw targets: `SandConnectorTokenRemovalRefusedError`.

SHA-256 of the source span: `c02fbda0fee2ada0e4dd19e7813176744e234343764deebe3b1a552a51a71cfa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
