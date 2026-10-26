# `createSubagentRuntime/logSubagentLifecycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535509-535514](../../../../../../reference/runtime/sand-eval-runner.cjs#L535509-L535514) | `FunctionDeclaration` | no | `phase, subagentAgentId, status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535509-535514](../../../../../../reference/runtime/sand-eval-runner.cjs#L535509-L535514) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535509

Calls written directly in this body: `console.log`, `subagentRegistry.get`.

SHA-256 of the source span: `2ab4f7144dd819b8c611d39d0a2641d8bec16e62011d6e940e6b3c0934b025f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
