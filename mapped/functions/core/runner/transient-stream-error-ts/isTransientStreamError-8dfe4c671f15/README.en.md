# `isTransientStreamError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736214-736216](../../../../../../reference/runtime/host-main.cjs#L736214-L736216) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589895-589897](../../../../../../reference/runtime/sand-eval-runner.cjs#L589895-L589897) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736214-736216](../../../../../../reference/runtime/host-main.cjs#L736214-L736216) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589895-589897](../../../../../../reference/runtime/sand-eval-runner.cjs#L589895-L589897) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736214

Calls written directly in this body: `classify`, `new Set`.

SHA-256 of the source span: `911e20b341c1ab32199f9d8319ad5b66c8bdec27237add6a80229c0ae82098f2`.

### evaluation:589895

Calls written directly in this body: `classify3`, `new Set`.

SHA-256 of the source span: `130dae0dba88a6bdeaf0145be8f37fe927ea2c2925306b258421a4c9599b8982`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
