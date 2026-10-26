# `userFormFieldLooksPaymentLike`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726219-726221](../../../../../../../reference/runtime/host-main.cjs#L726219-L726221) | `FunctionDeclaration` | no | `field` |
| [evaluation:560837-560839](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560837-L560839) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726219-726221](../../../../../../../reference/runtime/host-main.cjs#L726219-L726221) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560837-560839](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560837-L560839) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726219

Calls written directly in this body: `PAYMENT_LIKE_FIELD_PATTERN.test`, `fieldSniffText`.

SHA-256 of the source span: `5d3493470450a977e6f140bb2ca99aed7a94566fa30e8c8791df16435cd20c1a`.

### evaluation:560837

Calls written directly in this body: `PAYMENT_LIKE_FIELD_PATTERN.test`, `fieldSniffText`.

SHA-256 of the source span: `5d3493470450a977e6f140bb2ca99aed7a94566fa30e8c8791df16435cd20c1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
