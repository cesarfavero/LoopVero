# `cloudAgentUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-fields.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-fields-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508908-508914](../../../../../../reference/runtime/host-main.cjs#L508908-L508914) | `FunctionDeclaration` | no | `bcId, readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508908-508914](../../../../../../reference/runtime/host-main.cjs#L508908-L508914) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508908

Calls written directly in this body: `resolvePortalBaseUrl`.

SHA-256 of the source span: `9b7edcc793daa39c8bbca4d92c2ba010d358827c03086a3e0d0fa1d014bb15d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
