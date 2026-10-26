# `SandConnectorSecretStore.setSecret`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719090-719121](../../../../../../../reference/runtime/host-main.cjs#L719090-L719121) | `method` | no | `agentId, platform2, field, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719090-719121](../../../../../../../reference/runtime/host-main.cjs#L719090-L719121) | 7 | 0 | 0 | 7 | 0 | 2 |

### host:719090

Calls written directly in this body: `JSON.stringify`, `file2.handle.write`, `isMissingPathError`, `isSafeFolderId`, `this.filePath`, `this.forgetFailures`, `this.open`, `this.openers.openNoFollowSync`, `this.owner.onWriteFailed`, `this.read`, `this.removeLanded`, `this.reportFailure`.

SHA-256 of the source span: `e77c7704d4f8e67d39140c427e17706177786203348f5c9e5f79433287a2940b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
