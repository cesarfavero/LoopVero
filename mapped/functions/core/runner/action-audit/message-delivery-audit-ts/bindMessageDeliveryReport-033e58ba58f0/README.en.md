# `bindMessageDeliveryReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/message-delivery-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/message-delivery-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754985-754995](../../../../../../../reference/runtime/host-main.cjs#L754985-L754995) | `FunctionDeclaration` | no | `recorder, ctx, toolCallId, destination` |
| [evaluation:539213-539223](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539213-L539223) | `FunctionDeclaration` | no | `recorder, ctx, toolCallId, destination` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754985-754995](../../../../../../../reference/runtime/host-main.cjs#L754985-L754995) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539213-539223](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539213-L539223) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:754985

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `5d9e7b17876657378c11c9d1772547136c1676df0d067c743afba00c74a8687f`.

### evaluation:539213

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3db25c5c5607358154454903dc6890f6241b03ccd1787c3858fd3b57d243015a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
