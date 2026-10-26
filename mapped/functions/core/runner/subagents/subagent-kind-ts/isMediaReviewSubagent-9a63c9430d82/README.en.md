# `isMediaReviewSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-kind.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479778-479780](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479778-L479780) | `FunctionDeclaration` | no | `subagentType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479778-479780](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479778-L479780) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479778

Calls written directly in this body: `isBuiltinSubagent`.

SHA-256 of the source span: `622f167706fa8754c5aebdeebb9477cc0b0dc3456b753a5a4a2f7d6504066c69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
