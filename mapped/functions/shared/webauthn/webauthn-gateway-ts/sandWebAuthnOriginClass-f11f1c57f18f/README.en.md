# `sandWebAuthnOriginClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/gateway/README.en.md).

**Module:** `shared/webauthn/webauthn-gateway.ts` · [Module README](../../../../../modules/shared/webauthn/webauthn-gateway-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487440-487451](../../../../../../reference/runtime/host-main.cjs#L487440-L487451) | `FunctionDeclaration` | no | `origin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487440-487451](../../../../../../reference/runtime/host-main.cjs#L487440-L487451) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:487440

Calls written directly in this body: `hostname4.endsWith`, `new URL`.

Assignment or increment targets: `hostname4`.

SHA-256 of the source span: `6f253d5393e03bc2e21661df3105e610ab09d6ee8c46f20415c23ee4c12dbfec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
