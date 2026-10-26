# `createHostGatewayApi/awaitBoxSecretsApplied`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493012-493012](../../../../../reference/runtime/host-main.cjs#L493012-L493012) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493012-493012](../../../../../reference/runtime/host-main.cjs#L493012-L493012) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:493012 uses an implicit arrow-function return.

### host:493012

Calls written directly in this body: `.waitUntilApplied`, `deps.extensions.api`.

SHA-256 of the source span: `fdaf7acf27dc6feaa64d33b5012678152fb1588da97f53f0ac84a6828a7fd830`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
