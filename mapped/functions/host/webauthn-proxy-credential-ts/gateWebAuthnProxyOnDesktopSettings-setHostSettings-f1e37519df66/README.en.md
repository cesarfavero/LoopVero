# `gateWebAuthnProxyOnDesktopSettings/setHostSettings`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/webauthn-proxy-credential.ts` · [Module README](../../../../modules/host/webauthn-proxy-credential-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786894-786910](../../../../../reference/runtime/host-main.cjs#L786894-L786910) | `ArrowFunctionExpression` | yes | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786894-786910](../../../../../reference/runtime/host-main.cjs#L786894-L786910) | 2 | 0 | 3 | 1 | 1 | 1 |

### host:786894

Calls written directly in this body: `api.setHostSettings`, `gated2`, `onChange`.

Assignment or increment targets: `enabled`, `settings`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `52d734a1b4d7741bd785dbef899dfbb6b1a6e346ea2eaa421854d076878e8880`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
