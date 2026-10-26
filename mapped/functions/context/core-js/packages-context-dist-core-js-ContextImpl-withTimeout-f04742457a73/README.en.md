# `../packages/context/dist/core.js/_ContextImpl.withTimeout`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225328-225338](../../../../../reference/runtime/host-main.cjs#L225328-L225338) | `method` | no | `ms2` |
| [evaluation:1816-1826](../../../../../reference/runtime/sand-eval-runner.cjs#L1816-L1826) | `method` | no | `ms2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225328-225338](../../../../../reference/runtime/host-main.cjs#L225328-L225338) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1816-1826](../../../../../reference/runtime/sand-eval-runner.cjs#L1816-L1826) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225328

Calls written directly in this body: `controller.signal.addEventListener`, `createChildController`, `new _ContextImpl`, `setTimeout`.

SHA-256 of the source span: `81ba287e415a7616c6cee6219ec10c9b9db8662b8f48fe58981b4fa5e0a421e0`.

### evaluation:1816

Calls written directly in this body: `controller.signal.addEventListener`, `createChildController`, `new _ContextImpl`, `setTimeout`.

SHA-256 of the source span: `81ba287e415a7616c6cee6219ec10c9b9db8662b8f48fe58981b4fa5e0a421e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
