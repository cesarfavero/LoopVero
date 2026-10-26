# `subagentKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-kind.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740856-740865](../../../../../../../reference/runtime/host-main.cjs#L740856-L740865) | `FunctionDeclaration` | no | `raw` |
| [evaluation:479763-479772](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479763-L479772) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740856-740865](../../../../../../../reference/runtime/host-main.cjs#L740856-L740865) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:479763-479772](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479763-L479772) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:740856

Calls written directly in this body: `MEDIA_REVIEW_SUBAGENT_NAMES.find`, `NORMALIZED_SUBAGENT_NAMES.find`, `normalizeSubagentTypeName`.

SHA-256 of the source span: `201483d64b879ce7cf4824618050e720928e81667423673b205877f15851394f`.

### evaluation:479763

Calls written directly in this body: `MEDIA_REVIEW_SUBAGENT_NAMES.find`, `NORMALIZED_SUBAGENT_NAMES.find`, `normalizeSubagentTypeName`.

SHA-256 of the source span: `201483d64b879ce7cf4824618050e720928e81667423673b205877f15851394f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
