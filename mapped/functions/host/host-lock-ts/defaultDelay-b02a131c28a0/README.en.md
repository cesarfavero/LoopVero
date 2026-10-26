# `defaultDelay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-lock.ts` · [Module README](../../../../modules/host/host-lock-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494223-494225](../../../../../reference/runtime/host-main.cjs#L494223-L494225) | `FunctionDeclaration` | no | `ms2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494223-494225](../../../../../reference/runtime/host-main.cjs#L494223-L494225) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494223

Calls written directly in this body: `new Promise`.

SHA-256 of the source span: `d4c4d392085c1d65a19e0eb2f93f43cceb4f325901b09f609a40ffd7176daf69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
