# `gateWebAuthnProxyOnDesktopSettings/getHostSettings`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/webauthn-proxy-credential.ts` · [Module README](../../../../modules/host/webauthn-proxy-credential-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786893-786893](../../../../../reference/runtime/host-main.cjs#L786893-L786893) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786893-786893](../../../../../reference/runtime/host-main.cjs#L786893-L786893) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:786893 uses an implicit arrow-function return.

### host:786893

Calls written directly in this body: `api.getHostSettings`, `gated2`.

SHA-256 of the source span: `c8d81022aef3aac44b42c866e35eb549ddba92592f6d02ef62745ba926e229c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
