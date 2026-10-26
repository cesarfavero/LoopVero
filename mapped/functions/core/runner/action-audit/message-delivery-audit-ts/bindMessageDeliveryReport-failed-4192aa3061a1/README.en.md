# `bindMessageDeliveryReport/failed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/message-delivery-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/message-delivery-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754990-754993](../../../../../../../reference/runtime/host-main.cjs#L754990-L754993) | `ArrowFunctionExpression` | no | `error64, category = errorClassOf(error64)` |
| [evaluation:539218-539221](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539218-L539221) | `ArrowFunctionExpression` | no | `error63, category = errorClassOf(error63)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754990-754993](../../../../../../../reference/runtime/host-main.cjs#L754990-L754993) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539218-539221](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539218-L539221) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:754990

Calls written directly in this body: `settled`.

SHA-256 of the source span: `90106cd3e975feaab63a8535c02da71da4c32eec62c7d161803059acc99f6ab7`.

### evaluation:539218

Calls written directly in this body: `settled`.

SHA-256 of the source span: `098182f538f99135a490c4980c20217d0613def33ce376203c668d6ef797b238`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
