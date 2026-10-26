# `createOrbitService/resetChromeDiscovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706243-706247](../../../../../../../reference/runtime/host-main.cjs#L706243-L706247) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706243-706247](../../../../../../../reference/runtime/host-main.cjs#L706243-L706247) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:706243

Calls written directly in this body: `new AbortController`, `state.discoveryAbortController.abort`.

Assignment or increment targets: `state.discoveryAbortController`, `state.inFlightChromeDiscovery`.

SHA-256 of the source span: `853bcc16d9ab7ea42003c97b0e79c9d34445641fea803f96a22abad09c2de6ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
