# `CloudAgentModelCatalogCache.listModels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-poll-loop.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-poll-loop-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513651-513668](../../../../../../../reference/runtime/host-main.cjs#L513651-L513668) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513651-513668](../../../../../../../reference/runtime/host-main.cjs#L513651-L513668) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:513651

Calls written directly in this body: `fetchSandModelCatalog`, `this.options.clock.monotonicNow`.

Assignment or increment targets: `this.modelCatalogCache`.

SHA-256 of the source span: `ff7bf56281ab31b18139bf98ed6a10304e05591d03859027c034e5e26e7e2624`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
