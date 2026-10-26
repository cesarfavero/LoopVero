# `createSandNavigationProbe/probe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512794-512798](../../../../../../reference/runtime/sand-eval-runner.cjs#L512794-L512798) | `ArrowFunctionExpression` | no | `ctx, remoteAccessor, displayNumber` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512794-512798](../../../../../../reference/runtime/sand-eval-runner.cjs#L512794-L512798) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:512794

Calls written directly in this body: `ctx.withDetached`, `probeTargetsByDisplay.set`, `requestProbe`, `turnAttributionFromContext`.

Assignment or increment targets: `lastRequestedTurn`.

SHA-256 of the source span: `d4459ddaf6bd0ac647c6dc5f705ef938798ce7296eabd2e548cca45a5d4e2eef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
