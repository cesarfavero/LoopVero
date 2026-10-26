# `startOrbitDaemonProxy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705377-705435](../../../../../../../reference/runtime/host-main.cjs#L705377-L705435) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705377-705435](../../../../../../../reference/runtime/host-main.cjs#L705377-L705435) | 1 | 0 | 6 | 1 | 2 | 1 |

### host:705377

Calls written directly in this body: `http22.createServer`, `listenServer`, `new OrbitDaemonProxyPathError`, `new Set`, `options2.signal.throwIfAborted`, `prepareSocketPath`, `readSocketIdentity`, `sameSocketIdentity`, `server.on`, `stop`.

Assignment or increment targets: `server.maxConnections`, `socketIdentity`.

Explicit throw targets: `OrbitDaemonProxyPathError`, `error64`.

SHA-256 of the source span: `e7574842bc2760260707caa379ede4cae4e65922ec9c678d13ef1154f8e9cbe7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
