# `createNeedsAuthCards/surfaceAutomationCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584958-584974](../../../../../../reference/runtime/sand-eval-runner.cjs#L584958-L584974) | `ArrowFunctionExpression` | yes | `providerIdentifier, slot, failedCallError` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584958-584974](../../../../../../reference/runtime/sand-eval-runner.cjs#L584958-L584974) | 1 | 0 | 1 | 1 | 0 | 0 |

### evaluation:584958

Calls written directly in this body: `connectCardEmittedForServer.set`, `connectorCardAccountFields`, `deps.emitConnectorCard`, `describeNeedsAuthCardForAutomation`, `hold.hold`.

SHA-256 of the source span: `418a108880a355a8fcd4d96aed1425665afa75d755231a9a2c02ad7bc13c07ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
