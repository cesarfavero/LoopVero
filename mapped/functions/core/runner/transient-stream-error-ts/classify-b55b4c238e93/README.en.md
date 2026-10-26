# `classify`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736217-736232](../../../../../../reference/runtime/host-main.cjs#L736217-L736232) | `FunctionDeclaration` | no | `error64, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736217-736232](../../../../../../reference/runtime/host-main.cjs#L736217-L736232) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:736217

Calls written directly in this body: `Array.isArray`, `TRANSIENT_ERRNO_CODES.has`, `classify`, `fields3.code.toUpperCase`, `fields3.errors.some`, `messageLooksTransient`, `seen.add`, `seen.has`.

SHA-256 of the source span: `e152d3be1a90c5b2b71e0240e83e5296cf7a4022ab100b2306413b703c26ad18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
