# `createChildController/abort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225268-225271](../../../../../reference/runtime/host-main.cjs#L225268-L225271) | `FunctionExpression` | no | `reason` |
| [evaluation:1756-1759](../../../../../reference/runtime/sand-eval-runner.cjs#L1756-L1759) | `FunctionExpression` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225268-225271](../../../../../reference/runtime/host-main.cjs#L225268-L225271) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:1756-1759](../../../../../reference/runtime/sand-eval-runner.cjs#L1756-L1759) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225268

Calls written directly in this body: `controller.abort`, `parentSignal.removeEventListener`.

SHA-256 of the source span: `43503bc75305f202e579f1a10db8dc2d7ed1a2d36969a7f24f931f3863c2b704`.

### evaluation:1756

Calls written directly in this body: `controller.abort`, `parentSignal.removeEventListener`.

SHA-256 of the source span: `43503bc75305f202e579f1a10db8dc2d7ed1a2d36969a7f24f931f3863c2b704`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
