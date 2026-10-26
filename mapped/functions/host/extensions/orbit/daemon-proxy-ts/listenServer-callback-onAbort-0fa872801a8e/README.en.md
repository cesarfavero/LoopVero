# `listenServer/<callback>/onAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705517-705525](../../../../../../../reference/runtime/host-main.cjs#L705517-L705525) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705517-705525](../../../../../../../reference/runtime/host-main.cjs#L705517-L705525) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:705517

Calls written directly in this body: `finish`, `server.close`, `signal.throwIfAborted`.

SHA-256 of the source span: `032cf7e156d07fe51a95638072268d2e332048ad0e7828c1df9b795668a7584c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
