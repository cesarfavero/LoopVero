# `sandExecutorLeanToolFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/executor-lean-prompt.ts` · [Module README](../../../../../../modules/core/runner/subagents/executor-lean-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552498-552511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552498-L552511) | `FunctionDeclaration` | no | `policy, mounted` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552498-552511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552498-L552511) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552498

Calls written directly in this body: `policy.offers`.

SHA-256 of the source span: `ac49230f312ecd0296b2fe5898acd5c0e5b22410677b193ef8d92a92efed70c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
