# `parseSandAutoReviewAwaitingCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/auto-review/sand-auto-review-copy-types.ts` · [Module README](../../../../../modules/shared/auto-review/sand-auto-review-copy-types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:694147-694161](../../../../../../reference/runtime/host-main.cjs#L694147-L694161) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694147-694161](../../../../../../reference/runtime/host-main.cjs#L694147-L694161) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:694147

Calls written directly in this body: `isUnknownRecord2`, `optionalString`, `parseSandAutoReviewSummaryCopy`.

SHA-256 of the source span: `fb8b843378bcb869284bca8e7e7f58aba0e5b233712f6dd46aa7f306498c5e03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
