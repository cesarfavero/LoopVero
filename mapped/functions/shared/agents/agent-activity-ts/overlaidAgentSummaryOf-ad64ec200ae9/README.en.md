# `overlaidAgentSummaryOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agent-activity.ts` · [Module README](../../../../../modules/shared/agents/agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490259-490264](../../../../../../reference/runtime/host-main.cjs#L490259-L490264) | `FunctionDeclaration` | no | `summary, overlay2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490259-490264](../../../../../../reference/runtime/host-main.cjs#L490259-L490264) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:490259

Calls written directly in this body: `clientOverlaidSummaryOf`, `liveOverlaidSummaryOf`.

Assignment or increment targets: `next`.

SHA-256 of the source span: `628ad4d3d9bc332192583fd2c9493a3b06e0bdc8eab6be601653fbc453fae4da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
