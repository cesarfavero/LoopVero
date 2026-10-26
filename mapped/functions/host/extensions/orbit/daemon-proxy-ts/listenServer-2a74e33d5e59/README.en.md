# `listenServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705497-705532](../../../../../../../reference/runtime/host-main.cjs#L705497-L705532) | `FunctionDeclaration` | yes | `server, path33, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705497-705532](../../../../../../../reference/runtime/host-main.cjs#L705497-L705532) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:705497

Calls written directly in this body: `new Promise`, `signal.throwIfAborted`.

SHA-256 of the source span: `e601d7790b403a4d6da2122cd9835dc2a107eafb5ba097adda75ec27be0e5b08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
