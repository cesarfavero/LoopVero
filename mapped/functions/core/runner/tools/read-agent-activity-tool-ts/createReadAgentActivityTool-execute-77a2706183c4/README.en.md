# `createReadAgentActivityTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-agent-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-agent-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765446-765466](../../../../../../../reference/runtime/host-main.cjs#L765446-L765466) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |
| [evaluation:558813-558833](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558813-L558833) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765446-765466](../../../../../../../reference/runtime/host-main.cjs#L765446-L765466) | 2 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:558813-558833](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558813-L558833) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:765446

Calls written directly in this body: `clampAgentActivityRequest`, `deps.agentActivity.readOwnedAgentActivity`, `deps.review`, `renderAgentActivity`.

SHA-256 of the source span: `cd4685b438af1b376dc3eeb8cab5bc16633a5e718635523a95b3f0dd8ba6d302`.

### evaluation:558813

Calls written directly in this body: `clampAgentActivityRequest`, `deps.agentActivity.readOwnedAgentActivity`, `deps.review`, `renderAgentActivity`.

SHA-256 of the source span: `cd4685b438af1b376dc3eeb8cab5bc16633a5e718635523a95b3f0dd8ba6d302`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
