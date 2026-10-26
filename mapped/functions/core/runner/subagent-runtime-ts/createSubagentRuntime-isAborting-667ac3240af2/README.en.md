# `createSubagentRuntime/isAborting`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535628-535628](../../../../../../reference/runtime/sand-eval-runner.cjs#L535628-L535628) | `ArrowFunctionExpression` | no | `subagentAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535628-535628](../../../../../../reference/runtime/sand-eval-runner.cjs#L535628-L535628) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:535628 uses an implicit arrow-function return.

### evaluation:535628

Calls written directly in this body: `abortingSubagents.has`.

SHA-256 of the source span: `b6f06f5d8b4148f22fd0b910269bcc0c1b732bce06196003dc1eb201611c780a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
