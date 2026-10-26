# `createNeedsAuthCards/liveNeedsAuthNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585016-585030](../../../../../../reference/runtime/sand-eval-runner.cjs#L585016-L585030) | `ArrowFunctionExpression` | yes | `providerIdentifier, result, probes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585016-585030](../../../../../../reference/runtime/sand-eval-runner.cjs#L585016-L585030) | 3 | 0 | 1 | 4 | 0 | 0 |

### evaluation:585016

Calls written directly in this body: `connectCardEmittedForServer.get`, `connectCardWait`, `cursorScmProviderForMcpServerIdentifier`, `describeCard`, `followUpGateFor`, `mcp.resolveNeedsAuthSlot`, `probes.openedAfterMs`.

SHA-256 of the source span: `59711c7ac80b577d2524bcb1884f5d95115035ad272213edbd0da904e4d34ca3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
