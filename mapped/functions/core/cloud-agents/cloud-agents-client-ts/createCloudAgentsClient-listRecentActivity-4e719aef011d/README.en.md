# `createCloudAgentsClient/listRecentActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513114-513132](../../../../../../reference/runtime/host-main.cjs#L513114-L513132) | `FunctionDeclaration` | yes | `limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513114-513132](../../../../../../reference/runtime/host-main.cjs#L513114-L513132) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:513114

Calls written directly in this body: `.filter`, `.listDetailedBackgroundComposers`, `Math.max`, `Math.min`, `Math.trunc`, `Number.isFinite`, `client`, `new ListDetailedBackgroundComposersRequest`, `new Map`, `response.composers.flatMap`, `response.composers.map`.

SHA-256 of the source span: `5727a7971df5285e141a95b63616ca827daee45c2c08eaca60524ac53fac2a3b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
