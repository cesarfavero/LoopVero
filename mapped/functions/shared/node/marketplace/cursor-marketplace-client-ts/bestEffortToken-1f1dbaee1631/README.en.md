# `bestEffortToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/marketplace/cursor-marketplace-client.ts` · [Module README](../../../../../../modules/shared/node/marketplace/cursor-marketplace-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404255-404263](../../../../../../../reference/runtime/host-main.cjs#L404255-L404263) | `FunctionDeclaration` | yes | `getAccessToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404255-404263](../../../../../../../reference/runtime/host-main.cjs#L404255-L404263) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:404255

Calls written directly in this body: `getAccessToken`, `reportMcpHostEdgeFailure`.

SHA-256 of the source span: `ff693d94e5f3b397988af658596e03a12d53dfe1e749d083b6cc99ea774387ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
