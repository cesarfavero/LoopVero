# `createOrbitService/performDispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706339-706365](../../../../../../../reference/runtime/host-main.cjs#L706339-L706365) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706339-706365](../../../../../../../reference/runtime/host-main.cjs#L706339-L706365) | 3 | 1 | 2 | 0 | 2 | 1 |

### host:706339

Calls written directly in this body: `.map`, `Promise.allSettled`, `deps.log`, `deps.proxySupervisor.dispose`, `deps.sessionController.dispose`, `errorLogTag`, `new AggregateError`, `resetChromeDiscovery`, `results.filter`, `state.discoveryPolling.dispose`, `unsubscribe`.

Assignment or increment targets: `state.disposed`, `state.generation`.

Explicit throw targets: `AggregateError`, `failures2[computed]`.

SHA-256 of the source span: `34bd39de7e16daa657936b37c5d6a6dc6dbeee83d44bd31d05e786ac1cf7b397`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
