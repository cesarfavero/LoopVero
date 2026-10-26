# `createCloudAgentsClient/getInfo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513293-513295](../../../../../../reference/runtime/host-main.cjs#L513293-L513295) | `FunctionDeclaration` | yes | `bcId, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513293-513295](../../../../../../reference/runtime/host-main.cjs#L513293-L513295) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513293

Calls written directly in this body: `client`, `readCloudAgentInfo`.

SHA-256 of the source span: `d931fc0698e16c459d1764d1580ce188832337d0bc6b6a7ee8f789e7a3af44a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
