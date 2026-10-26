# `isRetiredSubagentTypeByNormalizedName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-kind.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479749-479755](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479749-L479755) | `FunctionDeclaration` | no | `subagentType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479749-479755](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479749-L479755) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:479749

Calls written directly in this body: `normalizeSubagentTypeName`.

SHA-256 of the source span: `0cb22d551975ddc4eb5772d79c3377147f98dcff35da6f0bae325f84aa84ab39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
