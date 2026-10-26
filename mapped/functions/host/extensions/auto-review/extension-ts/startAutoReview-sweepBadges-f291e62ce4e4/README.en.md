# `startAutoReview/sweepBadges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/auto-review/extension.ts` · [Module README](../../../../../../modules/host/extensions/auto-review/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499904-499904](../../../../../../../reference/runtime/host-main.cjs#L499904-L499904) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499904-499904](../../../../../../../reference/runtime/host-main.cjs#L499904-L499904) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:499904 uses an implicit arrow-function return.

### host:499904

Calls written directly in this body: `service.sweepStaleAwaitingBadges`.

SHA-256 of the source span: `127e30965b7dc1c9d95205816566c893c1598c6652a4cb14601035b686ed4517`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
