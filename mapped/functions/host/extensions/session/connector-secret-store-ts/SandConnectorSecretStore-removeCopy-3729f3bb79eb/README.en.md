# `SandConnectorSecretStore.removeCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719205-719216](../../../../../../../reference/runtime/host-main.cjs#L719205-L719216) | `method` | no | `folder, copy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719205-719216](../../../../../../../reference/runtime/host-main.cjs#L719205-L719216) | 2 | 0 | 0 | 1 | 1 | 1 |

### host:719205

Calls written directly in this body: `isFileOrGone`, `this.log`, `this.removeFinalEntry`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ba39276fd36dfeb9f4fc7c17185c151c980dd1e6b2518ec548c12025bbc010d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
