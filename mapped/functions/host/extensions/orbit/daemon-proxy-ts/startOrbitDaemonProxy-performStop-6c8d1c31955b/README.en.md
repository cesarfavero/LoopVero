# `startOrbitDaemonProxy/performStop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705397-705409](../../../../../../../reference/runtime/host-main.cjs#L705397-L705409) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705397-705409](../../../../../../../reference/runtime/host-main.cjs#L705397-L705409) | 1 | 1 | 2 | 0 | 0 | 0 |

### host:705397

Calls written directly in this body: `closeServer`, `http2Session.destroy`, `unlinkSocketIfSame`.

Assignment or increment targets: `stopping`.

SHA-256 of the source span: `a7cc7dbf9d8c5dcdfef78aa73fbcf8f3e9d39d3429a566fc0be61ad42eedb627`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
