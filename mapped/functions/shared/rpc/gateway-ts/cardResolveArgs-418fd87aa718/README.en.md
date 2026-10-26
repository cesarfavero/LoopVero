# `cardResolveArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/gateway/README.en.md).

**Module:** `shared/rpc/gateway.ts` · [Module README](../../../../../modules/shared/rpc/gateway-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487983-487991](../../../../../../reference/runtime/host-main.cjs#L487983-L487991) | `FunctionDeclaration` | no | `resolution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487983-487991](../../../../../../reference/runtime/host-main.cjs#L487983-L487991) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487983

Calls written directly in this body: `rpcAgentId`, `rpcObject`, `rpcOptional`, `rpcString`.

SHA-256 of the source span: `cbc727e7892cf95c2d145355a5c4acfd6d0e856940b5236c8969bf715c5cd3df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
