# `withSubagentLaunchPrefetch/previewStreamingArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-launch-prefetch.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763466-763470](../../../../../../../reference/runtime/host-main.cjs#L763466-L763470) | `ArrowFunctionExpression` | no | `ctx, interactionHandler, toolCallId` |
| [evaluation:556461-556465](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556461-L556465) | `ArrowFunctionExpression` | no | `ctx, interactionHandler, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763466-763470](../../../../../../../reference/runtime/host-main.cjs#L763466-L763470) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556461-556465](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556461-L556465) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763466

Calls written directly in this body: `launchPrefetch.start`, `preview`.

SHA-256 of the source span: `490f474200ed3c6e4f6fb9eff7903365ca499a2f2e51c1367f1317d51e6c94a3`.

### evaluation:556461

Calls written directly in this body: `launchPrefetch.start`, `preview`.

SHA-256 of the source span: `490f474200ed3c6e4f6fb9eff7903365ca499a2f2e51c1367f1317d51e6c94a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
