# `../packages/context/dist/core.js/_ContextImpl.withCancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225323-225327](../../../../../reference/runtime/host-main.cjs#L225323-L225327) | `method` | no | `(none)` |
| [evaluation:1811-1815](../../../../../reference/runtime/sand-eval-runner.cjs#L1811-L1815) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225323-225327](../../../../../reference/runtime/host-main.cjs#L225323-L225327) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1811-1815](../../../../../reference/runtime/sand-eval-runner.cjs#L1811-L1815) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225323

Calls written directly in this body: `createChildController`, `new _ContextImpl`.

SHA-256 of the source span: `692f935305a2a515203c9d0ad7fdbc6d04701ff50c0717660fe5477677a0a635`.

### evaluation:1811

Calls written directly in this body: `createChildController`, `new _ContextImpl`.

SHA-256 of the source span: `692f935305a2a515203c9d0ad7fdbc6d04701ff50c0717660fe5477677a0a635`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
