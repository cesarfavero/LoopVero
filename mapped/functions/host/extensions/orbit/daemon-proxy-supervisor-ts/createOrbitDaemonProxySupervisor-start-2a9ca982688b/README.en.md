# `createOrbitDaemonProxySupervisor/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy-supervisor.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-supervisor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705596-705601](../../../../../../../reference/runtime/host-main.cjs#L705596-L705601) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705596-705601](../../../../../../../reference/runtime/host-main.cjs#L705596-L705601) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:705596

Calls written directly in this body: `startProxyWithRetry`.

Assignment or increment targets: `startupPromise`.

SHA-256 of the source span: `e3d8c50b29718c9e84251b32f496c4785ad8a21f3b1e68e6108d00e4882bf253`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
