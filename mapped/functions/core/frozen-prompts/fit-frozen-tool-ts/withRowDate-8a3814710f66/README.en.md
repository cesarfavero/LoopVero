# `withRowDate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/fit-frozen-tool.ts` · [Module README](../../../../../modules/core/frozen-prompts/fit-frozen-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553827-553833](../../../../../../reference/runtime/sand-eval-runner.cjs#L553827-L553833) | `FunctionDeclaration` | no | `description9, dates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553827-553833](../../../../../../reference/runtime/sand-eval-runner.cjs#L553827-L553833) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553827

Calls written directly in this body: `buildWebSearchYearGuidance`, `description9.replaceAll`.

SHA-256 of the source span: `503cbe325a4a4d875d989e57d002408b81ddde798bc04c46d26618e1459238c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
