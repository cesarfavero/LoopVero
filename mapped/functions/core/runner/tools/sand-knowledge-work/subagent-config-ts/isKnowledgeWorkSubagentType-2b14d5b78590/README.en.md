# `isKnowledgeWorkSubagentType`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-knowledge-work/subagent-config.ts` · [Module README](../../../../../../../modules/core/runner/tools/sand-knowledge-work/subagent-config-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754117-754119](../../../../../../../../reference/runtime/host-main.cjs#L754117-L754119) | `FunctionDeclaration` | no | `subagentType` |
| [evaluation:535913-535915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535913-L535915) | `FunctionDeclaration` | no | `subagentType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754117-754119](../../../../../../../../reference/runtime/host-main.cjs#L754117-L754119) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535913-535915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535913-L535915) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754117

Calls written directly in this body: `isBuiltinSubagent`.

SHA-256 of the source span: `514d83483593c00e59156b0445049ce98bc3074d9022f94564e83e1f151d0a18`.

### evaluation:535913

Calls written directly in this body: `isBuiltinSubagent`.

SHA-256 of the source span: `514d83483593c00e59156b0445049ce98bc3074d9022f94564e83e1f151d0a18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
