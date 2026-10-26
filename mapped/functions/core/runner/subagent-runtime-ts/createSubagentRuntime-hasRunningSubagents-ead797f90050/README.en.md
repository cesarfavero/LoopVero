# `createSubagentRuntime/hasRunningSubagents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535590-535595](../../../../../../reference/runtime/sand-eval-runner.cjs#L535590-L535595) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535590-535595](../../../../../../reference/runtime/sand-eval-runner.cjs#L535590-L535595) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:535590

Calls written directly in this body: `subagentRegistry.values`.

SHA-256 of the source span: `d63c51d8826df40c9832cb9319598b350717c9b91750685f08d84ff381b10a5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
