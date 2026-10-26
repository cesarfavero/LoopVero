# `hasProviderCapacitySignal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736369-736386](../../../../../../reference/runtime/host-main.cjs#L736369-L736386) | `FunctionDeclaration` | no | `error64, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736369-736386](../../../../../../reference/runtime/host-main.cjs#L736369-L736386) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:736369

Calls written directly in this body: `Array.isArray`, `classifyError2`, `fields3.errors.some`, `hasProviderCapacitySignal`, `hasTransportErrno`, `seen.add`, `seen.has`.

SHA-256 of the source span: `2f1c364b53e68b55c9fa81889f2444e0563570a686dbba5d2fcfcf8b543bc99d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
