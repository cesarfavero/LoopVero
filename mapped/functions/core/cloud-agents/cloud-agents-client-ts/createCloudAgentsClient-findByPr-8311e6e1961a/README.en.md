# `createCloudAgentsClient/findByPr`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513097-513113](../../../../../../reference/runtime/host-main.cjs#L513097-L513113) | `FunctionDeclaration` | yes | `prUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513097-513113](../../../../../../reference/runtime/host-main.cjs#L513097-L513113) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513097

Calls written directly in this body: `listPrComposersInCallerScope`, `new Set`, `prUrl.trim`, `response.coordinatorComposers.map`, `response.involvedComposers.map`, `response.otherComposers.map`.

SHA-256 of the source span: `962bbaa6dc65fd8edca5ca325c2321b3ac3cde6708111e1298e3fc7e24819f06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
