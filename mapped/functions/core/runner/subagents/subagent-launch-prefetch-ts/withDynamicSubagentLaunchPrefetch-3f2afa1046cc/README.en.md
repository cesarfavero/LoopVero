# `withDynamicSubagentLaunchPrefetch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-launch-prefetch.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:556469-556490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556469-L556490) | `FunctionDeclaration` | no | `invocationTool, launchPrefetch, stateHandler, subagentToolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556469-556490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556469-L556490) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:556469

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7cd824e02f725525153ace2dd3d670f2fbd9a3fa984e729c01f5f25f9ce0de13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
