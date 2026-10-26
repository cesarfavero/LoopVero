# `formatCompactCount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768725-768730](../../../../../../reference/runtime/host-main.cjs#L768725-L768730) | `FunctionDeclaration` | no | `count2, locale` |
| [evaluation:564236-564241](../../../../../../reference/runtime/sand-eval-runner.cjs#L564236-L564241) | `FunctionDeclaration` | no | `count2, locale` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768725-768730](../../../../../../reference/runtime/host-main.cjs#L768725-L768730) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564236-564241](../../../../../../reference/runtime/sand-eval-runner.cjs#L564236-L564241) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768725

Calls written directly in this body: `.format`, `new Intl.NumberFormat`.

SHA-256 of the source span: `0f74089fe92232536d4ced2f06a0ed4b9eb3847febace9503fed1cb636023e82`.

### evaluation:564236

Calls written directly in this body: `.format`, `new Intl.NumberFormat`.

SHA-256 of the source span: `0f74089fe92232536d4ced2f06a0ed4b9eb3847febace9503fed1cb636023e82`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
