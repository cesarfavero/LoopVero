# `deriveSandRequestLineage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/request-lineage.ts` · [Module README](../../../../../modules/core/runner/request-lineage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534807-534821](../../../../../../reference/runtime/sand-eval-runner.cjs#L534807-L534821) | `FunctionDeclaration` | no | `ctx, toolCallId, fallback2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534807-534821](../../../../../../reference/runtime/sand-eval-runner.cjs#L534807-L534821) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:534807

Calls written directly in this body: `ctx.get`, `getRootParentRequestId`.

SHA-256 of the source span: `382ca6e66f614dd5778c053a7a98110627af3ea13db863d8c59afd9c2221d463`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
