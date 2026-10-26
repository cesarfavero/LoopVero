# `WebSocketCdpConnection.send/<callback>/<callback>/reject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543082-543085](../../../../../../../reference/runtime/host-main.cjs#L543082-L543085) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543082-543085](../../../../../../../reference/runtime/host-main.cjs#L543082-L543085) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:543082

Calls written directly in this body: `reject2`, `signal.removeEventListener`.

SHA-256 of the source span: `78d46441772f656f587df53631d3539e8af867d0b538252f9d933bb0236fce75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
