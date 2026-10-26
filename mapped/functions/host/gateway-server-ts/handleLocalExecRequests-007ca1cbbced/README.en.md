# `handleLocalExecRequests`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493754-493765](../../../../../reference/runtime/host-main.cjs#L493754-L493765) | `FunctionDeclaration` | no | `deps, req, res` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493754-493765](../../../../../reference/runtime/host-main.cjs#L493754-L493765) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:493754

Calls written directly in this body: `openSseStream`, `respondError`.

SHA-256 of the source span: `939452aae5cc99605e09672deec006be4f97a1877ae6a3b5a2fe90181cbe7526`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
