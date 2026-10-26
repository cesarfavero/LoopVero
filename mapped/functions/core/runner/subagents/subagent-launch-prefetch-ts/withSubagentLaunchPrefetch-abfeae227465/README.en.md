# `withSubagentLaunchPrefetch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-launch-prefetch.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763462-763472](../../../../../../../reference/runtime/host-main.cjs#L763462-L763472) | `FunctionDeclaration` | no | `tool, launchPrefetch, stateHandler` |
| [evaluation:556457-556467](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556457-L556467) | `FunctionDeclaration` | no | `tool, launchPrefetch, stateHandler` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763462-763472](../../../../../../../reference/runtime/host-main.cjs#L763462-L763472) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556457-556467](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556457-L556467) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:763462

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `62d1dcd1f6f9cce64422471bd0ca92d249932a635525847f5153ab993a58dad7`.

### evaluation:556457

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `62d1dcd1f6f9cce64422471bd0ca92d249932a635525847f5153ab993a58dad7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
