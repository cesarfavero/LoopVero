# `leanExecutorPromptDeps/holdsCloudAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/executor-lean-options.ts` · [Module README](../../../../../../modules/core/runner/subagents/executor-lean-options-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582757-582760](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582757-L582760) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582757-582760](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582757-L582760) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582757

Calls written directly in this body: `gates.cloudAgentsDisabledByTeam`, `gates.cloudAgentsUnavailableOnPlan`, `host`.

SHA-256 of the source span: `50d3e9959576234248d9f777f00fa0130b6d61b2034fe47ec63ea2f076637b46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
