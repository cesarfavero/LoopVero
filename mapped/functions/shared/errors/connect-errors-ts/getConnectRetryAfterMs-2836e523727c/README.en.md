# `getConnectRetryAfterMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/connect-errors.ts` · [Module README](../../../../../modules/shared/errors/connect-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451266-451269](../../../../../../reference/runtime/host-main.cjs#L451266-L451269) | `FunctionDeclaration` | no | `error64, nowMs2 = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451266-451269](../../../../../../reference/runtime/host-main.cjs#L451266-L451269) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:451266

Calls written directly in this body: `error64.metadata.get`, `parseRetryAfterHeaderMs`.

SHA-256 of the source span: `a778ddaa5e8628bf72c3881087d6e634e98a823bc35004a2df3623214689e2dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
