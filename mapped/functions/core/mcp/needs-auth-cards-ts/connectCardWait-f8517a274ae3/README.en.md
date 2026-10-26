# `connectCardWait`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584924-584928](../../../../../../reference/runtime/sand-eval-runner.cjs#L584924-L584928) | `FunctionDeclaration` | no | `slot, followUpGate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584924-584928](../../../../../../reference/runtime/sand-eval-runner.cjs#L584924-L584928) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584924

Calls written directly in this body: `signedInReadClaimsWait`.

SHA-256 of the source span: `31936fcd7e409a2a89b2f6893f26343bb1f91db8b601a3a52c4a143793a3e48a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
