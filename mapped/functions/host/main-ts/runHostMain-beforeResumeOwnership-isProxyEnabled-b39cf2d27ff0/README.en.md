# `runHostMain/beforeResumeOwnership/isProxyEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/main.ts` · [Module README](../../../../modules/host/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:787009-787009](../../../../../reference/runtime/host-main.cjs#L787009-L787009) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:787009-787009](../../../../../reference/runtime/host-main.cjs#L787009-L787009) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:787009 uses an implicit arrow-function return.

### host:787009

Calls written directly in this body: `webAuthnProxyGate.isEnabled`.

SHA-256 of the source span: `4a0f58c9ecb77d418fce5e0bb81be2cb1d161bca70c18de0294a9685f4a2bc89`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
