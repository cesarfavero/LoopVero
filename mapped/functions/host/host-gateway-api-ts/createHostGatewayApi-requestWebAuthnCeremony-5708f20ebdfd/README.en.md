# `createHostGatewayApi/requestWebAuthnCeremony`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493133-493133](../../../../../reference/runtime/host-main.cjs#L493133-L493133) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493133-493133](../../../../../reference/runtime/host-main.cjs#L493133-L493133) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:493133 uses an implicit arrow-function return.

### host:493133

Calls written directly in this body: `.requestCeremony`, `deps.extensions.api`.

SHA-256 of the source span: `701de9293781c8a3220d75bc0c006ee46785cdfe5c958d3ba5de6f7c8d083032`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
