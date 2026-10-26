# `start/ceremony`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/extension.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785340-785340](../../../../../../../reference/runtime/host-main.cjs#L785340-L785340) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785340-785340](../../../../../../../reference/runtime/host-main.cjs#L785340-L785340) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:785340 uses an implicit arrow-function return.

### host:785340

Calls written directly in this body: `logs.reportWebAuthnProxy`.

SHA-256 of the source span: `17baa651a83e3f3cc13ee88a916c7af7cb98d95456760eec8580ca2dfdbb7f3b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
