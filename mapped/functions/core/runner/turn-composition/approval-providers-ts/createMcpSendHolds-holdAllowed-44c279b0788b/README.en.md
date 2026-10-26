# `createMcpSendHolds/holdAllowed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/turn-composition/approval-providers.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/approval-providers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583702-583702](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583702-L583702) | `ArrowFunctionExpression` | no | `target, appliedRules` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583702-583702](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583702-L583702) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:583702 uses an implicit arrow-function return.

### evaluation:583702

Calls written directly in this body: `forwardedAttachmentHold`, `uncoveredSendHold`.

SHA-256 of the source span: `ed52c7d6c7597249d7631e7dd1aba123d17cf098d9289442116cdf46e35a3b06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
