# `WebSocketCdpConnection.close`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543097-543104](../../../../../../../reference/runtime/host-main.cjs#L543097-L543104) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543097-543104](../../../../../../../reference/runtime/host-main.cjs#L543097-L543104) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:543097

Calls written directly in this body: `errorLogTag`, `this.failPending`, `this.reportFailure`, `this.socket.close`.

SHA-256 of the source span: `737731e1403efec287fbaddec7d0110f31ad99d6869e8db48585192f4352bc45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
