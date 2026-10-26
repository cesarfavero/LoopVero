# `SandConnectorSecretStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719019-719026](../../../../../../../reference/runtime/host-main.cjs#L719019-L719026) | `method` | no | `secretsRoot, log5, owner, removeEntry = unlinkEntry, openers = { openDurableFileSync, openNoFollowSync: openNoFollowSync2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719019-719026](../../../../../../../reference/runtime/host-main.cjs#L719019-L719026) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:719019

Calls written directly in this body: `hostNoFollowRoot`.

Assignment or increment targets: `this.log`, `this.noFollow`, `this.openers`, `this.owner`, `this.removeEntry`, `this.secretsRoot`.

SHA-256 of the source span: `93352e4c6039254914ab396391e2fcbf5923347ca1185f7587775cde3b282d90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
