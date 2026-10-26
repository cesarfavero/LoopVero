# `createWebAuthnProxyCredentialPublisher/withdraw`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/webauthn-proxy-credential.ts` · [Module README](../../../../modules/host/webauthn-proxy-credential-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786877-786881](../../../../../reference/runtime/host-main.cjs#L786877-L786881) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786877-786881](../../../../../reference/runtime/host-main.cjs#L786877-L786881) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786877

Calls written directly in this body: `refresh`.

Assignment or increment targets: `live`, `withdrawn`.

SHA-256 of the source span: `81b7482518d55b7a85cc4ffc3ec8aaeec29784efc40d7411bf20305ee3aeacfd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
