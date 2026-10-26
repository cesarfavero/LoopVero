# `createSandAgentEventTracker/trackSkillApplied`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-event-tracker.ts` · [Module README](../../../../../modules/core/runner/sand-agent-event-tracker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534957-534976](../../../../../../reference/runtime/sand-eval-runner.cjs#L534957-L534976) | `ArrowFunctionExpression` | no | `ctx, skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534957-534976](../../../../../../reference/runtime/sand-eval-runner.cjs#L534957-L534976) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:534957

Calls written directly in this body: `Date.now`, `auditor.record`, `getConversationId`, `getRequestId`, `getRootParentRequestId`, `options2.actionAuditor`, `options2.fallback.trackSkillApplied`, `options2.getConversationId`, `options2.resolveBoxId`, `options2.skills`, `skillActivatedAction`.

SHA-256 of the source span: `d9692acff7eb88de004907c07e2afbaa1ff61eca5d6a8812e39a683ff4e052c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
