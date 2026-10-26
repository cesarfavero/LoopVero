# `SandConnectorSecretStore.removeCopies`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719143-719158](../../../../../../../reference/runtime/host-main.cjs#L719143-L719158) | `method` | no | `agentId, path33, folder` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719143-719158](../../../../../../../reference/runtime/host-main.cjs#L719143-L719158) | 0 | 1 | 0 | 1 | 0 | 2 |

### host:719143

Calls written directly in this body: `.filter`, `this.removeCopy`, `this.reportFailure`.

Assignment or increment targets: `copies`.

SHA-256 of the source span: `1ebb7a515b61032268814d4fd32be10f4b36656dc3ce3bb8a913a7e988a03205`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
