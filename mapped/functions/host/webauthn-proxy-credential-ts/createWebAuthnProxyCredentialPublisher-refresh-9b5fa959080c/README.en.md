# `createWebAuthnProxyCredentialPublisher/refresh`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/webauthn-proxy-credential.ts` · [Module README](../../../../modules/host/webauthn-proxy-credential-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786870-786873](../../../../../reference/runtime/host-main.cjs#L786870-L786873) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786870-786873](../../../../../reference/runtime/host-main.cjs#L786870-L786873) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786870

Calls written directly in this body: `settled.then`.

Assignment or increment targets: `settled`.

SHA-256 of the source span: `97f7ecf9e31281dc63b32482a62d655e068454e6a79a20f3e7099eeffd718a19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
