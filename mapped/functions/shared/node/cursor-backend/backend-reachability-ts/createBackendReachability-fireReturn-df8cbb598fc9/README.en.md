# `createBackendReachability/fireReturn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/backend-reachability.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711247-711254](../../../../../../../reference/runtime/host-main.cjs#L711247-L711254) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711247-711254](../../../../../../../reference/runtime/host-main.cjs#L711247-L711254) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:711247

Calls written directly in this body: `Math.min`, `clock.monotonicNow`, `deps.onReturn`, `elapsedMs`.

Assignment or increment targets: `gapMs`, `lastReturnAt`, `pendingReturn`.

SHA-256 of the source span: `a98d0bd401487100fddf740bb5ec13cd838b409dbb19b96268f0514154f7dc9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
