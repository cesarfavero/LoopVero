# `../packages/context/dist/core.js/_ContextImpl.withDeadline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225339-225347](../../../../../reference/runtime/host-main.cjs#L225339-L225347) | `method` | no | `deadline` |
| [evaluation:1827-1835](../../../../../reference/runtime/sand-eval-runner.cjs#L1827-L1835) | `method` | no | `deadline` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225339-225347](../../../../../reference/runtime/host-main.cjs#L225339-L225347) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:1827-1835](../../../../../reference/runtime/sand-eval-runner.cjs#L1827-L1835) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225339

Calls written directly in this body: `Date.now`, `controller.abort`, `createChildController`, `deadline.getTime`, `new Error`, `new _ContextImpl`, `this.withTimeout`.

SHA-256 of the source span: `b4820c3d5086ceeead798f7be465612fb3df4f743d49ad43444238a4b5f6d7bc`.

### evaluation:1827

Calls written directly in this body: `Date.now`, `controller.abort`, `createChildController`, `deadline.getTime`, `new Error`, `new _ContextImpl`, `this.withTimeout`.

SHA-256 of the source span: `b4820c3d5086ceeead798f7be465612fb3df4f743d49ad43444238a4b5f6d7bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
