# `createOrbitDaemonProxySupervisor/startProxyWithRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy-supervisor.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-supervisor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705574-705595](../../../../../../../reference/runtime/host-main.cjs#L705574-L705595) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705574-705595](../../../../../../../reference/runtime/host-main.cjs#L705574-L705595) | 2 | 1 | 2 | 3 | 0 | 2 |

### host:705574

Calls written directly in this body: `deps.log`, `deps.policies.startRetry.schedule`, `deps.startProxy`, `errorLogTag`.

Assignment or increment targets: `activeProxy`, `attempt`.

SHA-256 of the source span: `bc3ea6c42744f356a3752bb332c00a9800236bd0521f24222ba95cdcef6d94c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
