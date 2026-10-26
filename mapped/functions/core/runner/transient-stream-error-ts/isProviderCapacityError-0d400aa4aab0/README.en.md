# `isProviderCapacityError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736333-736336](../../../../../../reference/runtime/host-main.cjs#L736333-L736336) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736333-736336](../../../../../../reference/runtime/host-main.cjs#L736333-L736336) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:736333

Calls written directly in this body: `hasProviderCapacitySignal`, `isRetryableProviderError`, `new Set`.

SHA-256 of the source span: `25160daeb66f437d7a13bfada50751efe09a6e44c592c0fb4615ef3ffb39bd2c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
