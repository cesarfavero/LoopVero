# `createAutoReviewGate/currentModes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/auto-review-gate.ts` · [Module README](../../../../../modules/core/runner/auto-review-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490120-490151](../../../../../../reference/runtime/sand-eval-runner.cjs#L490120-L490151) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490120-490151](../../../../../../reference/runtime/sand-eval-runner.cjs#L490120-L490151) | 8 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490120

Calls written directly in this body: `.expireSurfaces`, `deps.controller`, `deps.getModes`, `new Set`, `retiredSurfaces.add`, `sameAutoReviewModes`.

Assignment or increment targets: `lastSeenModes`.

SHA-256 of the source span: `e8ed28af6a28540a78f955c59bf381fb57e19926a6d278dc5aea5bfe7def7698`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
