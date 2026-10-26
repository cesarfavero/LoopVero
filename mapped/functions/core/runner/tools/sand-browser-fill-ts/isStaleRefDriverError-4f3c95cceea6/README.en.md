# `isStaleRefDriverError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727262-727264](../../../../../../../reference/runtime/host-main.cjs#L727262-L727264) | `FunctionDeclaration` | no | `error64` |
| [evaluation:561779-561781](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561779-L561781) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727262-727264](../../../../../../../reference/runtime/host-main.cjs#L727262-L727264) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561779-561781](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561779-L561781) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:727262

Calls written directly in this body: `error64.includes`.

SHA-256 of the source span: `4ef1e51855cddcd7929f77c6071273eadaf0b525c60d6b2c8560f0039384dd8b`.

### evaluation:561779

Calls written directly in this body: `error63.includes`.

SHA-256 of the source span: `2703258b98778deac80e38616c8154e06f5a324734328c11bcd70fca163499e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
