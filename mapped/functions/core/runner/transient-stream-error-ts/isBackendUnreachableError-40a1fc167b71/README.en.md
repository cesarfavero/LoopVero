# `isBackendUnreachableError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736337-736340](../../../../../../reference/runtime/host-main.cjs#L736337-L736340) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736337-736340](../../../../../../reference/runtime/host-main.cjs#L736337-L736340) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:736337

Calls written directly in this body: `hasTransportUnavailableSignal`, `isRetryableProviderError`, `new Set`.

SHA-256 of the source span: `5f8aa6c28bc1b307e5504674d72a732dbe0a30d56ec9c5b77252c562abdfe661`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
