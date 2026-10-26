# `createNeedsAuthCards/surfaceNeedsAuthCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585033-585049](../../../../../../reference/runtime/sand-eval-runner.cjs#L585033-L585049) | `FunctionExpression` | yes | `providerIdentifier, result, probes, holdFollowUp = false, cardSource` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585033-585049](../../../../../../reference/runtime/sand-eval-runner.cjs#L585033-L585049) | 3 | 0 | 3 | 3 | 0 | 0 |

### evaluation:585033

Calls written directly in this body: `canSurface`, `liveNeedsAuthNote`, `mcp.resolveNeedsAuthSlot`, `surfaceSlotCard`.

SHA-256 of the source span: `a352147c043d652077cd781a35f0f857e2c2001871243988a1b9e11a51683d40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
