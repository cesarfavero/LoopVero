# `createHostGatewayApi/setAgentAvatarBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492918-492930](../../../../../reference/runtime/host-main.cjs#L492918-L492930) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492918-492930](../../../../../reference/runtime/host-main.cjs#L492918-L492930) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:492918

Calls written directly in this body: `.flushPendingEdits`, `deps.extensions.api`, `writeLocalProfile`.

SHA-256 of the source span: `e01e59667a4f331cc1f0146d60276527b4ecbc473e6c524a6d903cbdf73d1e89`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
