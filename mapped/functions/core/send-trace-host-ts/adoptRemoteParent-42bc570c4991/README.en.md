# `adoptRemoteParent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/send-trace-host.ts` · [Module README](../../../../modules/core/send-trace-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:484122-484141](../../../../../reference/runtime/host-main.cjs#L484122-L484141) | `FunctionDeclaration` | no | `traceparent, spanName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484122-484141](../../../../../reference/runtime/host-main.cjs#L484122-L484141) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:484122

Calls written directly in this body: `createContext`, `createContextFromSpanContext`, `getSpan2`, `new DisposableSpan`, `parseTraceparent`.

SHA-256 of the source span: `a6befc6ed2ce82222a1561bde22162044813afa23147d9b15c60c507ca8bc1bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
