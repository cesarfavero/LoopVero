# `isAuthorized`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493458-493466](../../../../../reference/runtime/host-main.cjs#L493458-L493466) | `FunctionDeclaration` | no | `req, expectedToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493458-493466](../../../../../reference/runtime/host-main.cjs#L493458-L493466) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:493458

Calls written directly in this body: `Buffer.from`, `header.slice`, `header.startsWith`.

SHA-256 of the source span: `341223e49d8508cbe0a44550737697e53f2f12960b5d7bbeba545efc0256f693`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
