# `createOrbitDaemonProxySupervisor/performDispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy-supervisor.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-supervisor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705602-705609](../../../../../../../reference/runtime/host-main.cjs#L705602-L705609) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705602-705609](../../../../../../../reference/runtime/host-main.cjs#L705602-L705609) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:705602

Calls written directly in this body: `abortController.abort`, `proxy.stop`.

Assignment or increment targets: `activeProxy`, `disposed`.

SHA-256 of the source span: `3a8630a64bcc2a0c118c9b3ba98bb85a23f2062130f1672d54b145b2785adb5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
