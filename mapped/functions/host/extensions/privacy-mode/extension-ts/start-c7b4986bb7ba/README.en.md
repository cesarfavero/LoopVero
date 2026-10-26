# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/privacy-mode/extension.ts` · [Module README](../../../../../../modules/host/extensions/privacy-mode/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706632-706673](../../../../../../../reference/runtime/host-main.cjs#L706632-L706673) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706632-706673](../../../../../../../reference/runtime/host-main.cjs#L706632-L706673) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706632

Calls written directly in this body: `context2.onStop`, `createDeadlinePolicy`, `createPollingPolicy2`, `createPrivacyModeLogger`, `createPrivacyModeService`, `createRetryPolicy`.

SHA-256 of the source span: `66e7fcb9fc569e111e13a9e472d39216fc5402aa340437459c68aba7b24e3b55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
