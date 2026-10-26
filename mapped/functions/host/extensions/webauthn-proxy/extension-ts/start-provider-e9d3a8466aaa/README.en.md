# `start/provider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/extension.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785341-785341](../../../../../../../reference/runtime/host-main.cjs#L785341-L785341) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785341-785341](../../../../../../../reference/runtime/host-main.cjs#L785341-L785341) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:785341 uses an implicit arrow-function return.

### host:785341

Calls written directly in this body: `logs.reportWebAuthnProvider`.

SHA-256 of the source span: `1f303a05b447a0516ada77cf30f99a40f64ab698e296a811a3d21e85d5e2fb7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
