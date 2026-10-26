# `knowledgeWorkSubagentDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-knowledge-work/subagent-config.ts` · [Module README](../../../../../../../modules/core/runner/tools/sand-knowledge-work/subagent-config-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535937-535942](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535937-L535942) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535937-535942](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535937-L535942) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:535937

Calls written directly in this body: `args.description.trim`, `conciseKnowledgeWorkDescription`, `fullKnowledgeWorkDescription`, `knowledgeWorkPageWriters`.

SHA-256 of the source span: `e3332459fa7862a0c530fe11bbc4b15927da52a7bd7292828d4c48a29430a997`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
