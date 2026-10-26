# `createNeedsAuthCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584929-585060](../../../../../../reference/runtime/sand-eval-runner.cjs#L584929-L585060) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584929-585060](../../../../../../reference/runtime/sand-eval-runner.cjs#L584929-L585060) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584929

Calls written directly in this body: `createNeedsAuthHold`, `mcp.resolvePendingSignInSlot.bind`, `new Map`.

SHA-256 of the source span: `379d869aec2ba73b93043ce3556d4c32223b166db3dd9de4187ade888a042dc1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
