# `createNeedsAuthCards/describeCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584941-584952](../../../../../../reference/runtime/sand-eval-runner.cjs#L584941-L584952) | `ArrowFunctionExpression` | no | `slot, surfaced, resumesOnSignIn, followUp` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584941-584952](../../../../../../reference/runtime/sand-eval-runner.cjs#L584941-L584952) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584941

Calls written directly in this body: `describeNeedsAuthCard`, `gatedSignOutReasonNote`.

SHA-256 of the source span: `622e1e19045a4dcc47f3823d9367ffbaef479479285a7b65b8a05e0065ac5596`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
