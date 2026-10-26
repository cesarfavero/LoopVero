# `cardFormAwareFillOp/args`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727126-727126](../../../../../../../reference/runtime/host-main.cjs#L727126-L727126) | `ArrowFunctionExpression` | no | `ref2, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727126-727126](../../../../../../../reference/runtime/host-main.cjs#L727126-L727126) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:727126 uses an implicit arrow-function return.

### host:727126

Calls written directly in this body: `isCardForm`, `op.args`, `userFormValueLooksLikeCardCodeOrExpiry`.

SHA-256 of the source span: `ee5bb796ddcc48c336abdfb5752881d466e0ecd41eeb1e960855736a142be770`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
