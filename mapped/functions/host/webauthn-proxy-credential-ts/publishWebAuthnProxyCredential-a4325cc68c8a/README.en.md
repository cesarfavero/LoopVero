# `publishWebAuthnProxyCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/webauthn-proxy-credential.ts` · [Module README](../../../../modules/host/webauthn-proxy-credential-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786811-786822](../../../../../reference/runtime/host-main.cjs#L786811-L786822) | `FunctionDeclaration` | yes | `credential, credentialPath = SAND_BOX_WEBAUTHN_PROXY_CREDENTIAL_PATH` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786811-786822](../../../../../reference/runtime/host-main.cjs#L786811-L786822) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:786811

Calls written directly in this body: `withdrawWebAuthnProxyCredential`, `writeFileAtomic`.

SHA-256 of the source span: `b8b8a937f942d6fda8a45dd2a99280b80cb170a704ba54aadf6481b5b43a7cc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
