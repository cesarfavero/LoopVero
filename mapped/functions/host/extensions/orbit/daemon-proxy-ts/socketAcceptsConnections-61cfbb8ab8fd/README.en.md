# `socketAcceptsConnections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705467-705496](../../../../../../../reference/runtime/host-main.cjs#L705467-L705496) | `FunctionDeclaration` | yes | `path33, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705467-705496](../../../../../../../reference/runtime/host-main.cjs#L705467-L705496) | 1 | 0 | 1 | 1 | 2 | 1 |

### host:705467

Calls written directly in this body: `new OrbitDaemonProxyPathError`, `new Promise`, `socket.destroy`, `socketProbeDeadline.run`.

Explicit throw targets: `OrbitDaemonProxyPathError`, `error64`.

SHA-256 of the source span: `a7fe70724e12dc6c9a87c82d910baee9e6728ed387dcc8c0dbc607a7066a6dbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
