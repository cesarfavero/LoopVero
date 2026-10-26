# `SandSubagentHostAdapter.runDetachedSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583111-583183](../../../../../../reference/runtime/sand-eval-runner.cjs#L583111-L583183) | `method` | yes | `ctx, agentId, args, forkedContext, detached` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583111-583183](../../../../../../reference/runtime/sand-eval-runner.cjs#L583111-L583183) | 12 | 0 | 2 | 4 | 0 | 1 |

### evaluation:583111

Calls written directly in this body: `.flatMap`, `.map`, `String`, `definedProvenance`, `deriveSandRequestLineage`, `detached.dispatch`, `isMediaReviewSubagentType`, `new Set`, `originatingFlowOf`, `recordDelegationDispatched`, `resolveSandSubagentModelId`, `this.dispatcher.getCombinedComputerUseDecision`, `this.executorProfileNames`, `this.reviewLaunchOrDeny`, `this.sessionEventSequence`, `this.subagentTask`.

Assignment or increment targets: `handedOver`.

SHA-256 of the source span: `654c504db4af476865dfde19fdc72b8280ffec6ff948462a9e49dfe6a6f4acfb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
