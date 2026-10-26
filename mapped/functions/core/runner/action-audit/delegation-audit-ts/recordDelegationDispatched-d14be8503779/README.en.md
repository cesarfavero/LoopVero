# `recordDelegationDispatched`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/delegation-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/delegation-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566713-566715](../../../../../../../reference/runtime/sand-eval-runner.cjs#L566713-L566715) | `FunctionDeclaration` | no | `ctx, dispatch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566713-566715](../../../../../../../reference/runtime/sand-eval-runner.cjs#L566713-L566715) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:566713

Calls written directly in this body: `.dispatched`, `ctx.get`.

SHA-256 of the source span: `f628fc4ca59f3c09aac44a5e46fa84799b58a033881accf2a594bc7595a5a202`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
