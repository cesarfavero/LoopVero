# `parseGuestBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/identity-socket-server.ts` · [Module README](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499525-499576](../../../../../../../reference/runtime/host-main.cjs#L499525-L499576) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499525-499576](../../../../../../../reference/runtime/host-main.cjs#L499525-L499576) | 14 | 0 | 0 | 10 | 0 | 1 |

### host:499525

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `NONCE_PRINTABLE_ASCII.test`, `parsed2.aud.trim`, `parsed2.sub_claim.trim`, `raw.toString`.

Assignment or increment targets: `nonce`, `parsed2`, `subClaim`.

SHA-256 of the source span: `bf376f0ed5e76faa946f372adac7a1c46fc22b0d0b799ddc12ecd8ea13683138`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
