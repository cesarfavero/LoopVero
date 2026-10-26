# `createNeedsAuthCards/surfaceSlotCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584975-585015](../../../../../../reference/runtime/sand-eval-runner.cjs#L584975-L585015) | `ArrowFunctionExpression` | yes | `providerIdentifier, slot, failedCallError, probes, holdFollowUp, cardSource` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584975-585015](../../../../../../reference/runtime/sand-eval-runner.cjs#L584975-L585015) | 9 | 0 | 2 | 2 | 0 | 0 |

### evaluation:584975

Calls written directly in this body: `connectCardEmittedForServer.set`, `connectCardWait`, `connectorCardAccountFields`, `deps.automationConnectCard`, `deps.emitConnectorCard`, `describeCard`, `describeNeedsAuthForAutomation`, `followUpGateFor`, `hold.hold`, `probes.openedAfterMs`, `stdioSignInCardFields`, `surfaceAutomationCard`.

SHA-256 of the source span: `bd05ac556cbc03e85a8c9af3b95d2b1da5df3a5cb1bd7a8e48bfa0a3c316fa58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
