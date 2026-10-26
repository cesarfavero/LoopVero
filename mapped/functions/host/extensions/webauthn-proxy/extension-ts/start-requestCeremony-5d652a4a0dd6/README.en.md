# `start/requestCeremony`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/extension.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785345-785345](../../../../../../../reference/runtime/host-main.cjs#L785345-L785345) | `ArrowFunctionExpression` | no | `ceremony` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785345-785345](../../../../../../../reference/runtime/host-main.cjs#L785345-L785345) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:785345 uses an implicit arrow-function return.

### host:785345

Calls written directly in this body: `bridge.requestCeremony`.

SHA-256 of the source span: `530d3b7d668cafe3135a5c15683aa9b5dd48492bcb336bba4d5d1625e80e2d30`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
