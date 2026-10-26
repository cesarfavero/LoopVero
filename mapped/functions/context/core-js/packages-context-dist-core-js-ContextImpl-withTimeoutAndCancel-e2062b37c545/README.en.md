# `../packages/context/dist/core.js/_ContextImpl.withTimeoutAndCancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225352-225356](../../../../../reference/runtime/host-main.cjs#L225352-L225356) | `method` | no | `ms2` |
| [evaluation:1840-1844](../../../../../reference/runtime/sand-eval-runner.cjs#L1840-L1844) | `method` | no | `ms2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225352-225356](../../../../../reference/runtime/host-main.cjs#L225352-L225356) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1840-1844](../../../../../reference/runtime/sand-eval-runner.cjs#L1840-L1844) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225352

Calls written directly in this body: `cancelCtx.withTimeout`, `this.withCancel`.

SHA-256 of the source span: `f9675c0fa066a28dcc3e80742d5c7fcae8299fca02c58ff60adf791fef403cfb`.

### evaluation:1840

Calls written directly in this body: `cancelCtx.withTimeout`, `this.withCancel`.

SHA-256 of the source span: `f9675c0fa066a28dcc3e80742d5c7fcae8299fca02c58ff60adf791fef403cfb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
