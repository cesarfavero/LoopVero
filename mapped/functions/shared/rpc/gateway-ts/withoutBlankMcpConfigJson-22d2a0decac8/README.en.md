# `withoutBlankMcpConfigJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/gateway/README.en.md).

**Module:** `shared/rpc/gateway.ts` · [Module README](../../../../../modules/shared/rpc/gateway-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487752-487756](../../../../../../reference/runtime/host-main.cjs#L487752-L487756) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487752-487756](../../../../../../reference/runtime/host-main.cjs#L487752-L487756) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:487752

Calls written directly in this body: `args.mcpConfigJson.trim`.

SHA-256 of the source span: `544d72e174868a90a35c7a7763f16675a52fb8ab752663110ffb6b052866aa91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
