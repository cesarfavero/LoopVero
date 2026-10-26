# `SandConnectorSecretStore.removeAgentPlatform`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719128-719142](../../../../../../../reference/runtime/host-main.cjs#L719128-L719142) | `method` | no | `agentId, platform2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719128-719142](../../../../../../../reference/runtime/host-main.cjs#L719128-L719142) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:719128

Calls written directly in this body: `isSafeFolderId`, `new SandConnectorTokenRemovalRefusedError`, `this.filePath`, `this.inCheckedFolder`, `this.open`, `this.owner.onWriteFailed`, `this.read`, `this.reportFailure`.

Explicit throw targets: `SandConnectorTokenRemovalRefusedError`.

SHA-256 of the source span: `5dd2fae53bb9cba3b7730ec220bd888948a181505cb9593483a56ca03b72c007`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
