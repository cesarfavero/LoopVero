# `createSendEmailTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764493-764502](../../../../../../../reference/runtime/host-main.cjs#L764493-L764502) | `ArrowFunctionExpression` | yes | `ctx, args, { recordDelivery, ...d }` |
| [evaluation:557861-557870](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557861-L557870) | `ArrowFunctionExpression` | yes | `ctx, args, { recordDelivery, ...d }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764493-764502](../../../../../../../reference/runtime/host-main.cjs#L764493-L764502) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:764493 uses an implicit arrow-function return.
| [evaluation:557861-557870](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557861-L557870) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:557861 uses an implicit arrow-function return.

### host:764493

Calls written directly in this body: `bindMessageDeliveryReport`, `sendEmail`.

SHA-256 of the source span: `b20b51df5d04b0dd4f9e68ac1aac5a0cd4214320ea1e53f0672daaf8e4c392cb`.

### evaluation:557861

Calls written directly in this body: `bindMessageDeliveryReport`, `sendEmail`.

SHA-256 of the source span: `b20b51df5d04b0dd4f9e68ac1aac5a0cd4214320ea1e53f0672daaf8e4c392cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
