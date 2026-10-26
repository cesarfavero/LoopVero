# `WebSocketCdpConnection.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543056-543062](../../../../../../../reference/runtime/host-main.cjs#L543056-L543062) | `method` | no | `socket, reportFailure` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543056-543062](../../../../../../../reference/runtime/host-main.cjs#L543056-L543062) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:543056

Calls written directly in this body: `socket.addEventListener`.

Assignment or increment targets: `this.reportFailure`, `this.socket`.

SHA-256 of the source span: `cd48e6edb3d4c9f9847764777e899cd759342a54300e22d60151ec0ad9880eaf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
