# `parseSandAutoReviewSummaryCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/auto-review/sand-auto-review-copy-types.ts` · [Module README](../../../../../modules/shared/auto-review/sand-auto-review-copy-types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:694076-694146](../../../../../../reference/runtime/host-main.cjs#L694076-L694146) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694076-694146](../../../../../../reference/runtime/host-main.cjs#L694076-L694146) | 25 | 0 | 0 | 14 | 0 | 0 |

### host:694076

Calls written directly in this body: `MeetingRepeatValues.isOneOf`, `isUnknownRecord2`, `optionalString`, `parseMeetingJoinSchedule`.

SHA-256 of the source span: `8d47c3b7f07743e01a2be84dc323b4e1277316b4340465e7614d22b128884665`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
