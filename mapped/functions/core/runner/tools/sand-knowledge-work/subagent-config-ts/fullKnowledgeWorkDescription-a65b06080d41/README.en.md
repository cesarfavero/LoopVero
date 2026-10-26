# `fullKnowledgeWorkDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-knowledge-work/subagent-config.ts` · [Module README](../../../../../../../modules/core/runner/tools/sand-knowledge-work/subagent-config-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535920-535932](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535920-L535932) | `ArrowFunctionExpression` | no | `toolName, pageWriters` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535920-535932](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535920-L535932) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:535920 uses an implicit arrow-function return.

### evaluation:535920

Calls written directly in this body: `.join`, `backgroundSubagentLine`, `writtenFilesLine`.

SHA-256 of the source span: `466cf3ee445d36cbb3a0894df232fac1ce1e60b51f841c0b4b5a0cdb6260cf2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
