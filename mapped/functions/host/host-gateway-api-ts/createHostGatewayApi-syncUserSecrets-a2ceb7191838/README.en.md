# `createHostGatewayApi/syncUserSecrets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493011-493011](../../../../../reference/runtime/host-main.cjs#L493011-L493011) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493011-493011](../../../../../reference/runtime/host-main.cjs#L493011-L493011) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:493011 uses an implicit arrow-function return.

### host:493011

Calls written directly in this body: `.syncUserSecrets`, `deps.extensions.api`.

SHA-256 of the source span: `ffc6802aafbd5cf18112a8efee62cbd20b0b2e466682a945c4857a6c0d411df8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
