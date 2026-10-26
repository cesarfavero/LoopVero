# `createDraftToolForTurn/reviewOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756093-756103](../../../../../../../reference/runtime/host-main.cjs#L756093-L756103) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:542014-542024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542014-L542024) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756093-756103](../../../../../../../reference/runtime/host-main.cjs#L756093-L756103) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:756093 uses an implicit arrow-function return.
| [evaluation:542014-542024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542014-L542024) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:542014 uses an implicit arrow-function return.

### host:756093

Calls written directly in this body: `host.getAutoReviewInstructions`, `host.getConversationId`, `turn.getAutoReviewUserInstructions`.

SHA-256 of the source span: `6bec3b1732fac9402d428ca3eed54287761595a0f347ad53238a3cbdf8af38a8`.

### evaluation:542014

Calls written directly in this body: `host.getAutoReviewInstructions`, `host.getConversationId`, `turn.getAutoReviewUserInstructions`.

SHA-256 of the source span: `6bec3b1732fac9402d428ca3eed54287761595a0f347ad53238a3cbdf8af38a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
