# `createWebAuthnProxyCredentialPublisher/apply`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/webauthn-proxy-credential.ts` · [Module README](../../../../modules/host/webauthn-proxy-credential-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786846-786869](../../../../../reference/runtime/host-main.cjs#L786846-L786869) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786846-786869](../../../../../reference/runtime/host-main.cjs#L786846-L786869) | 2 | 0 | 3 | 2 | 0 | 2 |

### host:786846

Calls written directly in this body: `errorLogTag`, `publishWebAuthnProxyCredential`, `readEnabled`, `reportFailure`, `withdrawWebAuthnProxyCredential`.

Assignment or increment targets: `failureReported`, `live`.

SHA-256 of the source span: `d3922b9dd20f9587555443f11d82fac2849685cce4df330e48f0c5e6e26486a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
