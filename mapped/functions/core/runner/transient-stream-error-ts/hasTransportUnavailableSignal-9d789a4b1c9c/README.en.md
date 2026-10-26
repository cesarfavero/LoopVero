# `hasTransportUnavailableSignal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736354-736368](../../../../../../reference/runtime/host-main.cjs#L736354-L736368) | `FunctionDeclaration` | no | `error64, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736354-736368](../../../../../../reference/runtime/host-main.cjs#L736354-L736368) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736354

Calls written directly in this body: `Array.isArray`, `classifyError2`, `fields3.errors.some`, `hasTransportErrno`, `hasTransportUnavailableSignal`, `seen.add`, `seen.has`.

SHA-256 of the source span: `e259d15dbdd225f83523f3bd79215f878b80555df86212e681a64c5fd63baa9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
